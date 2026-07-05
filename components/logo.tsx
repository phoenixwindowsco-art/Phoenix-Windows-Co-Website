import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center gap-2 font-bold tracking-tight text-foreground',
        className,
      )}
      aria-label="Phoenix Pane Co. home"
    >
      <Image
        src="/phoenix-badge.png"
        alt=""
        width={36}
        height={36}
        className="size-9 rounded-lg ring-1 ring-accent/25"
        priority
      />
      <span className="text-lg">Phoenix Pane Co.</span>
    </Link>
  )
}
