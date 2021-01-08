import { Grommet } from "grommet";
import { Provider } from "next-auth/client";
import Head from "next/head";
import "../styles/globals.css";

const theme = {
	global: {
		colors: {
			brand: "#CBF3F0",
		},
		font: {
			family:
				"Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
			size: "18px",
			height: "20px",
		},
	},
};

function MyApp({ Component, pageProps }) {
	return (
		<Provider session={pageProps.session}>
			<Head>
				<title>PackTrack</title>
			</Head>
			<Grommet theme={theme}>
				<Component {...pageProps} />{" "}
			</Grommet>
		</Provider>
	);
}

export default MyApp;
