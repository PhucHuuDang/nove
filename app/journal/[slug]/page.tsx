import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { pageMetadata } from "@/lib/seo"

import { NavSpacer } from "@/components/shared/nav-spacer"
import { JOURNAL_ARTICLES } from "@/components/features/journal/journal-data"
import { ARTICLE_CONTENT } from "@/components/features/journal/article/article-content"
import { ArticleSection } from "@/components/features/journal/article/article-section"
import { ArticleMore } from "@/components/features/journal/article/article-more"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug)
  const content = ARTICLE_CONTENT[slug]
  if (!article || !content) return {}
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/journal/${slug}`,
    image: { url: article.photo, alt: content.photoAlt },
    type: "article",
  })
}

/** Articles wrap around: the first one's "previous" is the last. */
function articleAt(index: number) {
  const count = JOURNAL_ARTICLES.length
  return JOURNAL_ARTICLES[(index + count) % count]
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const index = JOURNAL_ARTICLES.findIndex((a) => a.slug === slug)
  const content = ARTICLE_CONTENT[slug]
  if (index === -1 || !content) notFound()

  return (
    <>
      <NavSpacer />
      <ArticleSection
        article={JOURNAL_ARTICLES[index]}
        content={content}
        prev={articleAt(index - 1)}
        next={articleAt(index + 1)}
      />
      <ArticleMore
        articles={[1, 2, 3, 4].map((offset) => articleAt(index + offset))}
      />
    </>
  )
}
