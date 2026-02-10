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
                        日本物理学会 第80回年次大会 口頭発表（2025年9月18日 広島大学東広島キャンパス）
                    </TypographyP>
                </div>

                <div>
                    <TypographyH3>インターン・仕事体験</TypographyH3>
                    <ul className="my-4 ml-6 list-disc [&>li]:mt-2 [&>li]:font-bold">
                        <li>
                            SEの仕事に関する7人でのグループワーク（2025年8月 / 5日間）
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        顧客課題の探索から解決策の提案に加え、ユーザー登録フォームのエラー設計を行いました。
                                        また、システム障害を題材としたワークも行い、発生要因を深く掘り下げることで根本原因を特定し、再発防止策を検討しました。
                                    </TypographyP>
                                </li>
                            </ul>
                        </li>
                        <li>4人でのグループワーク形式によるデジタル広告の業務改善システム要件定義の体験（2025年8月 / 1日）</li>
                        <li>3人でのグループワーク形式によるシステム構成図とユースケース図の作成体験（2025年8月 / 2日間）</li>
                        <li>システムの開発と運用業務の</li>
                        <li>3人で生成AIを利用して短期間でのゲーム制作（2025年12月 / 3日間）</li>
                    </ul>
                </div>

                <div>
                    <TypographyH3>趣味</TypographyH3>
                    <ul className="my-4 list-none [&>li]:mt-2 [&>li]:font-bold">
                        <li>
                            楽器の演奏（トロンボーン、トランペット、ヴァイオリン）、ゲーム
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        中学では吹奏楽部でトロンボーンを、高校では音楽部（主にオーケストラ）でトランペットを、大学では管弦楽サークルでトロンボーンを担当していました。
                                        現在は、高校の部活の同期や顧問の先生が中心になって結成された市民オーケストラ団体でトロンボーンを演奏しています。
                                        また、1年ほど前からヴァイオリンを始めました。
                                    </TypographyP>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <TypographyH3>使用言語</TypographyH3>
                    <ul className="my-4 list-none [&>li]:mt-2 [&>li]:font-bold">
                        <li>
                            Python
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        研究で主に使用している言語です。
                                        データ解析やアプリケーションのバックエンドに利用しています。
                                    </TypographyP>
                                </li>
                                <li>Paiza: Aランク（2025年7月）</li>
                            </ul>
                        </li>
                        <li>
                            TypeScript
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        Webアプリケーションのフロントエンドで使用しています。
                                        主にReactを用いて開発しています。
                                    </TypographyP>
                                </li>
                                <li>Paiza（JavaScript）: Cランク （2026年2月）</li>
                            </ul>
                        </li>
                        <li>
                            C
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        大学の数値計算の講義で使用しました。
                                        基本的な文法や数値計算のアルゴリズムを学びました。
                                    </TypographyP>
                                </li>
                                {/*<li>Paiza: 取得ランクなし</li>*/}
                            </ul>
                        </li>
                        <li>
                            C#
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        Unityを用いたゲーム開発で使用しています。
                                    </TypographyP>
                                </li>
                                <li>Paiza: Bランク（2026年2月）</li>
                            </ul>
                        </li>
                        <li>
                            C++
                            <ul className="list-none [&>li]:font-normal">
                                <li>
                                    <TypographyP>
                                        入門書・入門サイトで学習しています。
                                        開発経験はありません。
                                    </TypographyP>
                                </li>
                                <li>Paiza: Aランク（2025年7月）</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}