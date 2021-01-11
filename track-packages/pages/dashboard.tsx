import * as React from "react";
import { useSession, getSession } from "next-auth/client";
import Layout from "../components/Layout";

const DashBoard: React.FC = () => {
	const [session, loading] = useSession();

	React.useEffect(() => {
		if (!loading && !session) {
			window.location.replace("/");
		}
	}, [session, loading]);

	if (loading) {
		return <span>Loading..</span>;
	}

	if (!session) return null;

	return (
		<Layout>
			<p>content</p>
		</Layout>
	);
};

export async function getServerSideProps(context) {
	const session = await getSession(context);
	return {
		props: { session },
	};
}

export default DashBoard;
