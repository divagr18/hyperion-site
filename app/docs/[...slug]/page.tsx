import { getDocBySlug, getAllDocSlugs } from "@/lib/docs";
import DocsLayout from "@/components/docs/DocsLayout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";
import CodeGroup from "@/components/docs/CodeGroup";

// Custom components for ReactMarkdown to use our premium styles
const components = {
  // Map standard markdown to our CodeGroup logic if it's a special construct, 
  // but for now we'll just implement the switchers as raw HTML/React in the MD file 
  // or use a custom remark plugin. 
  // To keep it simple and portable, we'll use standard markdown code blocks 
  // and handle switchers manually in the page for now, or via a specific syntax.
};

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export default async function DocPage({ params }: PageProps) {
  const { slug: slugArray } = await params;
  const slug = slugArray.join("/");
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <DocsLayout activeSlug={slug}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
      >
        {doc.content}
      </ReactMarkdown>
    </DocsLayout>
  );
}
