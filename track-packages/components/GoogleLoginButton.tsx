import styles from "./GitHubLoginButton.module.css";
import { signIn } from "next-auth/client";

const GoogleSignInButton: React.FC = () => {
	return (
		<a
			href="#"
			onClick={() => signIn("google")}
			className={styles.linkStyle}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-label="Google"
				role="img"
				viewBox="0 0 512 512"
				style={{
					width: 30,
					verticalAlign: "middle",
					borderRight: "0.5px solid #aaa",
				}}
			>
				<rect width="512" height="512" rx="15%" fill="#1B1817" />
				<path
					fill="#fff"
					d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
				/>
			</svg>
			<span style={{ paddingLeft: 5 }}>Logg inn med Google</span>
		</a>
	);
};

export default GoogleSignInButton;
