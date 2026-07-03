import Link from 'next/link'
import { Flame } from 'lucide-react'
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
      <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15">
        <Flame className="size-5 text-accent" aria-hidden="true" />
      </span>
      <span className="text-lg">Phoenix Pane Co.</span>
    </Link>
  )
}
