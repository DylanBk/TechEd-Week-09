import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <main className="flex flex-col items-center mt-44">
            <h2 className="text-2xl">Sign Up Page</h2>
            <SignUp />
        </main>
    );
};

export default SignUpPage;