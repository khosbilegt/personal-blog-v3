import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("writing");
  const projects = await getCollection("projects");
  const ideas = await getCollection("ideas");
  const items = [...posts, ...projects, ...ideas];
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      ...item.data,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
