import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { articles, articlesIn, categories, categoryId } from "@/lib/articles";

export const metadata: Metadata = {
  title: "News & Articles",
  description:
    "Plain-language guides to Kentucky law for Campbell County residents: crime and public safety, courts, driving, family matters, property, consumer issues and the outdoors.",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  const groups = categories
    .map((category) => ({ category, items: articlesIn(category) }))
    .filter(({ items }) => items.length > 0);

  return (
    <>
      <PageHeader
        title="News & articles"
        lead={`${articles.length} plain-language guides to Kentucky law, on the questions residents ask most. They are general information, not legal advice.`}
      />

      <div className="bg-white py-14 md:py-20">
        <div className="container-site">
          <nav aria-label="Article topics">
            <ul className="flex flex-wrap gap-2">
              {groups.map(({ category }) => (
                <li key={category}>
                  <a
                    href={`#${categoryId(category)}`}
                    className="inline-block rounded-sm border border-silver-300 bg-white px-3.5 py-2 text-[0.9375rem] leading-6 font-semibold text-navy-800 transition-colors duration-150 hover:border-navy-800"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-14 space-y-16 md:space-y-20">
            {groups.map(({ category, items }) => {
              const id = categoryId(category);
              return (
                <section
                  key={category}
                  id={id}
                  aria-labelledby={`${id}-heading`}
                >
                  <h2
                    id={`${id}-heading`}
                    className="text-[1.9375rem] leading-[2.3125rem] font-bold tracking-[-0.01em] md:text-[2.375rem] md:leading-[2.75rem]"
                  >
                    {category}
                  </h2>
                  <ul className="mt-8 grid gap-x-10 border-t-2 border-navy-800 md:grid-cols-2">
                    {items.map(({ slug, title, summary }) => (
                      <li
                        key={slug}
                        className="border-b border-silver-300 py-5"
                      >
                        <h3 className="text-[1.1875rem] leading-[1.625rem] font-semibold lg:text-[1.3125rem] lg:leading-7">
                          <Link
                            href={`/news/${slug}`}
                            className="underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-150 hover:text-royal-600 hover:decoration-bronze-500"
                          >
                            {title}
                          </Link>
                        </h3>
                        <p className="mt-2 text-base leading-[1.625rem]">
                          {summary}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
