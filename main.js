const pill = document.querySelector(".dynamic-island .pill");
const dynamicIsland = document.querySelector(".dynamic-island");
const photo = document.querySelector(".dynamic-island .photo img");
const imessageIcon = document.querySelector(".dynamic-island .right img");
const message = document.querySelector(".dynamic-island .message.last");
const walletIcon = document.getElementById("wallet-icon");
const socialIcons = document.querySelector(".dynamic-island .right .social-icons");

pill.addEventListener("click", () => {
	if (!dynamicIsland.classList.contains("active")) {
		dynamicIsland.classList.add("active");
		photo.classList.add("visible");
	}
});

photo.addEventListener("click", () => {
	if (dynamicIsland.classList.contains("active")) {
		dynamicIsland.classList.remove("active");
	} else {
		dynamicIsland.classList.add("active")
	}
	if (!message.classList.contains("hidden")) {
		message.classList.add("hidden");
	}
	if (socialIcons.classList.contains("visible")) {
		socialIcons.classList.remove("visible");
	}
});

imessageIcon.addEventListener("click", () => {
	message.classList.toggle("hidden");
});

walletIcon.addEventListener("click", () => {
	socialIcons.classList.toggle("visible");
});
