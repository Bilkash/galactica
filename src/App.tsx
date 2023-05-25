import React from "react";
import { RouterProvider } from "react-router-dom";

import { routing } from "./routing";
import css from "./App.module.css";

function App() {
	return (
		<div className={css.layout}>
			<RouterProvider router={routing} />
		</div>
	);
}

export default App;
