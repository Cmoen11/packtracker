import * as React from "react";
import { useRouter } from "next/router";
import { useSession, signOut, getSession } from "next-auth/client";
import Layout from "../components/Layout";

const DashBoard: React.FC = () => {
	const [session, loading] = useSession();
	const router = useRouter();

	React.useEffect(() => {
		if (!loading && !session) {
			router.push("/");
		}
	}, [session, loading]);

	if (loading) {
		return <span>Loading..</span>;
	}

	if (!session) return null;

	return (
		<Layout>
			<button onClick={signOut}>Logg ut</button>
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
