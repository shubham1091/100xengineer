function fetchGitHubUser() {
  const username = document.getElementById("username").value.trim();
  if (username === "") {
    alert("Please enter a GitHub username.");
    return;
  }

  const requestUrl = `https://api.github.com/users/${username}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        const data = JSON.parse(this.responseText);
        displayUserData(data);
      } else {
        alert("User not found.");
      }
    }
  };
  xhr.send();
}

function displayUserData(data) {
  const cardContainer = document.getElementById("github-card");
  cardContainer.innerHTML = "";

  const avatar = createElementAndAppend(cardContainer, "img");
  avatar.classList.add("avatar");
  avatar.src = data.avatar_url;
  avatar.alt = "avatar";

  const username = createElementAndAppend(
    cardContainer,
    "h2",
    data.name || data.login
  );

  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Bio:</strong> ${data.bio || "Not specified"}`
  ).classList.add("info");
  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Email:</strong> ${data.email || "Not specified"}`
  ).classList.add("info");
  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Public Repositories:</strong> ${data.public_repos}`
  ).classList.add("info");
  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Followers:</strong> ${data.followers}`
  ).classList.add("info");
  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Following:</strong> ${data.following}`
  ).classList.add("info");
  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Location:</strong> ${data.location || "Not specified"}`
  ).classList.add("info");
  createElementAndAppend(
    cardContainer,
    "p",
    `<strong>Joined GitHub:</strong> ${new Date(
      data.created_at
    ).toDateString()}`
  ).classList.add("info");
}

function createElementAndAppend(parent, elementType, textContent = "") {
  const element = document.createElement(elementType);
  element.innerHTML = textContent;
  parent.appendChild(element);
  return element;
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchGitHubUser();
});
