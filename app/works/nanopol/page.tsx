import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import { ExternalLink } from 'lucide-react';

export default function NanoPolPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>NanoPol</TypographyH2>
                <TypographyP>
                    実験の測定を自動化するWindows向けデスクトップアプリケーションです。
                </TypographyP>
                {/*<TypographyP>
                    テスト。
                </TypographyP>*/}
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/NanoPol"
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
                <TypographyH3>機能</TypographyH3>
                <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
                    <li>ステッピングモータによる回転ステージを接続して、1/4波長板を操作できるようになる予定です。</li>
                    <li>カメラを接続して、画像や映像の撮影が出入るようになる予定です。</li>
                    <li>1/4波長板とカメラを操作して、自動で測定ができるようになる予定です。</li>
                </ul>
            </div>

            <div>
                <TypographyH3>動作環境</TypographyH3>
                <table className="w-full mt-4">
                    <thead className="[&>tr]:bg-accent [&>tr]:m-0 [&>tr]:border-t [&>tr]:p-0 [&>tr]:shadow-sm [&_th]:border [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-bold">
                        <tr>
                            <th>接続機器</th>
                            <th>機種名</th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:even:bg-muted [&>tr]:m-0 [&>tr]:border-t [&>tr]:p-0 [&_td]:border [&_td]:px-4 [&_td]:py-2 [&_td]:text-left">
                        <tr>
                            <td>ステージコントローラ</td>
                            <td>OptoSigma GSC-01 （RS232C接続）</td>
                        </tr>
                        <tr>
                            <td>カメラ</td>
                            <td>Thorlabs DCC1645C （USB接続）</td>
                        </tr>
                        <tr>
                            <td>回転ステージ</td>
                            <td>OptoSigma OSMS-60YAW （ステージコントローラと接続）</td>
                        </tr>
                    </tbody>
                </table>
                {/*<ul className={`my-0 ml-4 list-["※"] [&>li]:mt-2`}>
                    <li>Android OSでの動作確認はしていません。</li>
                </ul>*/}
            </div>

            {/*<div className="space-y-2">
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
            </div>*/}

            {/*<div className="space-y-2">
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
            </div>*/}

            <div>
                <TypographyH3>開発</TypographyH3>

                <TypographyP>
                    <b>開発期間</b>: 2025年12月4日 - （運用中）
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>:<br />Python（バックエンド）, TypeScript（フロントエンド）
                </TypographyP>

                <TypographyP>
                    <b>使用ライブラリ等</b>:<br />Tauri, NumPy, SciPy, PySerial, OpenCV, PyuEye, tifffile, Pandas, FastAPI, Pydantic, Uvicorn, React, zod, React plotly.js, shadcn/ui
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>:<br />uv, pnpm, Git
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>:<br />GitHub
                </TypographyP>

                <TypographyP>
                    <b>開発経緯</b>:<br />
                    従来測定では手作業で1/4波長板をホルダーから取り出し、手動で角度を変えて1枚1枚写真を撮影していました。
                    これを自動的に行うことができれば、実験の精度や効率が飛躍的に上がると考えました。
                </TypographyP>

                <TypographyP>
                    <b>技術選定理由等</b>:<br />
                    macOSでWindows向けデスクトップアプリケーションを開発するために、マルチプラットフォーム対応のフレームワークを使用しました。
                    また、UIをリッチに仕上げるために、Web技術を適用できるフレームワークを用いることにしました。
                    その中で、OS標準のブラウザを使用することでアプリケーションのサイズを抑えられるTauriをフレームワークとして使用することに決めました。
                    さらに、Pythonのパッケージ管理ツールをpipからuvに変更する事で、Pythonのバージョン管理や仮想環境作成にpyenvやpyenv-virtualenvが不要になりました。
                </TypographyP>

                {/*<TypographyP>
                    <b>技術的にこだわった点や工夫した点</b>
                </TypographyP>
                <ul className="ml-6 list-disc [&>li]:mt-2">
                    <li>
                        <b>テスト</b><br />
                        テスト。
                    </li>
                </ul>*/}
            </div>
        </div>
    )
}