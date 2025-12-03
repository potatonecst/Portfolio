import * as React from "react";

import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
    Tailwind,
    Section,
    Hr,
    Link,
    Font,
} from "@react-email/components";

interface ContactEmailProps {
    email: string;
    message: string;
}

export const ContactEmail = ({ email, message }: ContactEmailProps) => {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Geist"
                    fallbackFontFamily="sans-serif"
                    webFont={{
                        url: "https://fonts.googleapis.com/css2?family=Geist:wght@800&display=swap",
                        format: "woff2",
                    }}
                    fontWeight={800}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Portfolioからの通知です。</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-10 mx-auto p-5 w-full max-w-lg">
                        <Heading
                        className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
                        style={{fontFamily: "Geist, sans-serif"}}
                        >
                            Portfolio
                        </Heading>
                        <Text className="text-black text-base font-bold text-center p-0 my-8 mx-0">
                            お問い合わせありがとうございます。
                        </Text>
                        <Text className="text-black text-base leading-6">
                            以下の内容で受け付けました。確認次第ご連絡いたします。
                        </Text>

                        <Section className="bg-gray-100 p-4 rounded-md">
                            <Text className="text-black text-lg font-bold leading-6 whitespace-pre-wrap">
                                <b>メールアドレス</b>
                            </Text>
                            <Text className="text-black text-base leading-6 whitespace-pre-wrap">
                                {email}
                            </Text>

                            <Hr />

                            <Text className="text-black text-lg font-bold leading-6 whitespace-pre-wrap">
                                問い合わせ内容
                            </Text>
                            <Text className="text-black text-base leading-6 whitespace-pre-wrap">
                                {message}
                            </Text>
                        </Section>

                        <Section className="mt-8 border-t border-solid border-[#eaeaea] pt-8">
                            <Text className="text-gray-500 text-xs leading-6">
                                ※このメールにお心当たりがない場合は、このメールは無視してください。<br />
                                ※このメールは自動送信です。
                            </Text>

                            <Text className="text-center text-gray-500 text-xs leading-6 mt-4">
                                <Link href="https://portfolio.potatonecst.com">
                                    https://portfolio.potatonecst.com
                                </Link>
                            </Text>
                            <Text className="text-center text-gray-500 text-xs leading-6">
                                © 2025 あぬ (potatonecst). All rights reserved.
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactEmail;