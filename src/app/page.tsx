import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>Hello world</h2>

        <Link href="/home" className="bg-slate-800 p-3 text-white rounded-lg">
          Go to home
        </Link>
      </main>
    </div>
  );
}
