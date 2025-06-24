import db from "@/utils/db";
import PostFC from "@/components/Post";

const Post = async ({ params }: { params: { id: string } }) => {
    const id = await Number(params.id);

    console.log('id', id, typeof(id))

    const post = await db.query(
        'SELECT * FROM posts WHERE id = $1',
        [id]
    );

    return (
        <main>
            {post.rowCount && post.rowCount > 0 ? (
                <PostFC
                    id={post.rows[0].id}
                    title={post.rows[0].title}
                    body={post.rows[0].body}
                    topics={post.rows[0].topics || []}
                    createdAt={post.rows[0].created_at}
                    likes={post.rows[0].likes || 0}
                />
            ) : (
                <div className="mt-64 text-center">
                    <h2 className="text-3xl font-bold">Post not found</h2>
                    <p className="text-lg">The post you are looking for does not exist.</p>
                </div>
            )}
        </main>
    );
};

export default Post;