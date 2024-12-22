const pill = document.querySelector(".dynamic-island .pill");
const dynamicIsland = document.querySelector(".dynamic-island");
const imessageIcon = document.getElementById("imessage-icon");
const message = document.querySelector(".dynamic-island .message.last");
const worldclockIcon = document.getElementById("worldclock-icon");
const breatheIcon = document.getElementById("breathe-icon");
const socialIcons = document.querySelector(".dynamic-island .right .social-icons");
const socialIconElements = document.querySelectorAll(".dynamic-island .right .social-icons img");

function addClickEffect(icon) {
	icon.classList.add("icon-clicked");
	setTimeout(() => {
		icon.classList.remove("icon-clicked");
	}, 100);
}

pill.addEventListener("click", () => {
	if (!dynamicIsland.classList.contains("active")) {
		dynamicIsland.classList.add("active");
	}
});

breatheIcon.addEventListener("click", () => {
	addClickEffect(breatheIcon);
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
	addClickEffect(imessageIcon);
	message.classList.toggle("hidden");
});

worldclockIcon.addEventListener("click", () => {
	addClickEffect(worldclockIcon);
	socialIcons.classList.toggle("visible");
});

socialIconElements.forEach(icon => {
	icon.addEventListener("click", () => {
		addClickEffect(icon);
	});
});
