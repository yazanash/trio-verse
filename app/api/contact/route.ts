import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message, type } = await req.json();
    const pass = process.env.RESEND_API_KEY;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "trio3verse@gmail.com",
        pass: pass,
      },
    });

    const mailOptions = {
      from: "trio3verse@gmail.com",
      to: "trio3verse@gmail.com",
      replyTo: email,
      subject: `New Mission: ${type} from ${name}`,
      html: `
    <div style="background-color: #020617; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #f8fafc; text-align: center;">
      <div style="max-width: 600px; margin: 0 auto; background: #0f172a; border: 1px solid #1e293b; border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
        
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px; color: #ffffff; text-transform: uppercase;">New Inquiry Sync</h1>
          <p style="margin: 10px 0 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">TrioVerse Mission Control</p>
        </div>

        <div style="padding: 40px; text-align: left;">
          <div style="margin-bottom: 30px;">
            <span style="background: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; border: 1px solid rgba(59, 130, 246, 0.2);">
              ID: ${Math.random().toString(36).substr(2, 9).toUpperCase()}
            </span>
          </div>

          <div style="margin-bottom: 25px;">
            <label style="display: block; color: #94a3b8; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Client / Organization</label>
            <div style="font-size: 18px; font-weight: 600; color: #f1f5f9;">${name}</div>
          </div>

          <div style="margin-bottom: 25px; display: flex; gap: 20px;">
            <div style="flex: 1;">
              <label style="display: block; color: #94a3b8; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Category</label>
              <div style="font-size: 16px; color: #f1f5f9; font-weight: 500;">${type}</div>
            </div>
            <div style="flex: 1;">
              <label style="display: block; color: #94a3b8; font-size: 12px; text-transform: uppercase; margin-bottom: 5px;">Contact</label>
              <div style="font-size: 16px; color: #3b82f6; font-weight: 500;">${email}</div>
            </div>
          </div>

          <div style="margin-top: 30px; padding: 25px; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px solid rgba(255,255,255,0.05);">
            <label style="display: block; color: #94a3b8; font-size: 12px; text-transform: uppercase; margin-bottom: 10px;">Message Brief</label>
            <div style="color: #cbd5e1; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 40px; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #ffffff; color: #020617; padding: 14px 28px; border-radius: 12px; font-weight: bold; text-decoration: none; font-size: 14px; transition: all 0.3s;">
              Reply to Client
            </a>
          </div>
        </div>

        <div style="padding: 20px; border-top: 1px solid #1e293b; text-align: center; font-size: 11px; color: #64748b; background: #0c111d;">
          Systems Operational // TrioVerse Labs © 2026
        </div>
      </div>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
