import { useNavigate } from "react-router";

import ButtonComponent from "./components/ButtonComponent";

const ErrorPage = () => {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<h1 className="text-3xl">Oops!</h1>
			<p className="text-muted text-gray-500">Sorry, an unexpected error has occurred.</p>
			<ButtonComponent color="blue" label="Go Home!" handleClick={() => navigate("/")} />
		</div>
	);
}

export default ErrorPage;