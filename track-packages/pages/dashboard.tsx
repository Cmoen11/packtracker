import * as React from "react";
import { useSession, getSession } from "next-auth/client";
import Layout from "../components/Layout";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const DashBoard: React.FC<{ test: any }> = (props) => {
	const [session, loading] = useSession();
	React.useEffect(() => {
		if (!loading && !session) {
			// window.location.replace("/");
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
	// let user;
	// if (!session) {
	// 	user = await prisma.user.findFirst({
	// 		where: { email: session.user.email },
	// 	});
	// }

	// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
	// console.log(user);
	// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
	return {
		props: { session },
	};
}

export default DashBoard;
