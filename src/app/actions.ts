"use server";

import { sendMail } from "@/lib/nodemailer.config";
import prisma from "@/lib/prisma";
import { OrderSchema } from "@/schema/OrderSchema";

export const createOrder = async (order: typeof OrderSchema._output) => {
  let orderId = 115;
  const lastOrderIds = await prisma.lastOrderId.findMany();
  let lastOrderId = lastOrderIds?.[0];

  if (!lastOrderId || !lastOrderId.orderId) {
    lastOrderId = await prisma.lastOrderId.create({
      data: {
        orderId: orderId,
      },
    });
  }

  orderId = lastOrderId.orderId;

  const createdOrder = await prisma.order.create({
    data: { ...order, orderId: orderId + 1 },
  });

  await prisma.lastOrderId.update({
    where: {
      id: lastOrderId.id,
    },
    data: {
      orderId: {
        increment: 1,
      },
    },
  });

  sendMail({
    to: order.email,
    subject: `Biotechnic: Order confirmed ${orderId}`,
    template: "customer",
    context: {
      fullName: order.fullName,
      streetAddress: order.streetAddress,
      city: order.city,
      zipCode: order.zipCode,
      region: order.region,
      country: order.country,
      phoneNumber: order.phoneNumber,
      email: order.email,
    },
  });

  sendMail({
    to: "info@biotechnics.com",
    subject: `Biotechnic: Order confirmed ${orderId}`,
    template: "owner",
    context: {
      fullName: order.fullName,
      streetAddress: order.streetAddress,
      city: order.city,
      zipCode: order.zipCode,
      region: order.region,
      country: order.country,
      phoneNumber: order.phoneNumber,
      email: order.email,
      orderId,
    },
  });

  return createdOrder;
};
