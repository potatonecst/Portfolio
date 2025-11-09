import * as React from "react";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="col-span-full md:grid md:grid-cols-12">
            <div className="md:col-span-10 md:col-start-2 space-y-8">
                <TypographyH2>自己紹介</TypographyH2>
                <div>
                    <div className="flex gap-4 items-center">
                        <TypographyH3>あぬ（potatonecst）</TypographyH3>
                        <Link 
                            href="https://github.com/potatonecst"
                            target="_blank"
                        >
                            <Button variant="outline">
                                GitHub<ExternalLink />
                            </Button>
                        </Link>
                    </div>
                    <TypographyP>
                        理学研究科 物理学専攻 修士1年
                    </TypographyP>
                </div>
                <div>
                    <TypographyH3>研究</TypographyH3>
                    <TypographyP>
                        研究テーマ:<br /><b>スピン運動量ロック光を用いた粒子位置の検出</b>
                    </TypographyP>
                    <TypographyP>
                        ナノ光ファイバ表面にナノ粒子を付着させると、２つの出力を持つ光学デバイスになります。
                        このデバイスの粒子の位置をファイバモードのスピン運動量ロックを用いて検出する研究を行っています。
                        光ファイバの一部分を熱しながら引き延ばして細くした領域からは光が漏れ出します。
                        粒子はこの光を散乱し、散乱光には粒子の付着角度の情報が含まれます。
                        散乱光の光路に素子を入れて光強度を測定すると、粒子の付着角度が推定できます。
                    </TypographyP>
                    <TypographyP>
                        日本物理学会 第80回年次大会 発表（2025年9月18日）
                    </TypographyP>
                </div>
                <div>
                    <TypographyH3>趣味</TypographyH3>
                    <TypographyP>
                        楽器の演奏（トロンボーン、トランペット、ヴァイオリン）、ゲーム
                    </TypographyP>
                </div>
            </div>
        </div>
    );
}