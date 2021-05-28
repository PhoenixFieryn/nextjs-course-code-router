import { useRouter } from 'next/router';

function ClientProjectPage() {
	const router = useRouter();

	function loadProjectHandler() {
		//load data...
		router.push('/clients/austin/projecta');
	}

	return (
		<div>
			<h1>The Projects of a Given Client</h1>
			<button onClick={loadProjectHandler}>Project A</button>
		</div>
	);
}

export default ClientProjectPage;
