export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="section-shell flex flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Astra GT Studio. Premium automotive portfolio concept.</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-white">Instagram</a>
          <a href="#" className="transition hover:text-white">Dribbble</a>
          <a href="#" className="transition hover:text-white">Behance</a>
        </div>
      </div>
    </footer>
  );
}
