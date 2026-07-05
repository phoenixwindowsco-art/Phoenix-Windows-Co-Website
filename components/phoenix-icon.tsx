import { cn } from '@/lib/utils'

/**
 * Minimal, modern phoenix mark.
 * Uses `currentColor` so it inherits the surrounding text color (amber via `text-accent`).
 */
export function PhoenixIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('size-5', className)}
      aria-hidden="true"
    >
      {/* Head */}
      <circle cx="12" cy="4.3" r="1.5" />
      {/* Left wing */}
      <path d="M12 9C8.5 7.5 5 6.5 2.2 4.4c1.6 2.4 2.4 3.8 3 5-1.2-.5-2.4-.6-3.6-.4 2 1 3.8 2.2 5.4 3.8C8 11.4 9.6 11 11 11.4 12 11.7 12 9 12 9Z" />
      {/* Right wing */}
      <path d="M12 9c3.5-1.5 7-2.5 9.8-4.6-1.6 2.4-2.4 3.8-3 5 1.2-.5 2.4-.6 3.6-.4-2 1-3.8 2.2-5.4 3.8C16 11.4 14.4 11 13 11.4 12 11.7 12 9 12 9Z" />
      {/* Body + flame tail */}
      <path d="M12 6c-1 2-1.4 4-1 6.4.3 2.2.8 3.6 0 6-.4 1.2-.6 2.4 0 3.6.4-1.2.8-2 1-2.8.2.8.6 1.6 1 2.8.6-1.2.4-2.4 0-3.6-.8-2.4-.3-3.8 0-6C13.4 10 13 8 12 6Z" />
    </svg>
  )
}
