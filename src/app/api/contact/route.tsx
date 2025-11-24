import { NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    //   tls: {
    //     rejectUnauthorized: false, // <--- allow self-signed certs
    //   },
    // });

    await resend.emails.send({
      from: "Phatlim Limited <info@pllimited.ng>",
      to: "info@pllimited.ng",
      replyTo: email, // reply directly to customer
      subject: `New Contact Message from ${name}`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Contact Form Submission</title>
        </head>
        <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f5f7fa; color:#333;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
              <td align="center" style="padding: 30px 15px;">
                <table width="100%" style="max-width: 600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                  <tr>
                    <td style="background: linear-gradient(135deg, #2563eb, #1e40af); padding: 20px; text-align:center;">
                      <h2 style="margin:0; color:#ffffff; font-size:22px; font-weight:bold;">📩 New Contact Form Message</h2>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
                        <span style="margin-right:8px;">👤</span> ${name}
                      </p>
                      <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
                        <span style="margin-right:8px;">✉️</span> ${email}
                      </p>
                      <p style="margin: 0 0 15px; font-size: 16px; line-height:1.6;">
                        <span style="margin-right:8px;">💬</span> ${message}
                      </p>
                      <hr style="margin: 25px 0; border: 0; border-top: 1px solid #e5e7eb;" />
                      <p style="margin:0; font-size:14px; color:#6b7280; text-align:center;">
                        This email was sent via <strong>Phatlim Limited website contact form</strong>.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,

    });

    return NextResponse.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending mail:', error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}
