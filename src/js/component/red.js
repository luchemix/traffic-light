import React, { useState } from "react";

export function Red() {
	let [redLight, turnOnRed] = useState(false);

	return redLight ? (
		<div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary shadow-lg bg-danger"
				style={
					({ height: "100px" }, { height: "100px" })
					// { box-shadow): "10px 10px 10px 10px 5px red" }
				}
				onClick={() => turnOnRed(false)}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
				style={({ height: "100px" }, { height: "100px" })}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
				style={({ height: "100px" }, { height: "100px" })}></div>
		</div>
	) : (
		<div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
				style={({ height: "100px" }, { height: "100px" })}
				onClick={() => turnOnRed(true)}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
				style={({ height: "100px" }, { height: "100px" })}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
				style={({ height: "100px" }, { height: "100px" })}></div>
		</div>
	);
}
