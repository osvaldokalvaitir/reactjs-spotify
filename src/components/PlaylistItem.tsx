import Image from "next/image";

export interface PlaylistItemProps {
  title: string
  description: string
  cover_source: string
}

export function PlaylistItem({ title, description, cover_source }: PlaylistItemProps) {
  return (
    <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
      <Image src={cover_source} className="w-full" width={120} height={120} alt={title} />
      <strong className="font-semibold">{title}</strong>
      <span className="text-sm text-zinc-500">{description}</span>
    </a>
  )
}