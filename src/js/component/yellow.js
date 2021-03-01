import React, { useState } from "react";

export function Yellow() {
	let [yellowLight, turnOnYellow] = useState(false);

	return yellowLight ? (
		<div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
				style={
					({ height: "100px" }, { height: "100px" })
					// { box-shadow): "10px 10px 10px 10px 5px red" }
				}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary shadow-lg bg-warning"
				style={({ height: "100px" }, { height: "100px" })}
				onClick={() => turnOnYellow(false)}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
				style={({ height: "100px" }, { height: "100px" })}></div>
		</div>
	) : (
		<div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
				style={({ height: "100px" }, { height: "100px" })}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
				style={({ height: "100px" }, { height: "100px" })}
				onClick={() => turnOnYellow(true)}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
				style={({ height: "100px" }, { height: "100px" })}></div>
		</div>
	);
}
