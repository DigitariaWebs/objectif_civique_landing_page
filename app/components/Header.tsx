import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Examen", href: "#journey" },
  { label: "Parcours", href: "#journey" },
  { label: "À propos", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Objectif Civique Logo"
            width={64}
            height={64}
            className="h-14 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight leading-none text-brand-blue">
              Objectif
            </span>
            <span className="text-xl font-extrabold tracking-tight leading-none">
              Civique
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-gray-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand-blue transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="bg-brand-blue text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-500/20"
        >
          Télécharger l&apos;app
        </a>
      </div>
    </header>
  );
}
