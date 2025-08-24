import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, cart, message } = body;

    if (!name || !email || !phone || !cart?.length) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Build cart items as HTML table (with images)
    const itemsHtml = cart
      .map(
        (item: any) => `
          <tr>
            <td style="padding:8px; border:1px solid #ddd; text-align:center;">
              <img src="${item.imageUrl}" alt="${item.name}" width="60" height="60" style="border-radius:8px; object-fit:cover;" />
            </td>
            <td style="padding:8px; border:1px solid #ddd;">${item.name}</td>
            <td style="padding:8px; border:1px solid #ddd;">${item.type}</td>
            <td style="padding:8px; border:1px solid #ddd; text-align:center;">1</td>
          </tr>
        `
      )
      .join("");

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding:16px; max-width:600px; margin:auto;">
        <h2 style="color:#333;">🛒 New Cart Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
        
        <h3 style="margin-top:20px;">Cart Items</h3>
        <table style="width:100%; border-collapse:collapse; font-size:14px;">
          <thead>
            <tr>
              <th style="padding:8px; border:1px solid #ddd; text-align:center;">Image</th>
              <th style="padding:8px; border:1px solid #ddd; text-align:left;">Product</th>
              <th style="padding:8px; border:1px solid #ddd; text-align:left;">Category</th>
              <th style="padding:8px; border:1px solid #ddd; text-align:center;">Qty</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
        
        <p style="margin-top:20px; font-size:12px; color:#888;">
          This email was sent via <strong>Phatlim Limited</strong> checkout.
        </p>
      </div>
    `;

    // Send email with Resend
    const data = await resend.emails.send({
      from: `"${name}" <${email}>`,
      to: "olanrewajuyusuf280@gmail.com",
      subject: `🛒 New Cart Submission from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
