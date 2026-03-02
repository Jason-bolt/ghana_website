import Image from "next/image";
import PRESIDENTS from "@/data/presidents";
import Link from "next/link";

const Presidents = () => {
  return (
    <div className="mx-auto w-full max-w-4xl text-start">
      <h1
        id="presidents"
        className="my-2 text-2xl font-bold text-yellow-500 md:text-3xl"
      >
        Presidents
      </h1>
      <div className="mt-8 mb-4">
        <h1 className="text-bold my-2 text-center font-bold md:text-start">
          The First Republic & Military Era (1960 - 1969)
        </h1>
        <div className="mt-5 flex flex-col flex-wrap items-center justify-start gap-7 md:flex-row md:items-start">
          {PRESIDENTS.firstRepublicPresidents.map((president, index) => (
            <Link
              key={index}
              href={`/presidents/${president.alt}`}
              className="flex w-full flex-col items-center justify-center hover:cursor-pointer md:w-56"
            >
              <div className="w-full overflow-hidden md:h-72">
                <Image
                  src={president.image}
                  alt={president.alt}
                  width={500}
                  height={500}
                  className={`${!president.isCurrent ? "grayscale" : ""} h-full w-full object-cover transition-all duration-300 hover:scale-110`}
                />
              </div>
              <h1 className="mt-2 text-center font-semibold text-amber-600">
                {president.name}
              </h1>
              <p className="text-xs">({president.term})</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 mb-4">
        <h1 className="text-bold my-2 text-center font-bold md:text-start">
          The Second Republic & Military Era (1960 - 1969)
        </h1>
        <div className="mt-5 flex flex-col flex-wrap items-center justify-start gap-7 md:flex-row md:items-start">
          {PRESIDENTS.secondRepublicPresidents.map((president, index) => (
            <Link
              href={`/presidents/${president.alt}`}
              className="flex w-full flex-col items-center justify-center hover:cursor-pointer md:w-56"
              key={index}
            >
              <div className="w-full overflow-hidden md:h-72">
                <Image
                  src={president.image}
                  alt={president.alt}
                  width={500}
                  height={500}
                  className={`${!president.isCurrent ? "grayscale" : ""} h-full w-full object-cover transition-all duration-300 hover:scale-110`}
                />
              </div>
              <h1 className="mt-2 text-center font-semibold text-amber-600">
                {president.name}
              </h1>
              <p className="text-xs">({president.term})</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 mb-4">
        <h1 className="text-bold my-2 text-center font-bold md:text-start">
          The Third Republic & Military Era (1960 - 1969)
        </h1>
        <div className="mt-5 flex flex-col flex-wrap items-center justify-start gap-7 md:flex-row md:items-start">
          {PRESIDENTS.thirdRepublicPresidents.map((president, index) => (
            <Link
              href={`/presidents/${president.alt}`}
              className="flex w-full flex-col items-center justify-center hover:cursor-pointer md:w-56"
              key={index}
            >
              <div className="w-full overflow-hidden md:h-72">
                <Image
                  src={president.image}
                  alt={president.alt}
                  width={500}
                  height={500}
                  className={`${!president.isCurrent ? "grayscale" : ""} h-full w-full object-cover transition-all duration-300 hover:scale-110`}
                />
              </div>
              <h1 className="mt-2 text-center font-semibold text-amber-600">
                {president.name}
              </h1>
              <p className="text-xs">({president.term})</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 mb-4">
        <h1 className="text-bold my-2 text-center font-bold md:text-start">
          The Fourth Republic & Military Era (1960 - 1969)
        </h1>
        <div className="mt-5 flex flex-col flex-wrap items-center justify-start gap-7 md:flex-row md:items-start">
          {PRESIDENTS.fourthRepublicPresidents.map((president, index) => (
            <Link
              href={`/presidents/${president.alt}`}
              className="flex w-full flex-col items-center justify-center hover:cursor-pointer md:w-56"
              key={index}
            >
              <div className="w-full overflow-hidden md:h-72">
                <Image
                  src={president.image}
                  alt={president.alt}
                  width={500}
                  height={500}
                  className={`${!president.isCurrent ? "grayscale" : ""} h-full w-full object-cover transition-all duration-300 hover:scale-110`}
                />
              </div>
              <h1 className="mt-2 text-center font-semibold text-amber-600">
                {president.name}
              </h1>
              <p className="text-xs">({president.term})</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presidents;
