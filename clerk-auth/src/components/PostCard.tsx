'use client';

import Image from "next/image";
import {redirect} from 'next/navigation';

type Props = {
    id: number,
    cover: string,
    coverAlt: string,
    title: string,
    summary: string,
    topics: string[]
};

const PostCard = (props: Props) => {
    return (
        <section
            id={`postcard-${props.id}`}
            className="h-[25rem] w-64 flex flex-col justify-between bg-white/1 hover:bg-white/5 shadow hover:scale-105 transition-all cursor-pointer"
            onClick={() => redirect(`/posts/${props.id}`)}>
            <div className="flex flex-col">
                <Image
                    height='20'
                    width='100'
                    className="h-auto w-full object-cover opacity-70 hover:opacity-100 focus-visible:opacity-100 transition-opacity"
                    src={props.cover}
                    alt={props.coverAlt}
                    placeholder="blur"
                    blurDataURL={props.cover}
                />

                <h3 className="p-2 text-2xl">{props.title}</h3>
                <p className="p-2">{props.summary}</p>
            </div>

            <ul className="flex flex-row gap-4 p-2">
                { props.topics.map((t, i) => (
                    <li
                        key={i}
                        className="p-1 border border-blue-300 rounded-[6px] text-blue-300">
                        {t}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PostCard;