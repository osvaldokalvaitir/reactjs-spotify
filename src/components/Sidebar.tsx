import {
  Home,
  Library,
  Search,
} from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>

      <nav className="space-y-5 mt-10">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Home />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Search />
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 1</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pop Up</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Viral Hits</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 2</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Heavy Ballads</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Today's Top Hits</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Metal Essentials</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">On Repeat</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Daily Mix 3</a>
      </nav>
    </aside>
  )
}