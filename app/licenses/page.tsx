"use client";

import * as React from "react";

import { useState, useEffect } from "react";
import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function LicensesPage() {
    const [licenses, setLicenses] = useState<Record<string, any> | null>(null);

    useEffect(() => {
        // public/licenses.jsonを取得
        fetch("/licenses.json")
            .then((res) => res.json())
            .then((data) => setLicenses(data))
            .catch((err) => console.error("Failed to fetch licenses:", err));
    }, []);

    if (!licenses) return (
        <div className="col-span-full md:grid md:grid-cols-12">
            <div className="md:col-span-10 md:col-start-2 space-y-8 text-2xl text-center">
                Loading licenses...
            </div>
        </div>
    );

    const sortedLicenses = Object.entries(licenses).sort(([nameA], [nameB]) =>
        nameA.toLowerCase().localeCompare(nameB.toLowerCase())
    );

    return (
        <div className="col-span-full md:grid md:grid-cols-12">
            <div className="md:col-span-10 md:col-start-2 space-y-8">
                <TypographyH2>OSSライセンス</TypographyH2>
                <TypographyP>
                    このサイトで使用されているオープンソースソフトウェアのライセンス情報を掲載しています。
                </TypographyP>

                <div className="grid gap-10">
                    {sortedLicenses.map(([name, detail]) => (
                        <div key={name} className="border-b border-muted pb-8">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <TypographyH3>{name}</TypographyH3>
                                {detail.repository && (
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={detail.repository} target="_blank">
                                            <ExternalLink className="mr-2 size-4" />
                                            Repository
                                        </Link>
                                    </Button>
                                )}
                            </div>
                            <div className="mb-4">
                                <span className="text-xs font-semibold px-2 py-1 bg-secondary text-secondary-foreground rounded">
                                    {detail.licenses}
                                </span>
                                {detail.publisher && (
                                    <span className="text-sm text-muted-foreground ml-3">
                                        Publisher: {detail.publisher}
                                    </span>
                                )}
                                <ScrollArea className="h-40 w-full rounded-md border mt-4 p-4 bg-muted/30">
                                    <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-all font-mono leading-relaxed">
                                        {detail.licenseText}
                                    </pre>
                                </ScrollArea>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}