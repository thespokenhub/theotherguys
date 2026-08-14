import Image from 'next/image';

/**
 * Production stand-ins for the prototype's `<image-slot>` drop zones.
 *
 * `Photo` is a filled slot (the real headshots). `IllustrationSlot` is the
 * empty state, kept on screen deliberately: the pencil illustrations are still
 * to be drawn, and its caption doubles as the brief for whoever draws them.
 * Swap an `IllustrationSlot` for a `Photo` when the artwork lands.
 */

export function Photo({
  src,
  alt,
  radius = 14,
  sizes = '(max-width: 720px) 100vw, 520px',
  priority = false,
}: {
  src: string;
  alt: string;
  radius?: number;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className="relative size-full overflow-hidden"
      style={{ borderRadius: `${radius}px` }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}

export function IllustrationSlot({
  caption,
  alt,
  radius = 14,
}: {
  /** Short label shown in the frame. */
  caption: string;
  /** The full description of the intended drawing. Doubles as alt text. */
  alt: string;
  radius?: number;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="relative flex size-full flex-col items-center justify-center gap-1.5 bg-[rgb(127_127_127_/_0.08)] p-3 text-center text-ink"
      style={{ borderRadius: `${radius}px` }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 border-[1.5px] border-dashed border-current opacity-35"
        style={{ borderRadius: `${radius}px` }}
      />
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="opacity-45"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 15l-5-5-6.5 6.5L7 14l-4 4" />
      </svg>
      <span className="max-w-[90%] text-[13px] leading-[1.3] font-medium">{caption}</span>
    </div>
  );
}
