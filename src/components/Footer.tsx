import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 px-4 py-10 text-white/70 text-sm">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Ryuu Sushi Lounge
        </p>
        <ul className="flex gap-6 font-heading text-sm md:text-base uppercase tracking-wider">
          <li>
            <Link href="/menu" className="hover:text-white transition">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
