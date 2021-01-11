import Head from "next/head";
import * as React from "react";
import { useSession } from "next-auth/client";
import GithubLoginButton from "../components/GithubLoginButton";
import GoogleLoginButton from "../components/GoogleLoginButton";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import { Logo } from "../components/Layout";

export default function Home() {
	const [session, loading] = useSession();

	React.useEffect(() => {
		if (!loading && session) {
			// window.location.replace("/dashboard");
		}
	}, [session, loading]);

	if (loading) {
		return <span>Laster ned innhold...</span>;
	}

	if (session) {
		return null;
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
				<GoogleLoginButton />
			</main>

			<Footer />
		</div>
	);
}
