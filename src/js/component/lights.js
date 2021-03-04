import React, { useState } from "react";

export function Lights() {
	let [redLight, turnOnRed] = useState("red");
	let [yellowLight, turnOnYellow] = useState("yellow");
	let [greenLight, turnOnGreen] = useState("green");

	function cambio1() {
		turnOnRed("red glow");
		turnOnYellow("yellow");
		turnOnGreen("green");
	}

	function cambio2() {
		turnOnRed("red");
		turnOnGreen("green");
		turnOnYellow("yellow glow");
	}

	function cambio3() {
		turnOnRed("red");
		turnOnYellow("yellow");
		turnOnGreen("green glow");
	}

	return (
		<div className="lights">
			<div className={redLight} onClick={cambio1}></div>

			<div className={yellowLight} onClick={cambio2}></div>

			<div className={greenLight} onClick={cambio3}></div>
		</div>
	);
}
