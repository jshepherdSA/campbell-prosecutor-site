import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Blocks } from "@/components/blocks";
import { PageHeader } from "@/components/page-header";
import { TextLink } from "@/components/text-link";
import { articles, articlesIn, getArticle, reviewed } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/news/${slug}` },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { title, summary, category, body, sources } = article;
  const related = articlesIn(category)
    .filter((other) => other.slug !== slug)
    .slice(0, 5);

  return (
    <>
      <PageHeader
        parent={{ label: "News & Articles", href: "/news" }}
        title={title}
        lead={summary}
      />

      <div className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-8">
          <article className="lg:col-span-7">
            <Blocks blocks={body} />
            <p className="mt-12 max-w-[42rem] border-t border-silver-300 pt-6 text-sm leading-[1.375rem] text-muted-foreground">
              This article is general information about Kentucky law, not legal
              advice, and the law may have changed since it was last reviewed in{" "}
              {reviewed}. For advice about your own situation, talk to a lawyer.
            </p>
          </article>

          <aside
            aria-label="Sources and related articles"
            className="space-y-10 lg:col-span-4 lg:col-start-9"
          >
            {sources.length > 0 ? (
              <div>
                <h2 className="eyebrow font-sans text-bronze-700">
                  Where this comes from
                </h2>
                <ul className="mt-4 border-t border-silver-300 text-base leading-[1.625rem]">
                  {sources.map(({ label, href }) => (
                    <li
                      key={href}
                      className="border-b border-silver-300 py-3.5"
                    >
                      <TextLink href={href}>{label}</TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {related.length > 0 ? (
              <div>
                <h2 className="eyebrow font-sans text-bronze-700">
                  More on {category.toLowerCase()}
                </h2>
                <ul className="mt-4 border-t border-silver-300 text-base leading-[1.625rem]">
                  {related.map((other) => (
                    <li
                      key={other.slug}
                      className="border-b border-silver-300 py-3.5"
                    >
                      <TextLink href={`/news/${other.slug}`}>
                        {other.title}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </>
  );
}
