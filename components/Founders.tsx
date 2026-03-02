import Image from "next/image";

const Founders = () => {
  const founders = [
    {
      name: "Dr. Kwame Nkrumah (The Osagyefo)",
      image: "/kwame_nkrumah.jpg",
      alt: "dr_kwame_nkrumah",
      text: `The most radical of the group, Nkrumah was invited back from
                London to serve as the UGCC&apos;s General Secretary. He later
                broke away to form the Convention People&apos;s Party (CPP),
                famously demanding <q>Self-Government Now.</q> In 1957, he
                became the first Prime Minister and later the first President of
                Ghana.`,
      legacy: `A global icon of
                Pan-Africanism.`,
    },
    {
      name: "Dr. J.B. Danquah (The Doyen)",
      image: "/j_b_danquah.jpg",
      alt: "j_b_danquah",
      text: `A brilliant scholar, lawyer, and historian, Danquah is often
                called the <q>Doyen of Gold Coast Politics.</q> He was the
                intellectual engine of the movement and is credited with
                researching and proposing the name <q>Ghana</q> for the new
                nation, tracing roots back to the ancient Ghana Empire.`,
      legacy: `DA symbol of fearless
                legal and political advocacy.`,
    },
    {
      name: "Emmanuel Obetsebi-Lamptey (Liberty Lamptey)",
      image: "/e_o_lamptey.jpg",
      alt: "e_o_lamptey",
      text: `A fierce lawyer and a leader of the Ga people, Obetsebi-Lamptey was known for his uncompromising stance against colonial injustice. He was a master of political organization and was instrumental in mobilizing the youth and urban workers in Accra.`,
      legacy: `A symbol of fearless legal and political advocacy.`,
    },
    {
      name: "Ebenezer Ako-Adjei",
      image: "/e_a_adjei.webp",
      alt: "e_a_adjei",
      text: `Ako-Adjei was the <q>bridge</q> of the group. While studying abroad, he became close friends with Nkrumah and was the one who recommended him for the UGCC leadership. He later served as a diplomat and minister in the post-independence government.`,
      legacy: `The man who united the different factions of the movement.`,
    },
    {
      name: "Edward Akufo-Addo",
      image: "/e_a_addo_1.jpg",
      alt: "e_a_addo",
      text: `An Oxford-educated lawyer, Akufo-Addo brought legal precision to the movement. He contributed heavily to the constitutional frameworks of the time. He later served as the Chief Justice and eventually the ceremonial President of Ghana during the Second Republic (1970–1972).`,
      legacy: `A pioneer of the Ghanaian judiciary.`,
    },
    {
      name: "William Ofori Atta (Paa Willie)",
      image: "/w_o_atta.jpg",
      alt: "w_o_atta",
      text: `Affectionately known as "Paa Willie," he was a beloved figure known for his humility, Christian ethics, and integrity. He was a bridge-builder who stayed active in Ghanaian politics for decades, serving as a Foreign Minister and a moral compass for the nation.`,
      legacy: `A pioneer of the Ghanaian judiciary.`,
    },
  ];
  return (
    <div className="flex w-full flex-col gap-3">
      <Image
        src="/founding_fathers.png"
        alt="founders"
        width={500}
        height={500}
        className="mx-auto w-4xl border-2 border-amber-700"
      />

      <div className="mx-auto max-w-4xl text-start">
        <h1 id="/" className="my-2 text-2xl font-bold text-yellow-500 md:text-3xl">
          The Genesis: The 1948 Turning Point
        </h1>
        <div className="my-4 flex flex-col items-center justify-start gap-3">
          <p className="leading-7">
            The story of Ghana&apos;s founding fathers began in earnest with the
            formation of the{" "}
            <strong className="text-yellow-500">
              United Gold Coast Convention (UGCC)
            </strong>{" "}
            in 1947, the first political party aimed at{" "}
            <q>self-government in the shortest possible time.</q>
          </p>
          <p className="leading-7">
            However, the spark that ignited the nation occurred on{" "}
            <strong>February 28, 1948</strong>. During a peaceful march, British
            police opened fire on unarmed Ghanaian ex-servicemen, killing three.
            This sparked the <strong>Accra Riots</strong>. The colonial
            government blamed the UGCC leadership, arresting six key men who
            became symbols of the struggle. Their collective incarceration
            galvanized the population, shifting the movement from a polite
            request for reform to an unstoppable demand for independence.
          </p>
        </div>
        <h1 className="mt-4 text-xl font-bold text-amber-600 underline">
          THE BIG SIX: Architects of Independence
        </h1>
        {founders.map((founder, index) => (
          <div className="my-8" key={index}>
            <div className="flex flex-col items-center justify-center gap-7 md:flex-row">
              <Image
                src={founder.image}
                alt={founder.alt}
                width={500}
                height={500}
                className="max-h-[600px] w-full md:w-1/2 object-cover"
              />
              <div className="w-full md:w-1/2">
                <h1 className="mb-3 text-lg font-semibold text-amber-600 md:text-2xl">
                  {founder.name}
                </h1>
                <p
                  className="leading-7 md:leading-9"
                  dangerouslySetInnerHTML={{ __html: founder.text }}
                ></p>
                <p className="text-xs">
                  <span className="font-bold">Legacy: </span>
                  {founder.legacy}
                </p>
              </div>
            </div>
            <hr className="mt-5 text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founders;
