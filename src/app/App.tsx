import Blueprint from "./blueprint/Blueprint";
import Ide from "./ide/Ide";
import Navbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Navbar />

			<main>
				<Blueprint />
				
				{/* <Ide /> */}
			</main>
		</>
	);
}

export default App