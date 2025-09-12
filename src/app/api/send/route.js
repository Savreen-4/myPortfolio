import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();
    if (!email || !message) {
      return NextResponse.json({ success: false, message: "Email and message are required." }, { status: 400 });
    }
    
// apppassword:zfur hbny oswi xlhf

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    console.log('transporter===>>',transporter)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      subject: subject || "New Message from Portfolio",
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
