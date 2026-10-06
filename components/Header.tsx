"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "/services", label: "Expertise" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "Studio" },
];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const backgrounds = [
      ...document.querySelectorAll<HTMLElement>("main, footer"),
    ];
    backgrounds.forEach((el) => el.setAttribute("inert", ""));
    menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    function key(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (event.key === "Tab") {
        const items = [
          toggle.current,
          ...Array.from(
            menu.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = items[0],
          last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }
    const resize = () => {
      if (window.innerWidth >= 800) setOpen(false);
    };
    document.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      backgrounds.forEach((el) => el.removeAttribute("inert"));
      document.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand-link" aria-label="Kool Konsulting home">
          <img
            src="/brand/kk-logo-horizontal.svg"
            width="290"
            height="44"
            alt="Kool Konsulting"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="header-book">
          Book a call <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => {
            if (open) toggle.current?.focus();
            setOpen(!open);
          }}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
        {open && (
          <div id="mobile-menu" className="mobile-menu" ref={menu}>
            <nav aria-label="Mobile navigation">
              {links.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  <span>0{i + 1}</span>
                  {link.label}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              ))}
              <Link href="/contact" onClick={() => setOpen(false)}>
                <span>04</span>Book a call
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </nav>
            <p>
              Independent thinking.
              <br />
              Connected experiences.
            </p>
            <span className="eyebrow">Nagpur, India</span>
          </div>
        )}
      </div>
    </header>
  );
}
