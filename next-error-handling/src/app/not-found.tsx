import Link from "next/link";

const NotFound = () => {
    return (
        <main>
            <div className="w-96 mt-64 flex flex-col items-center justify-center mx-auto">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="text-lg">The page you are looking for does not exist.</p>

                <Link className="p-1 rounded-sm mt-10 text-blue-500/90 hover:bg-blue-500/10 transition-all" href='/'>Back To Home</Link>
            </div>
        </main>
    );
};

export default NotFound;