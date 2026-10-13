"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const designs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="fixed bottom-6 right-6 flex gap-2 z-50">
      {designs.map((num) => (
        <Link
          key={num}
          href={`/${num}`}
          className={
            pathname === `/${num}`
              ? "w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium text-sm shadow-lg transition-all"
              : "w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center font-medium text-sm shadow-md hover:shadow-lg transition-all hover:scale-110"
          }
        >
          {num}
        </Link>
      ))}
    </div>
  );
}
