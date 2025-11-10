// import prisma from "@/lib/prisma";
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, message, cart } = body;

//     if (!name || !email || !phone) {
//       return NextResponse.json(
//         { success: false, message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//       tls: {
//         rejectUnauthorized: false, // <--- allow self-signed certs
//       },
//     });

//     // Cart items table
//     const cartItemsHtml = cart
//       .map(
//         (item: any) => `
//         <tr>
//           <td style="padding:8px; border:1px solid #ddd; text-align:center;">
//             <img src="${item.image}" alt="${item.name}" width="60" height="60" style="border-radius:6px; object-fit:cover;" />
//           </td>
//           <td style="padding:8px; border:1px solid #ddd;">${item.name}</td>
//           <td style="padding:8px; border:1px solid #ddd;">${item.type}</td>
//         </tr>`
//       )
//       .join("");

//     const header = cart.length === 0 ? "📝 New Quotation Request" : "🛒 New Checkout Request";
//     const subject = cart.length === 0 ? `📝 New Quotation Request from ${name}` : `🛒 New Checkout Request from ${name}`;
//     const items = cart.length === 0 ? "" : `
//       <h3 style="margin-top:20px;">Cart Items</h3>
//       <table style="width:100%; border-collapse:collapse; font-size:14px;">
//         <thead>
//           <tr style="background:#f9f9f9;">
//             <th style="padding:8px; border:1px solid #ddd; text-align:center;">Image</th>
//             <th style="padding:8px; border:1px solid #ddd; text-align:left;">Product</th>
//             <th style="padding:8px; border:1px solid #ddd; text-align:left;">Type</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${cartItemsHtml}
//         </tbody>
//       </table>
//     `;

//     // ✅ Build HTML with optional message
//     const htmlContent = `
//       <!DOCTYPE html>
//       <html lang="en">
//         <head>
//           <meta charset="UTF-8" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <title>Checkout Form Submission</title>
//         </head>
//         <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f5f7fa; color:#333;">
//           <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
//             <tr>
//               <td align="center" style="padding: 30px 15px;">
//                 <table width="100%" style="max-width: 600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
//                   <tr>
//                     <td style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 20px; text-align:center;">
//                       <h2 style="margin:0; color:#ffffff; font-size:22px; font-weight:bold;">${header}</h2>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style="padding: 30px;">
//                       <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
//                         <span style="margin-right:8px;">👤</span> ${name}
//                       </p>
//                       <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
//                         <span style="margin-right:8px;">✉️</span> ${email}
//                       </p>
//                       <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
//                         <span style="margin-right:8px;">📞</span> ${phone}
//                       </p>
//                       ${
//                         message && message.trim() !== ""
//                           ? `
//                           <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
//                             <strong style="color:#2563eb;">Message:</strong><br />
//                             <span style="margin-right:8px;">💬</span> ${message}
//                           </p>
//                           `
//                           : ""
//                       }
//                       ${items}
//                       <hr style="margin: 25px 0; border: 0; border-top: 1px solid #e5e7eb;" />
//                       <p style="margin:0; font-size:14px; color:#6b7280; text-align:center;">
//                         This email was sent via <strong>Phatlim Limited website Checkout</strong>.
//                       </p>
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//         </body>
//       </html>
//     `;

//     const mailOptions = {
//       from: `"${name}" <${email}>`,
//       to: process.env.SMTP_USER,
//       subject,
//       html: htmlContent,
//     };

//     await transporter.sendMail(mailOptions);

//     let customer = await prisma.customer.findUnique({ where: { email } });
//     if (!customer) {
//       customer = await prisma.customer.create({
//         data: { name, email, phone },
//       });
//     }

//     return NextResponse.json(
//       { success: true, message: "Order sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Checkout error:", error);
//     return NextResponse.json(
//       { success: false, message: "Error sending order", error: error.message },
//       { status: 500 }
//     );
//   }
// }

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, cart } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const cartItemsHtml = cart
      .map(
        (item: any) => `
        <tr>
          <td style="padding:8px; border:1px solid #ddd; text-align:center;">
            <img src="${item.image}" alt="${item.name}" width="60" height="60" style="border-radius:6px; object-fit:cover;" />
          </td>
          <td style="padding:8px; border:1px solid #ddd;">${item.name}</td>
          <td style="padding:8px; border:1px solid #ddd;">${item.type}</td>
        </tr>`
      )
      .join("");

    const header = cart.length === 0 ? "📝 New Quotation Request" : "🛒 New Checkout Request";
    const subject = cart.length === 0
      ? `📝 Quotation Request from ${name}`
      : `🛒 Checkout Request from ${name}`;

    const items = cart.length === 0 ? "" : `
      <h3 style="margin-top:20px;">Cart Items</h3>
      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <thead>
          <tr style="background:#f9f9f9;">
            <th style="padding:8px; border:1px solid #ddd; text-align:center;">Image</th>
            <th style="padding:8px; border:1px solid #ddd; text-align:left;">Product</th>
            <th style="padding:8px; border:1px solid #ddd; text-align:left;">Type</th>
          </tr>
        </thead>
        <tbody>
          ${cartItemsHtml}
        </tbody>
      </table>
    `;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background:#f5f7fa;">
          <table width="100%">
            <tr>
              <td align="center" style="padding: 30px;">
                <table width="100%" style="max-width: 600px; background:#fff; border-radius:12px; overflow:hidden;">
                  <tr>
                    <td style="background:#2563eb; color:#fff; text-align:center; padding:20px;">
                      <h2>${header}</h2>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:30px;">
                      <p><strong>👤 Name:</strong> ${name}</p>
                      <p><strong>✉️ Email:</strong> ${email}</p>
                      <p><strong>📞 Phone:</strong> ${phone}</p>

                      ${
                        message && message.trim() !== ""
                          ? `<p><strong>💬 Message:</strong><br>${message}</p>`
                          : ""
                      }

                      ${items}

                      <hr style="margin:25px 0; border:0; border-top:1px solid #ddd;">
                      <p style="text-align:center; font-size:12px; color:#777;">
                        Sent through Phatlim Ventures Website Checkout ✅
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // ✅ Send using Resend
    await resend.emails.send({
      from: `"${name}" <${email}>`,
      to: "info@pllimited.ng",
      replyTo: email, // reply directly to customer
      subject,
      html: htmlContent,
    });

    // ✅ Store customer in the database
    const customer = await prisma.customer.findUnique({ where: { email } });

    if (!customer) {
      await prisma.customer.create({
        data: { name, email, phone },
      });
    }

    return NextResponse.json(
      { success: true, message: "Order sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, message: "Error sending order", error: error.message },
      { status: 500 }
    );
  }
}

