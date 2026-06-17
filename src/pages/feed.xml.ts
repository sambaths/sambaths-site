import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export async function GET(context: { site: string }) {
  const posts: CollectionEntry<'blog'>[] = await getCollection('blog');
  const sortedPosts = [...posts].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Sambath S',
    description: 'Articles on data science, ML engineering, and building things that work.',
    site: context.site,
    items: sortedPosts.map((post: CollectionEntry<'blog'>) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/blog/${post.id}/`,
    })),
  });
}
