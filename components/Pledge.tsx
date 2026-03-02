import Link from "next/link";
import { CiYoutube } from "react-icons/ci";

const Pledge = () => {
  return (
    <div className="mx-auto max-w-4xl text-start">
      <h1
        id="pledge"
        className="my-2 text-2xl font-bold text-yellow-500 md:text-3xl"
      >
        The National Pledge
      </h1>
      <div className="my-4 flex flex-col items-center justify-start gap-3 bg-gray-900 p-5">
        <p className="leading-7">
          I promise on my honour to be faithful and loyal to Ghana my
          Motherland. I pledge myself to the service of Ghana, with all my
          strength and with all my heart. I promise to hold in high esteem our
          heritage, won for us through the blood and toil of our fathers; and I
          pledge myself in all things to uphold and defend the good name of
          Ghana. So help me God.
        </p>
        <Link
          href="https://www.youtube.com/watch?v=EWb2ySVohfY"
          target="_blank"
          className="flex items-center justify-center gap-2 text-sm text-yellow-500 hover:cursor-pointer hover:text-yellow-400 hover:underline"
        >
          Listen to the anthem
          <CiYoutube className="h-7 w-7" />
        </Link>
      </div>
    </div>
  );
};

export default Pledge;
