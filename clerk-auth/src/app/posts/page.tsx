import db from "@/utils/db";

import PostCard from "@/components/PostCard";

const Posts = async () => {
    const topics: string[] = [];
    const posts = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
    const q = await db.query(
        'SELECT * FROM post_topics WHERE post_id = $1',
        [posts?.rows[0]?.id]
    );
    
    for (const i in q.rows) {
        const t = await db.query(
            'SELECT * FROM topics WHERE id = $1',
            [q.rows[i].topic_id]
        );
        
        topics.push(t.rows[0].name);
    };

    return (
        <main>
            { posts.rowCount && posts.rowCount > 0 ? (
                <div className="h-full w-1/2 flex flex-row flex-wrap gap-8 mx-auto">
                    {posts.rows.map((p, i) => (
                        <PostCard
                            key={i}
                            id={p.id}
                            cover={p.cover_image || '/placeholder.png'}
                            coverAlt={p.cover_image_alt || 'Post Cover Image'}
                            title={p.title}
                            summary={p.summary || 'No summary available.'}
                            topics={topics}
                        />
                    ))}
                </div>
            ) : (
                <div className="mt-64 text-center">
                    <h2 className="text-3xl font-bold">No posts available</h2>
                    <p className="text-lg">Please check back later.</p>
                </div>
            )}
        </main>
    );
};

export default Posts;