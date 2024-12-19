"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";


export default function ToggleTheme() {
    const [theme, setTheme] = useState('system');

    // Detecta el tema preferido del sistema
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
    // Cambia el tema
    const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(newTheme);
      // Guarda la preferencia en localStorage
      localStorage.setItem('theme', newTheme);
    };
  
    // Efecto para aplicar el tema almacenado o el del sistema
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
      } else {
        setTheme(systemTheme);
        document.documentElement.classList.add(systemTheme);
      }
    }, [systemTheme]);
  
    return (
      <button
        onClick={toggleTheme}
        className="p-2 bg-slate-300 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-md focus:outline-none hover:bg-slate-600"
      >
        <div className="w-6 h-6">
        {theme === 'dark' ? (<MoonIcon />) : (<SunIcon />)}
        </div>
      </button>
    );
}