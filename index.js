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


function openHeader() {
	var x = document.getElementById("topnav");
	if (x.className === "topnav") {
		x.className += " open";
	} else {
		x.className = "topnav";
	}
}

// document.querySelectorAll('a[href^="#"]').addEventListener("click", function (event) {
// 	event.preventDefault();
// 	document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth", top });
// });
