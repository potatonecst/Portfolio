import * as React from "react";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";

export default function ContactPage() {
    return (
        <div className="col-span-full md:grid md:grid-cols-12">
            <div className="md:col-span-10 md:col-start-2 space-y-4">
                <div>
                    <TypographyH2>お問い合わせ</TypographyH2>
                    <TypographyP>
                        このページは現在作成中です。
                        Mail: neiro.tus1225544@gmail.com
                    </TypographyP>
                </div>
            </div>
        </div>
    );
}