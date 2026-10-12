import type { Block } from "@/components/blocks";
import batchA from "@/content/articles/batch-a.json";
import batchB from "@/content/articles/batch-b.json";
import batchC from "@/content/articles/batch-c.json";
import batchD from "@/content/articles/batch-d.json";
import batchE from "@/content/articles/batch-e.json";

/**
 * The article library: short plain-language guides to Kentucky law.
 *
 * The text lives in `content/articles/*.json`. Each article lists the statutes
 * and official pages it was written from. Laws change, so every article needs
 * a lawyer's review before launch and a re-check from time to time after.
 */
export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: Block[];
  sources: { label: string; href: string }[];
};

/** Month the articles were last checked against their sources. */
export const reviewed = "October 2026";

/** Categories, in the order the index shows them. */
export const categories = [
  "Crime and public safety",
  "Courts and legal process",
  "Driving and traffic",
  "Family and personal affairs",
  "Home, property and neighbors",
  "Consumer and money",
  "Outdoors and recreation",
];

export const articles = (
  [
    ...batchA,
    ...batchB,
    ...batchC,
    ...batchD,
    ...batchE,
  ] as unknown as Article[]
).sort((a, b) => a.title.localeCompare(b.title));

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articlesIn(category: string) {
  return articles.filter((article) => article.category === category);
}

/** "Crime and public safety" becomes "crime-and-public-safety". */
export function categoryId(category: string) {
  return category
    .toLowerCase()
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");
}
