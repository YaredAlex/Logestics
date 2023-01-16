import "./App.css";
import NavBars from "./component/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Services";
import { WorkWithUs } from "./pages/whyWorkWithus";

function App() {
	return (
		<div>
			<NavBars />
			<Home />
			<About />
			<Service />
			<WorkWithUs />
			<Contact />
		</div>
	);
}

export default App;
