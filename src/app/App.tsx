import { useNavigate } from "react-router";

import ButtonComponent from "./components/ButtonComponent";

const App = () => {
	const navigate = useNavigate();

	return (
		<div>
			<ButtonComponent color="blue" label="go error" handleClick={() => navigate("/efje")} />
		</div>
	);
}

export default App;