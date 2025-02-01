'use client'

import { ProfileCard } from "@/app/ui/cards";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export function Accordion({
    title,
    content,
  }: Readonly<{
    title: string,
    content: React.ReactNode;
  }>) {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <>
        <div className="p-4">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full">
                <span>{title}</span>
                {accordionOpen ? <span><FiMinus/></span> : <span><FiPlus /></span>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                accordionOpen 
                ? 'grid-rows-[1fr] opacity-100' 
                : 'grid-rows-[0fr] opacity-0'
                }`}>
                <div className="overflow-hidden">{content}</div>
            </div>
        </div>
        </>
    );
}