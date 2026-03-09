import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
                <AutoplayCarousel className="mt-4">
                    <CarouselItem key="0" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/NanoPol/NanoPol_v0_1_device_connection_tooltip_demo_mock.png"
                                    alt="アプリケーションを起動して最初に表示される画面のモックです。カメラやステッピングモーターで駆動するステージを接続するための画面です。Tooltipでアイコンの説明が表示されています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                アプリケーションを起動して最初に表示される画面のモックです。カメラやステッピングモーターで駆動するステージを接続するための画面です。Tooltipでアイコンの説明が表示されています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="1" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/NanoPol/NanoPol_v0_1_device_connection_connected_mock.png"
                                    alt="カメラやステッピングモーターで駆動するステージが接続されている画面のモックです。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                カメラやステッピングモーターで駆動するステージが接続されている画面のモックです。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="2" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/NanoPol/NanoPol_v0_1_manual_control_mock.png"
                                    alt="手動で測定装置を操作する画面のモックです。左側で装置を操作し、右側にカメラの画像が映し出される予定です。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                手動で測定装置を操作する画面のモックです。左側で装置を操作し、右側にカメラの画像が映し出される予定です。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="3" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/NanoPol/NanoPol_v0_1_manual_control_log_medium_mock.png"
                                    alt="手動で測定装置を操作する画面のモックです。装置を操作すると、上部にToastが表示されます。ログが下側に表示されています。この画像から、ライトモードになっています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                手動で測定装置を操作する画面のモックです。装置を操作すると、上部にToastが表示されます。ログが下側に表示されています。この画像から、ライトモードになっています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="4" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/NanoPol/NanoPol_v0_1_manual_control_log_max_mock.png"
                                    alt="手動で測定装置を操作する画面のモックです。最大化されたログが表示されています。ログは、内容によって色分けされています。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                手動で測定装置を操作する画面のモックです。最大化されたログが表示されています。ログは、内容によって色分けされています。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                    <CarouselItem key="5" className="px-1 min-w-0">
                        <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                            <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                <Image
                                    src="/NanoPol/NanoPol_v0_1_settings_mock.png"
                                    alt="設定画面のモックです。"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="object-cover h-full w-auto"
                                />
                            </CardContent>
                            <CardDescription className="p-2">
                                設定画面のモックです。
                            </CardDescription>
                        </Card>
                    </CarouselItem>
                </AutoplayCarousel>
            </div>

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
                    <b>開発期間</b>: <Badge className="shadow-sm">開発中</Badge> 2025年12月4日 –
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