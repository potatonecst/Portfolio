import Image from "next/image";

import { TypographyP } from "@/components/ui/typography";

import { HomeCarousel } from "@/components/layout/homeCarousel";

export default function Home() {
  return (
    <div className="md:col-span-10 md:col-start-2 bg-white dark:bg-black">
      <main className="bg-white dark:bg-black items-stretch justify-center-safe">
        <HomeCarousel />
      </main>
    </div>
  );
}
