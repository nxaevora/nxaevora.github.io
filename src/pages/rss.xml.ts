import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { withBase } from '../components/withBase';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  const site = new URL(import.meta.env.BASE_URL, context.site ?? 'https://nxaevora.github.io');

  return rss({
    title: 'NXAevora blog',
    description: 'Notes about NXAevora: the port, the engine and the build.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: withBase(`/blog/${post.id}/`),
    })),
  });
}
