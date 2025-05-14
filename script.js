document.addEventListener("DOMContentLoaded", function () {
  // --- Dynamic Text Content ---
  const heroTextElement = document.getElementById("hero-text");
  if (heroTextElement) {
    heroTextElement.textContent =
      "Experience the iconic sounds and style of Rihanna!";
  }

  // --- Dynamic CSS Styling ---
  const headerElement = document.querySelector("header");
  if (headerElement) {
    headerElement.style.borderBottom = "5px solid rgba(173, 110, 201, 0.7)"; // Light purple with some transparency
    headerElement.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
  }

  const navElement = document.querySelector("header nav");
  if (navElement) {
    navElement.style.marginTop = "1em";
  }

  const albumGridElement = document.querySelector(".album-grid");
  if (albumGridElement) {
    albumGridElement.style.padding = "1.5em";
    albumGridElement.style.gap = "1.2em";
  }

  const albumElements = document.querySelectorAll(".album");
  albumElements.forEach((album) => {
    album.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; // Slightly transparent white
    album.style.borderRadius = "8px";
    album.style.padding = "1em";
    album.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
  });

  const merchSection = document.getElementById("merch");
  if (merchSection) {
    merchSection.style.backgroundColor = "rgba(144, 238, 144, 0.3)"; // Light green with some transparency
    merchSection.style.borderRadius = "8px";
    merchSection.style.padding = "1.5em";
    merchSection.style.textAlign = "center";
  }

  const connectSection = document.getElementById("connect");
  if (connectSection) {
    connectSection.style.padding = "1.5em";
    connectSection.style.backgroundColor = "rgba(220, 220, 220, 0.5)"; // Light grey with some transparency
    connectSection.style.borderRadius = "8px";
    connectSection.style.textAlign = "center";
  }

  const footerElement = document.querySelector("footer");
  if (footerElement) {
    footerElement.style.backgroundColor = "rgba(128, 128, 128, 0.7)"; // Grey with some transparency
    footerElement.style.fontWeight = "bold";
  }

  // --- Toggle Extra Info ---
  const toggleButton = document.getElementById("toggle-button");
  const extraInfoDiv = document.getElementById("extra-info");

  if (toggleButton && extraInfoDiv) {
    toggleButton.addEventListener("click", function () {
      if (
        extraInfoDiv.style.display === "none" ||
        extraInfoDiv.style.display === ""
      ) {
        extraInfoDiv.style.display = "block";
        toggleButton.textContent = "Hide Info";
      } else {
        extraInfoDiv.style.display = "none";
        toggleButton.textContent = "Show More Info";
      }
    });
  }

  // --- Dynamic Element Addition (Example: Adding a new social link) ---
  const connectList = document.querySelector("#connect ul");
  if (connectList) {
    const newListItem = document.createElement("li");
    const newLink = document.createElement("a");
    newLink.href = "https://www.tiktok.com/@rihanna"; // Replace with actual TikTok link
    newLink.textContent = "TikTok";
    newLink.target = "_blank";
    newListItem.appendChild(newLink);
    connectList.appendChild(newListItem);
  }

  // --- More Dynamic Content (Example: Changing the hero image source after a delay) ---
  const heroImageElement = document.getElementById("hero-image");
  if (heroImageElement) {
    setTimeout(() => {
      heroImageElement.src = "rihanna-new-hero.jpg"; // Replace with a different image
      heroImageElement.alt = "Rihanna looking stylish";
    }, 5000); // Change after 5 seconds
  }
});
