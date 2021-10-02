import React, { useState, useEffect } from "react";

function App() {
	const [timer, setTimer] = useState(new Date());
	let i = 1;
	useEffect(() => {
		const interval = setInterval(() => {
			let seconds = Math.floor((new Date().getTime() - 1633136400000) / 1000);
			var d = Math.floor(seconds / (3600 * 24));
			var h = Math.floor((seconds % (3600 * 24)) / 3600);
			var m = Math.floor((seconds % 3600) / 60);
			var s = Math.floor(seconds % 60);

			var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
			var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
			var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
			var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
			let so = { dDisplay, hDisplay, mDisplay, sDisplay };
			setTimer(so);
		}, 1000);

		// This is important, you must clear your interval when component unmounts
		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<header
				id="up"
				class="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
			>
				<div class="h-screen bg-opacity-50 bg-black flex items-center justify-center">
					<div class="mx-2 text-center">
						<h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
							<span class="text-white">Been</span> Together For <br/>  ❤️
						</h1>
						<h2 class="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight font-sans">
							{timer.dDisplay} <br />
							<span class="text-white">{timer.hDisplay}</span> <br />
							<span class="text-white">
								{timer.mDisplay}
								<br />
							</span>{" "}
							{timer.sDisplay}
							<br />
						</h2>
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
