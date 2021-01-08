import Head from "next/head";
import * as React from "react";
import { signOut, useSession } from "next-auth/client";
import GithubLoginButton from "../components/GithubLoginButton";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { Logo } from "../components/layout";

export default function Home() {
	const [session, loading] = useSession();
	const router = useRouter();

	React.useEffect(() => {
		if (!loading && session) {
			router.push("/dashboard");
		}
	}, [session, loading]);

	if (loading) {
		return <span>Laster ned innhold...</span>;
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>PackTrackR</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<span style={{ fontSize: 40, paddingBottom: 20 }}>
					Velkommen til{" "}
				</span>
				<Logo />

				<p className={styles.description}>
					Holder styr på alle dine pågående og mottatte pakker!
				</p>
				<GithubLoginButton />
			</main>

			<Footer />
		</div>
	);
}
