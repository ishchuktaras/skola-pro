"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./section-header";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Updated pricing with more realistic numbers
  const monthlyPrice = 4900;
  const annualPrice = 49000; // Provides a clear savings compared to monthly

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          title={"Ceny"}
          heading={"Transparentní ceny za výkonné nástroje"}
          description={
            "Vyberte si plán, který vyhovuje vašim obchodním potřebám. Flexibilní ceny bez skrytých poplatků, navržené tak, aby odpovídaly vašemu růstu."
          }
        />
        <div className="mx-auto mt-8 flex justify-center space-x-4">
          <Button
            variant={isAnnual ? "outline" : "default"}
            onClick={() => setIsAnnual(false)}
          >
            Měsíční
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Každoročně
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Ušetřete 10 %
            </span>
          </Button>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {isAnnual ? "Roční" : "Měsíční"} Plan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Odemkněte plné možnosti platformy s neomezeným přístupem k našim
              pokročilým funkcím. Navrženo pro týmy a podniky, které chtějí
              maximalizovat produktivitu a efektivitu.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-xl font-semibold leading-6 text-indigo-600">
                Co je zahrnuto
              </h4>
              <div className="h-px flex-auto bg-gray-100"></div>
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Evidence žáků
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Rozvrh hodin
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 01.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Správa zaměstnanců
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Klasifikace a hodnocení
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Komunikační platforma
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Ekonomická agenda
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Správa učebních materiálů
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                Bezpečnost a přístupová práva
              </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  {isAnnual
                    ? "Plaťte ročně a ušetřete 10 %"
                    : "Flexibilní měsíční tarif"}
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {isAnnual ? annualPrice : monthlyPrice}
                  </span>
                  <span className="text-xl font-semibold leading-6 tracking-wide text-gray-600">
                    Kč
                  </span>
                  {!isAnnual && (
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /měsíc
                    </span>
                  )}
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-[#884DEE] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#884DEE]-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#884DEE]-600"
                >
                  Spusťte bezplatnou zkušební verzi
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  14 denní bezplatná zkušební verze. Není vyžadována žádná
                  kreditní karta. Můžete kdykoli zrušit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
