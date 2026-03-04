import { getPresident } from "@/utils/helper";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

function stripHtml(html: string, maxLength = 160): string {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text.length <= maxLength ? text : text.slice(0, maxLength - 3) + "...";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const president = getPresident(slug);
  if (!president) {
    return { title: "President not found" };
  }
  const description = stripHtml(president.text);
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const url = `${baseUrl}/presidents/${slug}`;
  const imageUrl = president.image.startsWith("http")
    ? president.image
    : `${baseUrl}${president.image}`;
  return {
    title: `${president.name} (${president.term})`,
    description: `Ghana president ${president.name}, term ${president.term}. ${description}`,
    openGraph: {
      title: `${president.name} | Ghana President`,
      description: `Ghana president ${president.name}, term ${president.term}. ${description}`,
      type: "article",
      url,
      images: [{ url: imageUrl, width: 500, height: 500, alt: president.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${president.name} | Ghana President`,
      description: `Ghana president ${president.name}, term ${president.term}. ${description}`,
      images: [imageUrl],
    },
    alternates: { canonical: url },
  };
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const president = getPresident(slug);
  if (!president) {
    return <div>President not found</div>;
  }
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: president.name,
    description: stripHtml(president.text, 200),
    image: president.image.startsWith("http") ? president.image : `${baseUrl}${president.image}`,
    jobTitle: "President of Ghana",
    worksFor: { "@type": "Country", name: "Ghana" },
  };
  return (
    <article className="mx-auto my-15 max-w-4xl px-5 text-start">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/#presidents"
        className="flex items-center justify-start gap-2 text-sm text-gray-200 hover:cursor-pointer hover:text-yellow-500 hover:underline"
      >
        <ArrowLeftIcon />
        Back
      </Link>
      <h1 className="my-5 text-2xl font-bold text-yellow-500">
        {president.name}
      </h1>
      <Image
        src={president.image}
        alt={president.alt}
        width={500}
        height={500}
        className="float-left mr-6 mb-6 h-full w-full max-w-lg object-cover"
      />
      <div dangerouslySetInnerHTML={{ __html: president.text }} />
    </article>
  );
};

export default page;
