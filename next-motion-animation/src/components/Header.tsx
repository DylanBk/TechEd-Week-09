'use client';

import Link from "next/link";
import { useState } from "react";
import * as motion from "motion/react-client";

type Tab = {
    href: string,
    text: string
};

const Header = () => {
        const tabs: Tab[] = [
        {
            href: '/',
            text: 'Home'
        },
        {
            href: '/examples',
            text: 'Examples'
        }
    ];

    const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
    console.log(selectedTab)


    return (
        <header className="h-20 w-full sticky inset-0 z-10 flex flex-row items-center justify-between p-4 bg-background/40 backdrop-blur-sm">
            <h1 className="text-3xl">React - Motion</h1>

            <nav className="flex flex-row gap-4 items-start">
                {tabs.map((t, i) => (
                    <motion.div
                        key={i}
                        className="relative flex flex-col gap-0.5"
                        onClick={() => setSelectedTab(t)}
                        layout>
                        <Link
                            href={t.href}
                            className="text-lg">
                            {t.text}
                        </Link>

                        {t.href === selectedTab.href && (
                            <motion.div
                                layoutId="underline"
                                className="h-1 w-full absolute bottom-0 bg-cyan-400"
                            />
                        )}
                    </motion.div>
                ))}
            </nav>
        </header>
    );
};

export default Header;