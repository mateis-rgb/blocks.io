import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./app/App";
import ErrorPage from "./app/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />
	},
	{
		path: "*",
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.querySelector('#app'))
	.render(
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	)