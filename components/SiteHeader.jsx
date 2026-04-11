import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-bold text-lg text-white">
          ByteSyze IT Solutions
        </span>
        <nav className="flex gap-6 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">Why ByteSyze</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}