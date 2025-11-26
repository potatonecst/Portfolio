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
} from "@react-email/components";

interface ContactEmailProps {
    email: string;
    message: string;
}

export const ContactEmail = ({ email, message }: ContactEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Portfolioからの通知です。</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-10 mx-auto p-5 w-full max-w-lg">
                        <Heading className="text-black text-xl font-bold text-center p-0 my-8 mx-0">
                            お問い合わせありがとうございます。
                        </Heading>
                        <Text className="text-black text-lg leading-6">
                            以下の内容で受け付けました。確認次第ご連絡いたします。
                        </Text>

                        <Section className="bg-gray-100 p-4 rounded-md">
                            <Text className="text-black text-lg leading-6 whitespace-pre-wrap">
                                <b>メールアドレス</b>:<br />
                                {email}
                            </Text>

                            <Hr />

                            <Text className="text-black text-lg leading-6 whitespace-pre-wrap">
                                <b>問い合わせ内容</b>:<br />
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