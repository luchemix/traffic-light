import React from "react";
import { TL } from "./traffic.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid mt-5 justify-content-center">
			<TL />
		</div>
	);
}
