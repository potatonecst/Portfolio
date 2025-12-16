import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from 'lucide-react';

export default function DataArrangerPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>DataArranger_web</TypographyH2>
                <TypographyP>
                    数値シミュレーションの結果を解析するためのWebアプリケーションです。
                </TypographyP>
                <TypographyP>
                    有限差分時間領域（FDTD）法を用いたシミュレーションの結果を、単純な数値計算の結果と合わせてグラフに表示します。
                    データの選択をダイアログで行えるようにし、データを保存する際にもダイアログで名前や保存先を選択できます。
                    アプリケーションを各端末にインストールせずとも、ブラウザから簡単に数値シミュレーション結果を確認できます。
                </TypographyP>
            </div>

            <div>
                <div className="flex flex-wrap gap-4">
                    <Link
                        href="https://data-arranger.potatonecst.com"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            DataArranger_web (AWS)<ExternalLink />
                        </Button>
                    </Link>
                    <Link
                        href="https://data-arrangement-frontend.onrender.com"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            DataArranger_web (Render.com)<ExternalLink />
                        </Button>
                    </Link>
                    <Link
                        href="https://github.com/potatonecst/Data-Arrangement_web"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            GitHubリポジトリ<ExternalLink />
                        </Button>
                    </Link>
                </div>
                <TypographyP>
                    AWSにデプロイしているものと、Render.comにデプロイしているものは同じです。
                    Render.comはHobbyプラン（フリープラン）で利用しているため、サーバーがスリープ状態の場合は起動に30秒から1分程度かかる場合があります。
                </TypographyP>
            </div>

            <div>
                <TypographyH3>機能</TypographyH3>
                <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
                    <li>シミュレーション結果を、実験での測定と比較可能な形でグラフ化（1/4波長板の角度に対する光強度のグラフ）</li>
                    <li>シミュレーション結果の偏光状態を3Dグラフ化（Poincare球表示）</li>
                    <li>グラフを画像として保存（png, svg, jpeg, webp形式）</li>
                    <li>1/4波長板の角度に対する光強度のデータをjson形式で出力</li>
                    <li>Stokesパラメータをjson形式で出力</li>
                </ul>
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
                            <td>Microsoft Edge 最新版</td>
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

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
                <AutoplayCarousel className="mt-4">
                    <CarouselItem key="0" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerWeb_lineChart.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。光強度のグラフが表示されています。"
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アプリケーションの画面です。光強度のグラフが表示されています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="1" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerWeb_poincareChart.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。3次元グラフが表示されています。"
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アプリケーションの画面です。偏光状態を示す3Dグラフが表示されています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="2" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerWeb_top.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。アクセス直後の状態が表示されています。"
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アクセス直後のアプリケーションの画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="3" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerWeb_settings.png"
                                    alt="シミュレーション結果解析用アプリケーションの画面です。設定画面が表示されています。"
                                    fill
                                    className="object-cover"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アプリケーションの設定画面です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="4" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/DataArrangerWeb_spLineChart.png"
                                    alt="シミュレーション結果解析用アプリケーションのスマートフォンでの画面です。光強度のグラフが表示されています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                スマートフォンでのアプリケーションの画面です。光強度のグラフが表示されています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                </AutoplayCarousel>
            </div>

            <div className="space-y-2">
                <TypographyH3>Movie</TypographyH3>
                <video
                    src="/DataArrangerWeb_demo.mp4"
                    controls
                    className="mt-4"
                />
                <TypographyP>
                    画面収録の際に、画面下部が切れてしまっています。後日、新しいものに差し替える予定です。<br />
                    映像は、Render.com版のものですので、サーバーが起動するまで時間がかかっています。<br />
                    ※音声はありません。
                </TypographyP>
            </div>

            <div>
                <TypographyH3>開発</TypographyH3>

                <TypographyP>
                    <b>開発期間</b>: 2025年7月20日 - 2025年11月17日 （運用中）
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>:<br />Python（バックエンド）, TypeScript（フロントエンド）
                </TypographyP>

                <TypographyP>
                    <b>使用ライブラリ等</b>:<br />NumPy, SciPy, Pandas, FastAPI, Uvicorn, React, React Router, React plotly.js, shadcn/ui
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>:<br />pyenv, pyenv-virtualenv, pip, npm, Git, Docker
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>:<br />GitHub, Render.com, AWS Amplify, Amazon Elastic Container Registry, Amazon Elastic Compute Cloud, Amazon CloudFront, Amazon Route 53
                </TypographyP>

                <TypographyP>
                    <b>開発経緯</b>:<br />
                    以前、PySide6を用いて開発を行っていましたが、三次元グラフの実装において技術的な課題に直面しました。
                    そこで、ライブラリが充実しており、参考になる技術情報も豊富なWeb技術を活用することで、この課題を解決できると考えWebアプリケーションへの移行を決意しました。
                    また、Webアプリケーション化により端末ごとのインストールが不要で手軽にシミュレーション結果を確認できるなど利便性の向上も期待できました。
                    本開発は、これらの課題解決に加え、Webフロントエンド開発において広く普及しているReactの習得も兼ねてスタートしました。
                </TypographyP>

                <TypographyP>
                    <b>技術選定理由等</b>:<br />
                    フロントエンドには、情報量が豊富で開発の知見が得やすいReact（TypeScript）を採用しました。
                    アプリケーションの規模を考慮して大規模なフレームワークではなくReact Routerを採用し、UIコンポーネントには導入が容易かつ機能が充実しているshadcn/uiを使用しました。
                    GitHub連携により、コードをプッシュするだけでビルドからデプロイまでが自動的に行われ、かつHobbyプランにより無料で運用開始できるため、最初のデプロイ先にはRender.comを選びました。
                    その後、広く用いられているAWSを用いた開発経験を積む目的で、フロントエンドをAWS Amplifyで、バックエンドをAmazon ECR、Amazon EC2等で再構築しました。
                    併せて、ポートフォリオサイトのためにAmazon Route 53で取得したカスタムドメインを利用して、URLをわかりやすいものにしました。
                </TypographyP>

                <TypographyP>
                    <b>技術的にこだわった点や工夫した点</b>
                </TypographyP>
                <ul className="ml-6 list-disc [&>li]:mt-2">
                    <li>
                        <b>3Dグラフの描画とモダンUIによるUXの向上</b><br />
                        Web技術の強みである豊富なライブラリを活用し、フロントエンドにはReactとplotly.jsを採用しました。
                        これにより、3Dグラフを自由に回転・拡大縮小できるインタラクティブなUIを実現しました。
                        また、UIコンポーネントにshadcn/uiを採用し、研究ツールであってもストレスなく操作できるモダンな画面設計にこだわりました。
                    </li>
                    <li>
                        <b>処理内容に適したシステム構成の検討</b><br />
                        Render.comからの移行に伴いAWSでのバックエンド構築を行った際、当初は学習も兼ねてWeb開発のモダンな構成として定評のあるAWS LambdaとAPI Gatewayを用いたサーバーレス構成での実装を試みました。
                        しかし、NumPyやSciPyなどの数値解析に必要なライブラリのサイズが大きいためか、コンテナの起動処理が終わらずにタイムアウトし続け、APIからデータを取得することができないという問題に直面しました。
                        設定の見直し等も試みましたが、この構成では計算処理を完了できないと判断しました。
                        そこで、特定の構成に固執せず機能の実現を最優先し、常駐型のAmazon EC2とECRを用いる構成へ切り替えました。
                        この経験から、技術の普及度や学習意欲といった動機で技術を選定する際にも、計算量やライブラリの規模などを考えて実行したい処理内容に適した技術かどうかを検証する重要性を学びました。
                    </li>
                    <li>
                        <b>システム構成の刷新に伴うコールドスタート問題の解消</b><br />
                        初期はRender.comのHobbyプラン（無料プラン）でデプロイしていましたが、スリープ状態からの復帰に約1分かかるコールドスタートによる待ち時間が、スムーズな解析作業を阻害していました。
                        この課題を解消すること、そして業界で広く採用されているAWSの技術を実践的に習得することを目的として、システム構成の刷新を決意しました。
                        フロントエンドをAWS Amplify、バックエンドを前述の経緯を経て常時稼働のEC2へ移行した結果、待ち時間を解消し、いつでも即座に解析結果を確認できる環境を実現しました。
                    </li>
                </ul>
            </div>
        </div>
    )
}