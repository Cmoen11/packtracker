import { Provider } from "next-auth/client";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Head>
				<title>PackTrack</title>
			</Head>
			<Component {...pageProps} />{" "}
		</Provider>
	);
}

export default MyApp;
