import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ExternalLink } from "lucide-react";

export default function PortfolioPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>Portfolio</TypographyH2>
                <TypographyP>
                    自己紹介や成果物をまとめたポートフォリオサイトです。
                </TypographyP>
                <TypographyP>
                    研究やプログラミング成果物の概要を紹介しています。
                    各成果物の機能や仕様のほか、開発に開発に使用している技術・サービスも掲載しています。<br />
                    お問い合わせフォームを実装し、このフォームから問い合わせが送信された場合は、Resendを用いて送信者とサイト管理者にメールが自動送信されるようにしています。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/Portfolio"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            GitHubリポジトリ<ExternalLink />
                        </Button>
                    </Link>
                </div>
            </div>

            <div>
                <TypographyH3>動作環境</TypographyH3>
                <table className="w-full mt-4">
                    <thead className="[&>tr]:bg-accent [&>tr]:m-0 [&>tr]:border-t [&>tr]:p-0 [&>tr]:shadow-sm [&_th]:border [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-bold">
                        <tr>
                            <th>OS</th>
                            <th>推奨条件</th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:even:bg-muted [&>tr]:m-0 [&>tr]:border-t [&>tr]:p-0 [&_td]:border [&_td]:px-4 [&_td]:py-2 [&_td]:text-left">
                        <tr>
                            <td>macOS</td>
                            <td>
                                <ul>
                                    <li>Firefox 最新版</li>
                                    <li>Google Chrome 最新版</li>
                                    <li>Safari 最新版</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Windows</td>
                            <td>
                                <ul>Microsoft Edge 最新版</ul>
                                <ul>Google Chrome 最新版</ul>
                            </td>
                        </tr>
                        <tr>
                            <td>iOS</td>
                            <td>
                                <ul>
                                    <li>Safari 最新版</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>iPadOS</td>
                            <td>Safari 最新版</td>
                        </tr>
                    </tbody>
                </table>
                <ul className={`my-0 ml-4 list-["※"] [&>li]:mt-2`}>
                    <li>Android OSでの動作確認はしていません。</li>
                </ul>
            </div>

            <div>
                <TypographyH3>開発</TypographyH3>

                <TypographyP>
                    <b>開発期間</b>: <Badge className="shadow-md">機能開発</Badge> 2025年11月1日 – 2025年12月16日、<Badge className="bg-blue-700 shadow-md">更新中</Badge> 2025年2月11日 –
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>: TypeScript
                </TypographyP>

                <TypographyP>
                    <b>使用ライブラリ等</b>: React, Next.js, zod, shadcn/ui
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>:<br />
                    npm, Git, Git LFS, OBS（動画収録）<br />
                    <Badge variant="outline" className="border-blue-700/50 shadow-sm">2026/02/26 –</Badge> Final Cut Pro（動画編集）, Motion（動画編集）
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>: GitHub, AWS Amplify, Resend, さくらのメールボックス, Google Fonts<br />
                    <Badge variant="outline" className="border-blue-700/50 shadow-sm">2026/02/27 –</Badge> YouTube
                </TypographyP>

                <TypographyP>
                    <b>開発経緯</b>:<br />
                    作成したアプリケーションや、自身の自己紹介を1箇所にまとめて掲載することを目的に開発しました。
                    Webアプリケーションのような複雑な機能は持たせず、情報の閲覧を主目的としたシンプルなWebサイトとして構築しました。
                </TypographyP>

                <TypographyP>
                    <b>技術選定理由等</b>:<br />
                    DataArranger_webではReact Routerを使用しましたが、本サイトでは、現在広く用いられているNext.jsを学ぶ目的でこれを採用しました。
                    お問い合わせフォームのメール自動送信サービスには、フリープランで利用でき、かつ開発者にとって扱いやすいと定評のあるResendを採用しました。
                    デプロイ環境には、DataArranger_webと同じく、GitHub連携による自動ビルド・デプロイが容易なAWS Amplifyを利用しました。
                    併せて、Amazon Route 53でカスタムドメインを取得・設定し、URLを簡潔で分かりやすいものにしました。
                </TypographyP>
            </div>
        </div>
    )
}