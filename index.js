const activateNavLink = () => {
	const refreshLink = () => {
		const { hash, pathname } = window.location;
		document.querySelectorAll(`#topnav > div > a`).forEach((el)=>el.classList.remove("active"));
		if (pathname === "/") {
			document.querySelector(`#topnav > div > a[href="/#${hash.replace("#", "")}"]`)?.classList.add("active");
		} else {
			const newPathName = pathname.split("/");
			newPathName.pop();
			document.querySelector(`#topnav > div > a[href="${newPathName.join("/")}"]`)?.classList.add("active");
		}
	};

	refreshLink();

	window.addEventListener("hashchange", function () {
		refreshLink();
	});
};

function loadImports() {
	var includes = document.querySelectorAll("[data-include]");
	includes.forEach((el) => {
		var file = "/" + el.dataset["include"] + ".html";

		fetch(file)
			.then((data) => data.text())
			.then((data) => {
				el.innerHTML = data;
			});
	});
}

loadImports();

function toggleHeader() {
	var x = document.getElementById("topnav");
	if (x.className === "topnav") {
		x.className += " open";
	} else {
		x.className = "topnav";
	}
}
