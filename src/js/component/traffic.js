import React, { useState } from "react";
import { Lights } from "./lights.js";
import { Red } from "./red.js";

export function TL() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-5"></div>
				<div
					className="col-2 bg-light justify-content-center rounded border border-dark"
					style={({ height: "400px" }, { width: "100px" })}>
					{/* Aquí van los comps de las luces */}
					<Lights />
					{/* <Red /> */}
				</div>
				<div className="col-5"></div>
			</div>
		</div>
	);
}
