import { getPresident } from "@/utils/helper";
import Image from "next/image";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const president = getPresident(slug);
  if (!president) {
    return <div>President not found</div>;
  }
  return (
    <article className="mx-auto my-15 max-w-4xl px-5 text-start">
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
