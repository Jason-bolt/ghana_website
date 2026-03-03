"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import Founders from "@/components/Founders";
import Anthem from "@/components/Anthem";
import Pledge from "@/components/Pledge";
import Presidents from "@/components/Presidents";
import AdinkraGame from "@/components/AdinkraGame";

export default function Home() {
  const INTRO_SEEN_KEY = "ghana_intro_seen_v1";
  const INTRO_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
  const [showIntro, setShowIntro] = useState(false);
  const hasAnimatedRef = useRef(false);

  useLayoutEffect(() => {
    const raw = localStorage.getItem(INTRO_SEEN_KEY);
    const lastSeen = raw ? Number(raw) : NaN;
    const isFresh =
      !Number.isNaN(lastSeen) && Date.now() - lastSeen < INTRO_TTL_MS;
    if (isFresh) return;

    const raf = requestAnimationFrame(() => {
      setShowIntro(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [INTRO_TTL_MS]);

  useGSAP(
    () => {
      if (!showIntro || hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const initalLoadTimeline = gsap.timeline();

      const RED = "#red";
      const GOLD = "#gold";
      const GREEN = "#green";
      const BLACK = "#black";
      const FAKE_BACKGROUND = "#fake-background";
      const GHANA_FLAG = "#ghana-flag";

      gsap.set(`${RED}, ${GOLD}, ${GREEN}, ${BLACK}`, {
        x: -1500,
        y: 70,
      });
      gsap.set(GHANA_FLAG, {
        display: "block",
      });

      initalLoadTimeline
        .to(RED, {
          x: 0,
          y: 0,
          duration: 0.5,
        })
        .to(GOLD, {
          x: 0,
          y: 0,
          duration: 0.5,
        })
        .to(GREEN, {
          x: 0,
          y: 0,
          duration: 0.5,
        })
        .to(BLACK, {
          x: 0,
          y: 0,
          duration: 0.5,
        })
        .to(`${FAKE_BACKGROUND}, ${GHANA_FLAG}`, {
          autoAlpha: 0,
          delay: 1,
          duration: 1,
          ease: "back.out",
          onComplete: () => {
            localStorage.setItem(INTRO_SEEN_KEY, String(Date.now()));
            gsap.to(`${RED}, ${GOLD}, ${GREEN}, ${BLACK}`, {
              autoAlpha: 0,
              duration: 0.5,
            });
            setShowIntro(false);
          },
        });
    },
    { dependencies: [showIntro] },
  );

  return (
    <section className="jsutify-center flex min-h-screen w-full flex-col items-center">
      {showIntro ? (
        <>
          <div
            className="fixed inset-0 z-50 h-screen w-full bg-black"
            id="fake-background"
          ></div>
          <div
            className="fixed inset-1 z-50 mt-48 hidden w-full px-4"
            id="ghana-flag"
          >
            <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center">
              <div className="h-30 w-full -skew-3 bg-red-600" id="red"></div>
              <div className="h-30 w-full -skew-3 bg-yellow-500" id="gold"></div>
              <div className="h-30 w-full -skew-3 bg-green-700" id="green"></div>
              <Image
                src={"/black-star-icon.svg"}
                height={110}
                width={110}
                alt="black_star"
                id="black"
                className="absolute z-10 -skew-3"
              />
            </div>
          </div>
        </>
      ) : null}
      <section className="mx-auto min-h-screen w-full p-2">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-5 p-4 md:p-10">
          <Founders />
          <Anthem />
          <Pledge />
          <Presidents />
          <AdinkraGame />
        </div>
      </section>
    </section>
  );
}
