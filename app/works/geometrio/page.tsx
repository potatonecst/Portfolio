import * as React from "react";

import Link from "next/link";
import Image from "next/image";

import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { AutoplayCarousel } from "@/components/ui/autoplayCarousel";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { ExternalLink } from "lucide-react";

const currentVersion = "0.2.1"

const galleryItems_0_3_0 = [
    {
        key: "0",
        src: "/GeomeTRIo/GeomeTRIo_playing1_v0_3_0.png",
        alt: "2Dシューティングゲームのゲーム画面です。",
        description: "2Dシューティングゲームのゲーム画面です。",
    },
    {
        key: "1",
        src: "/GeomeTRIo/GeomeTRIo_stage_start_performance_v0_3_0.png",
        alt: "2Dシューティングゲームのステージ開始時の演出です。",
        description: "2Dシューティングゲームのステージ開始時の演出です。",
    },
    {
        key: "2",
        src: "/GeomeTRIo/GeomeTRIo_title_v0_3_0.png",
        alt: "2Dシューティングゲームのタイトル画面です。",
        description: "2Dシューティングゲームのタイトル画面です。",
    },
    {
        key: "3",
        src: "/GeomeTRIo/GeomeTRIo_main_menu_v0_3_0.png",
        alt: "2Dシューティングゲームのメインメニュー画面です。",
        description: "2Dシューティングゲームのメインメニュー画面です。",
    },
    {
        key: "4",
        src: "/GeomeTRIo/GeomeTRIo_stage_select_v0_3_0.png",
        alt: "2Dシューティングゲームのステージ選択画面です。",
        description: "2Dシューティングゲームのステージ選択画面です。",
    },
    {
        key: "5",
        src: "/GeomeTRIo/GeomeTRIo_gameover_v0_3_0.png",
        alt: "2Dシューティングゲームのゲームオーバー画面です。",
        description: "2Dシューティングゲームのゲームオーバー画面です。",
    },
    {
        key: "6",
        src: "/GeomeTRIo/GeomeTRIo_ranking_v0_3_0.png",
        alt: "2Dシューティングゲームのランキング画面です。",
        description: "2Dシューティングゲームのランキング画面です。",
    },
    {
        key: "7",
        src: "/GeomeTRIo/GeomeTRIo_settings_v0_3_0.png",
        alt: "2Dシューティングゲームの設定画面です。",
        description: "2Dシューティングゲームの設定画面です。",
    },
]
const galleryItems_0_2_1 = [
    {
        key: "0",
        src: "/GeomeTRIo/GeomeTRIo_playing1.png",
        alt: "2Dシューティングゲームのゲーム画面です。",
        description: "2Dシューティングゲームのゲーム画面です。",
    },
    {
        key: "1",
        src: "/GeomeTRIo/GeomeTRIo_playing2.png",
        alt: "2Dシューティングゲームのゲーム画面です。",
        description: "2Dシューティングゲームのゲーム画面です。",
    },
    {
        key: "2",
        src: "/GeomeTRIo/GeomeTRIo_title.png",
        alt: "2Dシューティングゲームのタイトル画面です。",
        description: "2Dシューティングゲームのタイトル画面です。",
    },
    {
        key: "3",
        src: "/GeomeTRIo/GeomeTRIo_gameover.png",
        alt: "2Dシューティングゲームのゲームオーバー画面です。",
        description: "2Dシューティングゲームのゲームオーバー画面です。",
    },
    {
        key: "4",
        src: "/GeomeTRIo/GeomeTRIo_ranking.png",
        alt: "2Dシューティングゲームのランキング画面です。",
        description: "2Dシューティングゲームのランキング画面です。",
    },
]

export default function GeometrioPage() {
    return (
        <div className="space-y-8">
            <div>
                <TypographyH2>GeomeTRIo</TypographyH2>
                <TypographyP>
                    現在製作中のUnity製の2Dシューティングゲームです。
                </TypographyP>
                <TypographyP>
                    三角形の自機の頂点が弾の発射点となっており、発射点を切り替えながら遊びます。
                    発射点の切り替えを戦略的に活かすために画面下部から敵が出現するようにした他、
                    敵同士の衝突で弾が全方位に発射されるようにして、
                    画面下部からの敵を素早く倒す意味を持たせています。
                </TypographyP>
            </div>

            <div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/potatonecst/GeomeTRIo"
                        target="_blank"
                        className="w-fit"
                    >
                        <Button variant="outline">
                            GitHubリポジトリ<ExternalLink />
                        </Button>
                    </Link>
                </div>
                <TypographyP>
                    GitHubリポジトリの「Release」からダウンロードできます。現在の最新バージョンは<b>{currentVersion}</b>です。
                </TypographyP>
                <TypographyP><b>入手可能バージョン</b></TypographyP>
                <ul className={`list-disc ml-6 [&>li]:mt-2`}>
                    <li>mac_arm64（Apple silicon搭載Mac）</li>
                    <li>mac_Intel64（Intel Mac）</li>
                    <li>win_Intel64（Windows）</li>
                    <li className={`list-["※"]`}>Intel Mac版とWindows(Intel64)版は動作確認を行っていません。また、arm版Windows用のソフトウェアは現在リリースしていません。</li>
                </ul>
            </div>

            <div>
                <TypographyH3>仕様</TypographyH3>
                <div className="mt-4">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="0"
                        className="rounded-lg border"
                    >
                        <AccordionItem key="0" value="0" className="px-4">
                            <AccordionTrigger className="text-lg">Version 0.3.0時点</AccordionTrigger>
                            <AccordionContent>
                                <ul className="ml-6 list-disc [&>li]:mt-2 text-base">
                                    <li>正三角形の前方、左斜め後方、右斜め後方の3箇所の頂点が弾の発射口</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>発射口を左右に切り替えながらプレイ</li>
                                    </ul>
                                    <li>HPが尽きるとゲームオーバー</li>
                                    <li>SPを消費して、無敵状態で回転しながら3方向に弾を発射するスピンアタックを発動（ボムに相当）</li>
                                    <li>HPは1から10、SPは0から10の間で設定可能（HPの初期値は3、SPの初期値は2）</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>HPは一定スコア獲得で回復（回復量：1）</li>
                                        <li>SPは敵に一定のダメージを与えたり、敵を撃破したりすることで増加するゲージを貯めると+1</li>
                                    </ul>
                                    <li>敵を倒すと、一定確率でパワーアップアイテムをドロップする</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>パワーアップアイテムを規定数集めると、レベルが1つ上昇する</li>
                                        <li>パワーアップは、Lv.1 Normalから、Lv.10まである</li>
                                    </ul>
                                    <li>パワーアップ効果例</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>連射スピードアップ（自動連射オフの場合、一度に発射される弾の数が増加）</li>
                                        <li>弾の攻撃力が上昇（与ダメージの増加）</li>
                                        <li>弾の発射範囲の拡大</li>
                                    </ul>
                                    <li>各ステージごとに、各プレイ条件ごとに上位5つのスコアを記録し、ランキングを表示</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>HP, SPの初期値、自動連射の有無などの組み合わせにおいて、それぞれ上位5つのスコアを記録</li>
                                    </ul>
                                    <li>ゲームパッドを使用する場合、振動機能を使用可能（設定で変更可能）</li>
                                    <li>セーブデータは1つだけ</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>ゲームオーバー時やポーズ画面でメニューに戻る際に保存される</li>
                                    </ul>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem key="1" value="1" className="px-4">
                            <AccordionTrigger className="text-lg">Version 0.2.1時点</AccordionTrigger>
                            <AccordionContent>
                                <ul className="ml-6 list-disc [&>li]:mt-2 text-base">
                                    <li>正三角形の前方、左斜め後方、右斜め後方の3箇所の頂点が弾の発射口</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>発射口を左右に切り替えながらプレイ</li>
                                    </ul>
                                    <li>HPが尽きるとゲームオーバー</li>
                                    <li>SPを消費して、無敵状態で回転しながら3方向に弾を発射するスピンアタックを発動（ボムに相当）</li>
                                    <li>HPは1から10、SPは0から10の間で設定可能（どちらも初期値は3）</li>
                                    <li>各ステージごとに上位5つのスコアを記録し、ランキングを表示</li>
                                    <ul className="ml-5 list-[circle] [&>li]:mt-2">
                                        <li>高いスコアを取った場合にプレイヤーネームと共に記録</li>
                                    </ul>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div>
                <TypographyH3>操作方法（Version {currentVersion}時点）</TypographyH3>
                <table className="w-full mt-4">
                    <thead>
                        <tr className="bg-accent m-0 border-t p-0 shadow-sm">
                            <th className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right">
                                アクション
                            </th>
                            <th className="border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right">
                                キー入力
                            </th>
                        </tr>
                    </thead>
                    <tbody className="[&>tr]:even:bg-muted [&>tr]:m-0 [&>tr]:border-t [&>tr]:p-0 [&_td]:border [&_td]:px-4 [&_td]:py-2 [&_td]:text-left">
                        <tr>
                            <td>移動</td>
                            <td>方向キー（↑←↓→）またはWASDキー</td>
                        </tr>
                        <tr>
                            <td>決定（メニュー画面内）</td>
                            <td>Enterキー</td>
                        </tr>
                        <tr>
                            <td>射撃</td>
                            <td>ZキーまたはJキー</td>
                        </tr>
                        <tr>
                            <td>発射口切り替え（左へ）</td>
                            <td>XキーまたはKキー</td>
                        </tr>
                        <tr>
                            <td>発射口切り替え（右へ）</td>
                            <td>CキーまたはLキー</td>
                        </tr>
                        <tr>
                            <td>スピンアタック（ボム）</td>
                            <td>Spaceキー</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="space-y-2">
                <TypographyH3>Gallery</TypographyH3>
                <div className="mt-4">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="0"
                        className="rounded-lg border"
                    >
                        <AccordionItem key="0" value="0" className="px-4">
                            <AccordionTrigger className="text-lg">Version 0.3.0</AccordionTrigger>
                            <AccordionContent>
                                <AutoplayCarousel>
                                    {galleryItems_0_3_0.map((item) => (
                                        <CarouselItem key={item.key} className="px-1 min-w-0">
                                            <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                                                <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </CardContent>
                                                <CardDescription className="p-2">
                                                    {item.description}
                                                </CardDescription>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </AutoplayCarousel>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem key="1" value="1" className="px-4">
                            <AccordionTrigger className="text-lg">Version 0.2.1</AccordionTrigger>
                            <AccordionContent>
                                <AutoplayCarousel>
                                    {galleryItems_0_2_1.map((item) => (
                                        <CarouselItem key={item.key} className="px-1 min-w-0">
                                            <Card className="gap-0 py-0 shadow-none border-none rounded-none">
                                                <CardContent className="w-full flex aspect-video items-center justify-center relative">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.alt}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </CardContent>
                                                <CardDescription className="p-2">
                                                    {item.description}
                                                </CardDescription>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </AutoplayCarousel>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            <div className="space-y-2">
                <TypographyH3>Movie</TypographyH3>
                <video
                    src="/GeomeTRIo/GeomeTRIo_demo.mp4"
                    controls
                    className="mt-4"
                />
                <TypographyP>
                    最新バージョンの映像ではないため、現在のものとは一部異なる箇所があります。
                    動画は適宜更新する予定です。<br />
                    ※ゲーム音声が流れます。
                </TypographyP>
            </div>

            <div>
                <TypographyH3>開発</TypographyH3>

                <TypographyP>
                    <b>開発期間</b>: 2025年9月6日 - 2025年11月9日（v0.2.1まで）、2026年1月15日 - （開発中）
                </TypographyP>

                <TypographyP>
                    <b>使用言語</b>: C#, [v0.3.0から] TypeScript
                </TypographyP>

                <TypographyP>
                    <b>使用ツール</b>:<br />Unity（ゲームエンジン）, Logic Pro（BGM, 効果音制作）, Git, Git LFS, Gemini Chat<br />
                    [v0.3.0から] React Unity, React, Vite, Gemini Code Assist
                </TypographyP>

                <TypographyP>
                    <b>使用サービス</b>: GitHub
                </TypographyP>

                <TypographyP>
                    <b>開発経緯・技術選定理由</b>:<br />
                    純粋なゲーム制作への興味から、Unityでのゲーム開発に挑戦しました。
                    Unityを選んだのは、C#の学習になると同時に、マルチプラットフォーム開発の経験が今後のゲーム以外のソフトウェア開発全般にも役立つと考えたためです。
                    また、v0.3.0からは、ゲーム内のUIをReactで開発するためにReact Unityを導入しました。
                    これにより、ReactでのUI開発の経験を積むとともに、ゲーム開発においてもモダンなフロントエンド技術を活用する機会を得ています。
                </TypographyP>
            </div>
        </div >
    )
}