import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import { SendMailOptions } from "nodemailer";

// Extend the type to include `context` for Handlebars
interface HandlebarsSendMailOptions extends SendMailOptions {
  template?: string;
  context?: Record<string, any>;
}

// Configuration for Hukot.net
const HUKOT_EMAIL = process.env.HUKOT_EMAIL;
const HUKOT_PASSWORD = process.env.HUKOT_PASSWORD;
const HUKOT_SMTP_HOST = process.env.HUKOT_SMTP_HOST;
const HUKOT_SMTP_PORT = parseInt(process.env.HUKOT_SMTP_PORT || "465");

export async function sendMail(options: {
  from?: string; // Optional: if not provided, will use HUKOT_EMAIL
  to: string | string[]; // Can be a single email or an array of emails
  subject: string;
  template: string; // Name of the .hbs file (without extension)
  context: Record<string, any>; // Data to pass to the template
}) {
  const mailOptions: HandlebarsSendMailOptions = {
    from: options.from ?? `BioTechnics <${HUKOT_EMAIL}>`, // Using a display name is good practice
    to: options.to,
    subject: options.subject,
    template: options.template,
    context: options.context,
  };

  try {
    const transporter = nodemailer.createTransport({
      host: HUKOT_SMTP_HOST,
      port: HUKOT_SMTP_PORT,
      secure: true, // true for port 465, false for other ports like 587 (STARTTLS)
      auth: {
        user: HUKOT_EMAIL,
        pass: HUKOT_PASSWORD, // In a real app: process.env.HUKOT_PASSWORD
      },
      // Optional: Add these for stricter SSL/TLS validation if needed,
      // but hukot.net should have valid certificates.
      // tls: {
      //   rejectUnauthorized: true // Set to false only if you know the server has a self-signed certificate
      // }
    });

    // Configure Handlebars
    transporter.use(
      "compile",
      hbs({
        viewEngine: {
          extname: ".hbs", // or your preferred extension
          partialsDir: path.resolve("./public/email-templates/partials"), // Optional: if you use partials
          layoutsDir: path.resolve("./public/email-templates/layouts"), // Optional: if you use layouts
          defaultLayout: "", // Optional: specify a default layout (e.g., 'default') or leave empty
        },
        viewPath: path.resolve("./public/email-templates"),
        extName: ".hbs", // or your preferred extension
      }),
    );

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
    // console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // Only if using ethereal.email
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    // Consider re-throwing the error or handling it more gracefully
    // depending on your application's needs.
    throw error;
  }
}
