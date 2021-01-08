import Footer from "../Footer";
import Logo from "./Logo";
import * as React from "react";

const Layout: React.FunctionComponent<{ children: any }> = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

export { Logo };
export default Layout;
