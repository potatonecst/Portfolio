import * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AlertCircleIcon } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="col-span-full md:grid md:grid-cols-12">
            <div className="md:col-span-10 md:col-start-2 space-y-4">
                <div>
                    <TypographyH2>お問い合わせ</TypographyH2>
                </div>

                <Alert variant="default">
                    <AlertCircleIcon />
                    <AlertTitle>このページは現在作成中です。</AlertTitle>
                    <AlertDescription>
                        <TypographyP>
                            以下のメールアドレスまでご連絡ください。<br />
                            Mail: neiro.tus1225544@gmail.com
                        </TypographyP>

                    </AlertDescription>
                </Alert>
            </div>
        </div>
    );
}