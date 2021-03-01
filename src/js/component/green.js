import React, { useState } from "react";

export function Green() {
	let [greenLight, turnOnGreen] = useState(false);

	return greenLight ? (
		<div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
				style={
					({ height: "100px" }, { height: "100px" })
					// { box-shadow): "10px 10px 10px 10px 5px red" }
				}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
				style={({ height: "100px" }, { height: "100px" })}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary shadow-lg bg-success"
				style={({ height: "100px" }, { height: "100px" })}
				onClick={() => turnOnGreen(false)}></div>
		</div>
	) : (
		<div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
				style={({ height: "100px" }, { height: "100px" })}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
				style={({ height: "100px" }, { height: "100px" })}></div>
			<div
				className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
				style={({ height: "100px" }, { height: "100px" })}
				onClick={() => turnOnGreen(true)}></div>
		</div>
	);
}
