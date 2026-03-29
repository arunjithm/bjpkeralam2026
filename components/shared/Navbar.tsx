import Link from "next/link";
import { Flame } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-saffron-glass"
      style={{ borderBottom: "1px solid rgba(255,153,51,0.35)", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Flame className="h-5 w-5 text-bjp-saffron group-hover:text-bjp-gold transition-colors" />
            <span className="font-heading font-black text-xl tracking-tight"
              style={{ color: "#white" }}>
              Keralam&apos;s <span className="text-gold">Saffron Dawn</span>
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/"
              className="text-sm font-semibold transition-colors"
              style={{ color: "rgba(255,200,120,0.7)" }}
            >
              The Story
            </Link>
            {/* Hiding Data Vault per user request */}
            {/* 
            <Link href="/data-vault"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={{ background: "rgba(255,153,51,0.12)", border: "1px solid rgba(255,153,51,0.35)", color: "#FF9933" }}
            >
              <Database className="h-3.5 w-3.5" />
              Data Vault
            </Link> 
            */}
          </div>
        </div>
      </div>
    </nav>
  );
}

