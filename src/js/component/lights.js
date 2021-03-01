import React, { useState } from "react";

export function Lights() {
	let [redLight, turnOnRed] = useState(false);
	let [yellowLight, turnOnYellow] = useState(false);
	let [greenLight, turnOnGreen] = useState(false);

	if (redLight == false && yellowLight == false && greenLight == false) {
		return (
			<div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
					style={({ height: "100px" }, { height: "100px" })}
					onClick={() => turnOnRed(true)}></div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
					style={({ height: "100px" }, { height: "100px" })}
					onClick={() => turnOnYellow(true)}></div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
					style={({ height: "100px" }, { height: "100px" })}
					onClick={() => turnOnGreen(true)}></div>
			</div>
		);
	} else if (
		redLight == true &&
		yellowLight == false &&
		greenLight == false
	) {
		return (
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
		);
	} else if (
		yellowLight == true &&
		redLight == false &&
		greenLight == false
	) {
		return (
			<div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
					style={({ height: "100px" }, { height: "100px" })}></div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning shadow-lg"
					style={({ height: "100px" }, { height: "100px" })}
					onClick={() => turnOnYellow(false)}></div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success"
					style={({ height: "100px" }, { height: "100px" })}></div>
			</div>
		);
	} else if (
		greenLight == true &&
		redLight == false &&
		yellowLight == false
	) {
		return (
			<div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-danger"
					style={({ height: "100px" }, { height: "100px" })}></div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-warning"
					style={({ height: "100px" }, { height: "100px" })}></div>
				<div
					className="w-50 mx-auto mt-1 mb-2 rounded-circle border border-secondary bg-success shadow-lg"
					style={({ height: "100px" }, { height: "100px" })}
					onClick={() => turnOnGreen(false)}></div>
			</div>
		);
	}
}
