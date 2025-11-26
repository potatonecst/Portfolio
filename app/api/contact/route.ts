import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/components/emails/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.FROM_EMAIL as string; //送信元メールアドレス
const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string; //管理者メールアドレス

export async function POST(request: Request) {
    try {
        const { email, message } = await request.json();

        await Promise.all([
            //管理者への通知メール
            resend.emails.send({
                from: `Portfolio System <${FROM_EMAIL}>`,
                to: [ADMIN_EMAIL],
                subject: "[Portfolio] 新しいお問い合わせ",
                text: [
                    "以下の内容でお問い合わせがありました。",
                    "",
                    `送信者メールアドレス: ${email}`,
                    "",
                    "内容:",
                    `${message}`,
                    "",
                    "このメールは、Resendによって自動送信されています。"
                ].join("\n")
            }),

            //問い合わせ者への通知メール
            resend.emails.send({
                from: `Portfolio System <${FROM_EMAIL}>`,
                to: [email],
                subject: "[Portfolio] お問い合わせありがとうございます。",
                react: ContactEmail({ email, message })
            }),
        ]);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error}, { status: 500 })
    }
}