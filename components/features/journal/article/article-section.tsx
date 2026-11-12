import { ScrollReveal } from "@/components/shared/scroll-reveal"

import type { JournalArticle } from "../journal-data"
import type { ArticleContent } from "./article-content"
import { ArticleAuthorAvatar } from "./article-author-avatar"
import { ArticleBody } from "./article-body"
import { ARTICLE_AUTHORS, ARTICLE_DATE } from "./article-meta"
import { ArticleSidebar } from "./article-sidebar"
import { ArticleToolbar } from "./article-toolbar"

interface ArticleSectionProps {
  article: JournalArticle
  content: ArticleContent
  prev: JournalArticle
  next: JournalArticle
}

export function ArticleSection({
  article,
  content,
  prev,
  next,
}: ArticleSectionProps) {
  const meta = `${ARTICLE_DATE.format(new Date(article.date))} · ${content.readMinutes} min read`

  return (
    <section
      className="px-3 section-padding pt-6! md:px-5 md:pt-8! lg:pt-10!"
      aria-labelledby="article-heading"
    >
      <div className="rounded-3xl bg-card gutter-3 py-3 md:gutter-5 md:py-5 lg:gutter-6 lg:py-6">
        <div className="grid gap-3 md:gap-5 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
          <ArticleSidebar
            photo={article.photo}
            photoAlt={content.photoAlt}
            author={content.author}
            meta={meta}
          />
          <article className="min-w-0 rounded-3xl raised-card px-5 pt-4 pb-12 md:px-8 md:pt-6 md:pb-16">
            <ArticleToolbar prev={prev} next={next} />
            <div className="mx-auto max-w-2xl">
              <ScrollReveal as="header" className="mt-8 md:mt-10">
                <h1
                  className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
                  id="article-heading"
                >
                  {article.title}
                </h1>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  {article.summary}
                </p>
                <p className="mt-6 font-mono text-xs text-muted-foreground figures lg:hidden">
                  {meta}
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <ArticleBody blocks={content.body} />
              </ScrollReveal>
              <div
                role="none"
                className="mt-12 h-px w-full shrink-0 bg-border md:mt-16"
              />
              <div className="mt-8 flex items-center gap-3">
                <ArticleAuthorAvatar author={content.author} />
                <p className="text-sm text-muted-foreground">
                  Written by{" "}
                  <span className="text-foreground">
                    {ARTICLE_AUTHORS[content.author].name}
                  </span>
                  , co-founder of Nove
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
