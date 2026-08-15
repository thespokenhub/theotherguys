import Link from 'next/link';
import { IllustrationSlot, Photo } from '@/components/ImageSlot';
import type { Post } from '@/lib/posts';
import { ROUTES } from '@/lib/site';

/**
 * One numbered row in a post list. The blog index, pillar hubs, and author
 * pages all render this; pillar hubs add the little tilted thumbnail.
 */
export default function PostRow({
  post,
  number,
  meta,
  thumb = false,
  tilt = 0,
  underline = false,
}: {
  post: Post;
  number: string;
  meta: string;
  thumb?: boolean;
  tilt?: number;
  /** Coral highlighter stroke under the title (blog index only). */
  underline?: boolean;
}) {
  return (
    <article
      className={`flex flex-wrap gap-5 border-b border-[rgba(43,36,64,0.16)] px-2 py-[22px] transition-colors hover:bg-cream ${
        thumb ? 'items-start' : 'items-baseline'
      }`}
    >
      <span aria-hidden="true" className="w-[34px] flex-none font-mono text-[14px] text-coral">
        {number}
      </span>
      {thumb && (
        <div className="aspect-4/3 w-[116px] flex-none" style={{ rotate: `${tilt}deg` }}>
          {post.image ? (
            <Photo src={post.image} alt={post.ill} radius={10} sizes="116px" />
          ) : (
            <IllustrationSlot caption="Pencil sketch" alt={post.ill} radius={10} />
          )}
        </div>
      )}
      <div className="min-w-[240px] flex-1">
        <h3 className="m-0 font-display text-[clamp(20px,2.4vw,26px)] leading-[1.2] font-bold tracking-[-0.015em]">
          <Link
            href={ROUTES.post(post.slug)}
            className="text-ink no-underline hover:text-purple"
            style={
              underline
                ? {
                    backgroundImage:
                      'linear-gradient(to top,#F1705B 0,#F1705B 3px,transparent 3px)',
                  }
                : undefined
            }
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-1.5 mb-0 max-w-[64ch] text-[15px] leading-[1.55] text-muted">
          {post.blurb}
        </p>
      </div>
      <span className="max-w-full text-right font-mono text-[12px] tracking-[0.06em] text-muted max-[560px]:text-left">
        {meta}
      </span>
    </article>
  );
}
