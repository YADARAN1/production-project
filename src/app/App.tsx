import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRoter } from "./providers/router";
import "./styles/index.scss";

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />
			<AppRoter />
		</div>
	);
};

export default App;
