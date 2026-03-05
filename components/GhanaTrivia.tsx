"use client";

import React, { useEffect, useState } from "react";
import { Trophy, ArrowRight, RotateCcw, Star } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  fact: string;
}

const ALL_QUESTIONS: Question[] = [
  // THE BIG SIX & HISTORY
  {
    id: 1,
    question: "Who was the first President of Ghana?",
    options: [
      "J.B. Danquah",
      "Kwame Nkrumah",
      "Edward Akufo-Addo",
      "K.A. Busia",
    ],
    answer: "Kwame Nkrumah",
    fact: "Nkrumah led Ghana to independence in 1957 and was a key founder of the OAU.",
  },
  {
    id: 2,
    question: "In which year did Ghana gain independence?",
    options: ["1951", "1957", "1960", "1966"],
    answer: "1957",
    fact: "Ghana was the first sub-Saharan African country to gain independence from colonial rule.",
  },
  {
    id: 3,
    question:
      "Which member of the Big Six was a Chief Justice and later President?",
    options: ["Ako-Adjei", "Paa Willie", "Edward Akufo-Addo", "J.B. Danquah"],
    answer: "Edward Akufo-Addo",
    fact: "He served as the ceremonial President during the Second Republic (1970-1972).",
  },
  {
    id: 4,
    question: "What was the previous name of Ghana before independence?",
    options: ["Songhai", "The Gold Coast", "Ivory Coast", "Dahomey"],
    answer: "The Gold Coast",
    fact: "The name was changed to 'Ghana' at independence to honor the ancient Ghana Empire.",
  },
  {
    id: 5,
    question: "Who is known as the 'Doyen of Gold Coast Politics'?",
    options: [
      "Kwame Nkrumah",
      "J.B. Danquah",
      "Kutu Acheampong",
      "Jerry Rawlings",
    ],
    answer: "J.B. Danquah",
    fact: "He was a founding member of the UGCC and a prolific scholar.",
  },

  // CULTURE & SYMBOLS
  {
    id: 6,
    question: "Which Adinkra symbol represents 'Except God' (Omnipotence)?",
    options: ["Sankofa", "Gye Nyame", "Duafe", "Akoben"],
    answer: "Gye Nyame",
    fact: "It is perhaps the most popular Adinkra symbol, representing the supremacy of God.",
  },
  {
    id: 7,
    question: "What does the 'Sankofa' bird symbolize?",
    options: ["Warfare", "Wisdom from the past", "Unity", "Wealth"],
    answer: "Wisdom from the past",
    fact: "The bird looks backward to pick a forgotten egg, symbolizing learning from history.",
  },
  {
    id: 8,
    question:
      "What does the 'Black Star' in the middle of the Ghana flag represent?",
    options: [
      "Wealth",
      "The African People",
      "The Lodestar of African Freedom",
      "Agriculture",
    ],
    answer: "The Lodestar of African Freedom",
    fact: "It was inspired by Marcus Garvey’s Black Star Line shipping company.",
  },
  {
    id: 9,
    question: "What do the colors of the Ghana flag stand for?",
    options: [
      "Gold, Oil, Forest",
      "Blood, Gold, Vegetation",
      "Sun, Sand, Sea",
      "Unity, Power, Peace",
    ],
    answer: "Blood, Gold, Vegetation",
    fact: "Red stands for the blood of martyrs, Gold for mineral wealth, and Green for forests.",
  },
  {
    id: 10,
    question:
      "Which traditional cloth is famous for its intricate hand-woven patterns?",
    options: ["Batik", "Kente", "Lace", "Ankara"],
    answer: "Kente",
    fact: "Kente was originally worn only by royalty among the Asante and Ewe people.",
  },

  // GEOGRAPHY & LANDMARKS
  {
    id: 11,
    question: "What is the capital city of Ghana?",
    options: ["Kumasi", "Accra", "Tamale", "Takoradi"],
    answer: "Accra",
    fact: "Accra has been the capital since 1877, moved from Cape Coast by the British.",
  },
  {
    id: 12,
    question:
      "Which is the largest man-made lake by surface area in the world, located in Ghana?",
    options: ["Lake Chad", "Lake Victoria", "Lake Volta", "Lake Bosomtwe"],
    answer: "Lake Volta",
    fact: "It was created by the Akosombo Dam and covers nearly 3.6% of Ghana's land.",
  },
  {
    id: 13,
    question: "Which city is known as the 'Garden City' of West Africa?",
    options: ["Cape Coast", "Sunyani", "Kumasi", "Koforidua"],
    answer: "Kumasi",
    fact: "Kumasi is the seat of the Asantehene and the capital of the Ashanti Region.",
  },
  {
    id: 14,
    question: "In which region would you find the Mole National Park?",
    options: [
      "Greater Accra",
      "Savannah Region",
      "Central Region",
      "Volta Region",
    ],
    answer: "Savannah Region",
    fact: "Mole is Ghana's largest wildlife refuge and home to many elephants.",
  },
  {
    id: 15,
    question:
      "Which castle is a UNESCO World Heritage site located in the Central Region?",
    options: ["Osu Castle", "Cape Coast Castle", "Kumasi Fort", "Ussher Fort"],
    answer: "Cape Coast Castle",
    fact: "It was one of the largest 'slave castles' built on the Gold Coast.",
  },

  // MODERN GHANA & FUN FACTS
  {
    id: 16,
    question:
      "Which Ghanaian musician won a Grammy for his contribution to 'Global Music'?",
    options: ["Sarkodie", "Shatta Wale", "Rocky Dawuni", "Stonebwoy"],
    answer: "Rocky Dawuni",
    fact: "He was the first Ghanaian to be nominated for a Grammy Award.",
  },
  {
    id: 17,
    question:
      "What is Ghana's most famous staple dish often debated with Nigerians?",
    options: ["Waakye", "Jollof Rice", "Banku", "Fufu"],
    answer: "Jollof Rice",
    fact: "The 'Jollof Wars' are a friendly culinary rivalry between Ghana and Nigeria.",
  },
  {
    id: 18,
    question:
      "Ghana is the second-largest producer of which commodity in the world?",
    options: ["Gold", "Cocoa", "Diamond", "Bauxite"],
    answer: "Cocoa",
    fact: "Tetteh Quarshie brought the first cocoa seeds to Ghana from Fernando Po.",
  },
  {
    id: 19,
    question: "How many administrative regions does Ghana currently have?",
    options: ["10", "12", "16", "14"],
    answer: "16",
    fact: "Six new regions were created in 2019 to improve administrative efficiency.",
  },
  {
    id: 20,
    question: "Which former UN Secretary-General was Ghanaian?",
    options: [
      "Ban Ki-moon",
      "Kofi Annan",
      "Boutros Boutros-Ghali",
      "Kurt Waldheim",
    ],
    answer: "Kofi Annan",
    fact: "Kofi Annan was a co-recipient of the Nobel Peace Prize in 2001.",
  },
];

export default function GhanaTrivia() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);

  const generateRandomQuestions = () => {
    const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
    setGameQuestions(shuffled.slice(0, 3));
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    const t = setTimeout(generateRandomQuestions, 100);
    return () => clearTimeout(t);
  }, []);

  const handleAnswer = (option: string) => {
    if (!gameQuestions[currentStep]) return;
    setSelectedOption(option);
    const correct = option === gameQuestions[currentStep].answer;
    if (correct) setScore((prev) => prev + 1);
  };

  const nextQuestion = () => {
    if (currentStep + 1 < gameQuestions.length) {
      setCurrentStep((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const resetGame = () => {
    generateRandomQuestions();
  };

  // Wait until questions are loaded
  if (gameQuestions.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-amber-700 bg-zinc-950/80 p-8 text-center shadow-xl">
        <p className="text-amber-200">Preparing questions…</p>
      </div>
    );
  }

  if (showResult && gameQuestions.length > 0) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-amber-700 bg-zinc-950/80 p-8 text-center shadow-xl">
        <Trophy className="mx-auto mb-4 text-yellow-500" size={64} />
        <h2 className="mb-2 text-3xl font-black text-yellow-500">
          Freedom Achieved!
        </h2>
        <p className="mb-6 text-sm text-gray-200">
          You scored {score} out of {gameQuestions.length}
        </p>
        <button
          onClick={resetGame}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-4 font-bold text-black transition-transform hover:scale-105 hover:cursor-pointer hover:bg-amber-500"
        >
          <RotateCcw size={20} /> Play Again
        </button>
      </div>
    );
  }

  const q = gameQuestions[currentStep];
  const progress = ((currentStep + 1) / gameQuestions.length) * 100;

  if (!q) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-amber-700 bg-zinc-950/80 p-8 text-center shadow-xl">
        <p className="text-amber-200">Preparing questions…</p>
      </div>
    );
  }

  return (
    <div className="w-full mt-5 mb-10 max-w-4xl text-start">
      <h1 className="mt-5 mb-2 text-center text-2xl font-bold text-yellow-500">
        Try this trivia!
      </h1>
      <p className="my-2 text-center text-sm text-gray-400">
        Answer the questions to test your knowledge of Ghana.
      </p>
      <div className="mx-auto max-w-lg overflow-hidden rounded-3xl border border-amber-700 bg-zinc-950/80 p-6 shadow-xl">
        {/* Progress Bar */}
        <div className="relative mb-8 h-3 w-full rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-linear-to-r from-red-600 via-yellow-400 to-green-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <Star
            className="absolute -top-1 rounded-full border border-amber-700 bg-zinc-950 p-0.5 text-yellow-400"
            size={20}
            style={{ left: `calc(${progress}% - 10px)` }}
          />
        </div>

        <span className="text-xs font-bold tracking-widest text-yellow-500 uppercase">
          Question {currentStep + 1}
        </span>
        <h3 className="mt-2 mb-6 text-xl leading-tight font-bold text-gray-50">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((option) => (
            <button
              key={option}
              disabled={!!selectedOption}
              onClick={() => handleAnswer(option)}
              className={`w-full rounded-2xl border-2 p-4 text-left font-semibold transition-all ${
                selectedOption === option
                  ? option === q.answer
                    ? "border-green-500 bg-green-900/60 text-green-200"
                    : "border-red-500 bg-red-900/60 text-red-200"
                  : "border-amber-700/40 bg-zinc-900/80 text-gray-100 hover:border-amber-500 hover:bg-zinc-900"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="animate-in fade-in slide-in-from-bottom-2 mt-6 rounded-2xl border border-amber-600 bg-amber-900/40 p-4">
            <p className="text-sm text-amber-100">
              <span className="font-bold text-yellow-300">Fact:</span> {q.fact}
            </p>
            <button
              onClick={nextQuestion}
              className="mt-4 ml-auto flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-2 text-sm font-semibold text-black hover:cursor-pointer hover:bg-amber-500"
            >
              Next <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
