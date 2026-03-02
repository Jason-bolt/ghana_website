"use client";

import React, { useState, useEffect } from "react";
import { HelpCircle, RefreshCw } from "lucide-react";
import Image from "next/image";

interface Card {
  id: number;
  symbol: string;
  name: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const ADINKRA_DATA = [
  { symbol: "/ad_1.jpg", name: "Gye Nyame" },
  { symbol: "/ad_2.jpg", name: "Sankofa" },
  { symbol: "/ad_3.jpg", name: "Duafe" },
  { symbol: "/ad_4.jpg", name: "Adinkrahene" },
  { symbol: "/ad_5.jpg", name: "Adinkrahene" },
  { symbol: "/ad_6.jpg", name: "Adinkrahene" },
];

const AdinkraGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  // Initialize and Shuffle Game
  const initializeGame = () => {
    const duplicatedCards = [...ADINKRA_DATA, ...ADINKRA_DATA]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        ...item,
        id: index,
        isFlipped: false,
        isMatched: false,
      }));
    setCards(duplicatedCards);
    setFlippedCards([]);
    setMoves(0);
  };

  useEffect(() => {
    const startGame = setTimeout(() => {
      initializeGame();
    }, 1000);

    return () => clearTimeout(startGame);
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched)
      return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((prev) => prev + 1);
      const [firstId, secondId] = newFlipped;

      if (cards[firstId].symbol === cards[secondId].symbol) {
        const newCardsCopy = [...newCards];
        newCardsCopy[firstId].isMatched = true;
        newCardsCopy[secondId].isMatched = true;
        setCards(newCardsCopy);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          const newCardsCopy = [...newCards];
          newCardsCopy[firstId].isFlipped = false;
          newCardsCopy[secondId].isFlipped = false;
          setCards(newCardsCopy);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <section className="my-10 w-full max-w-4xl text-start">
      <h1 className="my-5 text-center text-2xl font-bold text-yellow-500">
        Try this puzzle!
      </h1>
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-xl border border-amber-700 bg-zinc-950/80 p-6 shadow-lg">
        <div className="mb-6 flex w-full items-center justify-between">
          <h2 className="text-2xl font-bold text-yellow-500">Adinkra Match</h2>
          <div className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-medium text-black shadow-sm">
            Moves: {moves}
          </div>
        </div>

        <div className="grid w-full grid-cols-4 gap-3">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`preserve-3d flex h-28 transform cursor-pointer items-center justify-center rounded-lg transition-all duration-500 md:h-38 xl:h-48 ${
                card.isFlipped || card.isMatched ? "rotate-y-180" : ""
              }`}
            >
              <div
                className={`flex h-full w-full items-center justify-center rounded-lg text-2xl font-bold shadow-md ${
                  card.isMatched
                    ? "bg-green-700 text-white"
                    : card.isFlipped
                      ? "bg-amber-600 text-black"
                      : "bg-red-700 text-white hover:bg-red-800"
                }`}
              >
                {card.isFlipped || card.isMatched ? (
                  <Image
                    src={card.symbol}
                    alt={card.name}
                    width={100}
                    height={100}
                    className="w-50"
                  />
                ) : (
                  // card.symbol
                  <HelpCircle size={28} />
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={initializeGame}
          className="mt-8 flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-2 text-black transition-colors hover:cursor-pointer hover:bg-amber-500"
        >
          <RefreshCw size={18} /> Reset Game
        </button>
      </div>
    </section>
  );
};

export default AdinkraGame;
