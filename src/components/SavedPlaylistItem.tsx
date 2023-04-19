export interface SavedPlaylistItemProps {
  title: string
}

export function SavedPlaylistItem({ title }: SavedPlaylistItemProps) {
  return (
    <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">{title}</a>
  )
}