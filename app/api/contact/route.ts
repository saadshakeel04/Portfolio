import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0d1117; color: #f0f6fc; border-radius: 12px;">
          <h2 style="color: #06b6d4; margin-bottom: 8px;">New Message from Portfolio</h2>
          <hr style="border-color: #21262d; margin-bottom: 20px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #8b949e; width: 80px;">From:</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #06b6d4;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e;">Subject:</td>
              <td style="padding: 8px 0; font-weight: 600;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #161b22; border-radius: 8px; border: 1px solid #21262d;">
            <p style="color: #8b949e; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #f0f6fc;">${message}</p>
          </div>

          <hr style="border-color: #21262d; margin-top: 20px;" />
          <p style="font-size: 12px; color: #8b949e;">Sent via your portfolio contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
