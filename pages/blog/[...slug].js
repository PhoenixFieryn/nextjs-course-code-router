import { useRouter } from 'next/router';

function BlogPostsPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Blog Post</h1>
			{Object.entries(router.query).map((query) => {
				return <div>{query}</div>;
			})}
		</div>
	);
}

export default BlogPostsPage;
