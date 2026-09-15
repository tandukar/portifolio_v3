export default function Footer() {
  return (
    <footer className="pt-8 pb-8 text-stone-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200/50">
      <p>© {new Date().getFullYear()} Pragyo Tandukar</p>
      <div className="flex items-center space-x-6">
        <a className="hover:text-stone-800 transition-colors" href="#hero">
          Back to Top ↑
        </a>
      </div>
    </footer>
  )
}
