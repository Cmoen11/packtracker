import Footer from "../Footer";
import Logo from "./Logo";
import * as React from "react";
import { signOut } from "next-auth/client";
import dashboardStyles from "./dashboard.module.css";

const Layout: React.FunctionComponent<{ children: any }> = ({ children }) => {
	return (
		<div className={dashboardStyles.container}>
			<header className={dashboardStyles.header}>
				<Logo style={{ height: 45, width: "auto" }} />
				<button onClick={signOut}>Logg ut</button>
			</header>
			<main className={dashboardStyles.main}>{children}</main>
			<Footer />
		</div>
	);
};

export { Logo };
export default Layout;
