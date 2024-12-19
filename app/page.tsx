"use client";

import { useState } from "react";
import showSweetAlert from "./lib/show-sweet-alert";
import Link from "next/link";
import ToggleTheme from "./ui/toggle-theme";

export default function Page() {
  const [messagesRandom, setMessagesRandom] = useState([
    "Ashhhh, aburrid@",
    "Te damos la oportunidad de lo pienses y elijas de nuevo",
    "Vamos, va a estar genial",
    "Anímate, solo es un rato",
    "Mueve ve, chulla vida!",
  ]);

  const handleAlert = () => {
    const randomNumber = Math.random() * 6;
    showSweetAlert({
      title: "Segur@",
      icon: "question",
      text: messagesRandom.at(randomNumber),
    });
  };

  return (
    <main className="flex justify-center">
      <div>
        <div className="absolute right-0 p-2">
          <ToggleTheme />
        </div>
        <div className="pt-20">
          <span className="text-slate-900 dark:text-slate-100">
            Deseas participar de la fiesta?
          </span>
        </div>
        <div className="flex justify-between">
          <Link href={"/party"}>
            <button className="text-slate-900 dark:text-slate-100 border border-slate-800 dark:border-slate-200 w-12 h-9 rounded-lg m-4">
              Si
            </button>
          </Link>
          <button
            onClick={handleAlert}
            className="text-slate-900 dark:text-slate-100 border border-slate-800 dark:border-slate-200 w-12 h-9 rounded-lg m-4"
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}
