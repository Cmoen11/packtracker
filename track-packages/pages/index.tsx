import Head from "next/head";
import { signOut, useSession } from "next-auth/client";
import GithubLoginButton from "../components/GithubLoginButton";

import styles from "../styles/Home.module.css";

export default function Home() {
	const [session, loading] = useSession();

	if (loading) {
		return <span>Laster ned innhold...</span>;
	}

	if (!session) {
		return (
			<div className={styles.container}>
				<Head>
					<title>PackTrackR</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>
						Velkommen til{" "}
						<span className={styles.packrLogoColor}>
							PackTrackr
						</span>{" "}
					</h1>

					<p className={styles.description}>
						Holder styr på alle dine pågående og mottatte pakker!
					</p>
					<GithubLoginButton />
				</main>

				<footer className={styles.footer}>
					<a
						href="https://github.com/Cmoen11"
						target="_blank"
						rel="noopener noreferrer"
					>
						Levert av{" "}
						<strong style={{ marginLeft: 5 }}>
							Christian Moen
						</strong>
					</a>
				</footer>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>PackTrackR</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{session && <button onClick={signOut}>Logg ut</button>}
			</main>
		</div>
	);
}
