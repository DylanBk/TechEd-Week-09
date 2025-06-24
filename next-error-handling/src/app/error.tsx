'use client';

// import Link from "next/link";

type Props = {
    error: Error,
    reset: () => void
};

const Error = (props: Props) => {
    return (
        <main>
            <div className="w-fit mt-64 flex flex-col items-center justify-center mx-auto">
                <h1 className="text-4xl font-bold">Oh no! Something went wrong on that page!</h1>
                <p className="text-gray-300">{props.error.message}</p>

                <button className="px-4 py-2 rounded-sm mt-4 bg-yellow-500 hover:bg-yellow-600 text-black transition-all" onClick={() => props.reset()}>Try Again</button>

                {/* <Link className="p-1 rounded-sm mt-10 text-blue-500/90 hover:bg-blue-500/10 transition-all" href='/'>Back To Home</Link> */}
            </div>
        </main>
    );
};

export default Error;