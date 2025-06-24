import { Heart } from "lucide-react";

type Props = {
    id: number,
    title: string,
    body: string,
    topics: string[],
    createdAt: string,
    likes: number
};

const Post = (props: Props) => {
    return (
        <div className="h-full w-1/2 flex flex-col gap-4 p-2 rounded-md mx-auto bg-white/5 ">
            <ul className="flex flex-row gap-4 p-2">
                { props.topics.map((t, i) => (
                    <li
                        key={i}
                        className="p-1 border border-blue-300 rounded-[6px] text-blue-300">
                        {t}
                    </li>
                ))}
            </ul>

            <section className="flex flex-col">
                <h2>{props.title}</h2>
                <p className="text-gray-300">{props.body}</p>

                <Heart
                    className="mt-4 stroke-gray-300 fill-transparent hover:stroke-red-400 hover:fill-red-400 transition-all duration-200 cursor-pointer"
                    size={28}
                />
            </section>

            <hr />

            <p className="text-gray-300">There are no comments available.</p>
        </div>
    );
};

export default Post;