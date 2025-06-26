import Link from "next/link";
import randomNum from "@/utils/randomNumber";
import * as motion from "motion/react-client";


type Link = {
    text: string,
    href: string,
    bgColor: string,
    textColor: string
};

const Examples = () => {
    const links: Link[] = [
        {
            text: 'Scroll',
            href: 'scroll',
            bgColor: 'bg-red-500',
            textColor: 'text-white'
        },
        {
            text: 'Rotate',
            href: 'rotate',
            bgColor: 'bg-orange-500',
            textColor: 'text-white'
        },
        {
            text: 'Follow',
            href: 'follow',
            bgColor: 'bg-yellow-500',
            textColor: 'text-black'
        },
        {
            text: 'Reorder',
            href: 'reorder',
            bgColor: 'bg-lime-500',
            textColor: 'text-black'
        }
    ];

    return (
        <main>
            <h2 className="my-8 text-4xl text-center">Examples</h2>

            <motion.div
                className="w-fit flex flex-col gap-8 items-center mx-auto">
                { links.map((l, i) => (
                    <motion.div
                        key={i}
                        className=""
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        transition={{
                            scale: {
                                type: 'spring',
                                visualDuration: 0.3,
                                bounce: 0.5
                            }
                        }}
                        whileHover={{scale: 1.05, rotate: randomNum(-10, 10)}}>
                        <Link
                            href={`/examples/${l.text.toLowerCase()}`}
                            className={`px-4 py-2 rounded-xs ${l.bgColor} ${l.textColor}`}>
                            {l.text}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
};

export default Examples;