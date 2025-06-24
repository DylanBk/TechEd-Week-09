import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <main className="flex flex-col items-center mt-44">
            <h2 className="text-2xl">Sign In Page</h2>
            <SignIn />
        </main>
    );
}; 

export default SignInPage;