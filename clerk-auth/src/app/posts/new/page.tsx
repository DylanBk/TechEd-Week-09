import db from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { SignedOut, RedirectToSignIn } from "@clerk/nextjs";

type PostForm = {
    title: any,
    body: any
};

const NewPost = () => {
    const handleFormSubmit = async (formData: PostForm) => {
        'use server';

        formData = {
            title: formData.get('title'),
            body: formData.get('body')
        };

        const q = await db.query(
            'INSERT INTO posts (title, body, summary) VALUES ($1, $2, $3)',
            [formData.title, formData.body, 'placeholder summary']
        );

        if (q.rowCount && q.rowCount > 0) {
            console.log('Post created successfully');
            revalidatePath('/posts');
            redirect('/posts');
        } else {
            console.error('Failed to create post');
        };
    };

    return (
        <main>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>

            <h2 className="mt-10 text-3xl text-center">Create Post</h2>
            <form className="w-1/3 flex flex-col gap-4 items-center mx-auto" action={handleFormSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="title">Post Title</label>

                    <input
                        name="title"
                        type="text"
                        placeholder="Your title"
                        required
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="body">Post Body</label>

                    <textarea
                        name="body"
                        placeholder="Your content"
                        rows={10}
                        required
                    />
                </div>

                <button
                    className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                    type="submit">
                    Post
                </button>
            </form>
        </main>
    );
};

export default NewPost;