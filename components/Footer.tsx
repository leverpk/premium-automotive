export function Footer() {
  return (
    <footer className="border-t border-ice/10 bg-ink py-10">
      <div className="section-shell flex flex-col gap-4 text-sm text-ice/48 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Astra GT Studio. Premium automotive portfolio concept.</p>
        <div className="flex gap-5">
          <a href="#" className="transition hover:text-ice">Instagram</a>
          <a href="#" className="transition hover:text-ice">Dribbble</a>
          <a href="#" className="transition hover:text-ice">Behance</a>
        </div>
      </div>
    </footer>
  );
}
