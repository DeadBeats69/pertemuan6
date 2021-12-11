window.onload = function () {
	let dalamSatuanDetik = 30 * 60 + 20;
	let menit = null;
	let detik = null;

	let menitDetik = function () {
		menit = Math.floor(dalamSatuanDetik / 60);
		detik = dalamSatuanDetik % 60;

		if (detik < 10) {
			detik = "0" + detik;
		}

		document.body.querySelector("#menit").innerHTML = menit;
		document.body.querySelector("#detik").innerHTML = detik;
	};

	menitDetik();

	let intervalJalan = setInterval(() => {
		dalamSatuanDetik -= 1;
		menitDetik();
	}, 1000);

	document.body.querySelector("#reset").addEventListener("click", function () {
		clearInterval(intervalJalan);

		dalamSatuanDetik = 30 * 60 + 20;
		menitDetik();

		intervalJalan = setInterval(() => {
			dalamSatuanDetik -= 1;
			menitDetik();
		}, 1000);
	});

	document.querySelector("#set");
};
