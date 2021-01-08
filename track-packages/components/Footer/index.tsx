import * as React from "react";
import styles from "./styles.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<a
				href="https://github.com/Cmoen11"
				target="_blank"
				rel="noopener noreferrer"
			>
				Levert av{" "}
				<strong style={{ marginLeft: 3 }}>Christian Moen</strong>
			</a>
		</footer>
	);
};

export default Footer;
