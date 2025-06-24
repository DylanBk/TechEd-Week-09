import Link from "next/link";
// import {auth} from "@clerk/nextjs/server";
import { UserButton, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = async () => {
    // const userId = await auth();

    return (
        <header className="h-20 w-full sticky inset-0 z-10 flex flex-row items-center justify-between p-4 border-b border-white/20 bg-background">
            <h1 className="text-4xl">Clerk Authentication</h1>

            <nav className="flex flex-row items-center gap-4">
                <Link href='/'>Home</Link>
                <Link href='/posts'>Posts</Link>

                {/* { userId && (
                    <p>user: {userId}</p>
                )} */}

                <SignedIn>
                    <Link href='/posts/new'>New Post</Link>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton mode="modal" />
                    <SignUpButton />
                </SignedOut>
            </nav>
        </header>
    )
};

export default Header;