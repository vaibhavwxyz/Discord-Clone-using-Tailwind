const sideMenu = document.querySelector("#sideMenu");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");

menuBtn.addEventListener("click", () => {
	sideMenu.style.width = "288px";
});

closeBtn.addEventListener("click", () => {
	sideMenu.style.width = "0";
});
