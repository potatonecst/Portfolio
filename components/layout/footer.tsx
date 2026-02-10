import Link from "next/link";
import { PATHS } from "@/lib/paths";
import { GithubIcon } from "../icons/GithubIcon";
import { Mail } from "lucide-react";

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
        <footer className="col-span-full mt-auto py-12 border-t border-gray-100">
            <div className="mx-auto px-4 flex flex-col items-center gap-3">
                {/*SNSリンク*/}
                <div className="flex gap-4 mb-2">
                    <a
                        href="https://github.com/potatonecst"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-grey-400 hover:text-blue-700 transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon className="size-6" />
                    </a>

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

                {/*コピーライト*/}
                <div className="text-xs text-grey-500 font-light">
                    © 2026 potatonecst
                </div>
            </div>
        </footer>
    )
}