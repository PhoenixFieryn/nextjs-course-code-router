import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The ProjectPage for a Specific Project for a Selected Client</h1>
			{Object.entries(router.query).map((property) => {
				return (
					<p>
						{property[0]} : {property[1]}
					</p>
				);
			})}
		</div>
	);
}

export default SelectedClientProjectPage;
