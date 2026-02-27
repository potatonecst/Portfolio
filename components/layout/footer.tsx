import Link from "next/link";
import { PATHS } from "@/lib/paths";
import { GithubIcon } from "../icons/GithubIcon";
import { Mail } from "lucide-react";
import { TypographyH1 } from "../ui/typography";
import { Separator } from "../ui/separator";
import { YouTubeIcon } from "../icons/YouTubeIcon";

export function Footer() {
    const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE;
    const formattedDate = buildDate
        ? new Intl.DateTimeFormat("ja-JP", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            timeZone: "Asia/Tokyo",
        }).format(new Date(buildDate))
        : "---";
    console.log(`Build Date: ${formattedDate}`); // ビルド日時をコンソールに表示
    return (
        <footer className="col-span-full mt-4 py-12 border-t border-gray-100">
            <div className="mx-auto px-4 flex flex-col items-center gap-4">
                {/*ナビゲーション*/}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-12 items-center">
                    <TypographyH1>
                        <Link href={PATHS.HOME} className="px-4 rounded-md hover:bg-accent">
                            Portfolio
                        </Link>
                    </TypographyH1>

                    <div className="hidden md:block h-6">
                        <Separator orientation="vertical" />
                    </div>

                    <nav className="flex flex-col sm:flex-row md:gap-4 lg:gap-8 items-center shrink-0">
                        <Link
                            href={PATHS.HOME}
                            className="text-grey-400 px-4 py-1 rounded-md hover:bg-accent text-nowrap"
                        >
                            Home
                        </Link>
                        <Link
                            href={PATHS.ABOUT}
                            className="text-grey-400 px-4 py-1 rounded-md hover:bg-accent text-nowrap"
                        >
                            自己紹介
                        </Link>
                        <Link
                            href={PATHS.WORKS}
                            className="text-grey-400 px-4 py-1 rounded-md hover:bg-accent text-nowrap"
                        >
                            成果物一覧
                        </Link>
                        <Link
                            href={PATHS.CONTACT}
                            className="text-grey-400 px-4 py-1 rounded-md hover:bg-accent text-nowrap"
                        >
                            お問い合わせ
                        </Link>
                    </nav>
                </div>

                {/*SNSリンク*/}
                <div className="flex gap-8">
                    <Link
                        href="https://github.com/potatonecst"
                        target="_blank"
                        className="text-grey-400 hover:text-blue-700 transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon className="size-6" />
                    </Link>

                    <Link
                        href="https://www.youtube.com/channel/UC4uSONFouAMdVGWbdhCzzvQ"
                        target="_blank"
                        className="text-[#212121] hover:text-[#ff0033] transition-colors"
                        aria-label="YouTube"
                    >
                        <YouTubeIcon className="size-6" />
                    </Link>

                    <Link
                        href={PATHS.CONTACT}
                        className="text-grey-400 hover:text-blue-700 transition-colors"
                        aria-label="Contact"
                    >
                        <Mail className="size-6" />
                    </Link>
                </div>

                {/*更新日時*/}
                <div className="text-sm text-grey-400 tracking-widest uppercase">
                    Last updated: {formattedDate}
                </div>

                {/*コピーライト・OSSライセンスリンク*/}
                <div className="flex gap-10">
                    <div className="text-xs text-grey-500 font-light">
                        © 2026 potatonecst
                    </div>

                    <div className="h-4">
                        <Separator orientation="vertical" />
                    </div>

                    <div className="text-xs text-grey-500 font-light">
                        <Link href={PATHS.LICENSES} className="hover:bg-accent px-2 py-1 rounded-md">
                            OSSライセンス
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}