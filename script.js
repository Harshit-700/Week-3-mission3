const input = document.querySelector("input");
const profileCard = document.getElementById("profile_card");
const repoList = document.getElementById("repo_list");

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        getUser();
    }
});

async function getUser() {
    const username = input.value.trim();
    profileCard.innerHTML = "";
    repoList.innerHTML = "";

    if (username === "") {
        profileCard.innerHTML = "<p>Please enter a username</p>";
        return;
    }
    profileCard.innerHTML = `<div class="loader"></div>`;

    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);

        if (userResponse.status === 404) {
            throw new Error("404 - User not found");
        }

        const userData = await userResponse.json();
        const repoResponse = await fetch(userData.repos_url);
        const repoData = await repoResponse.json();

        profileCard.innerHTML = `
            <img src="${userData.avatar_url}" width="100" class="profile-img">
            <h2>${userData.name || "No Name"}</h2>
            <p>${userData.bio || "No Bio Available"}</p>
            <p>📅 ${new Date(userData.created_at).toDateString()}</p>

            <a href="${userData.html_url}" target="_blank">
                <button class="profile-btn">View Profile</button>
            </a>
        `;

        if (repoData.length === 0) {
            repoList.innerHTML = "<p>No repositories found</p>";
            return;
        }

        repoData.slice(0, 5).forEach(repo => {
            const div = document.createElement("div");
            div.classList.add("repo-item");

            div.innerHTML = `
                <div>
                    <p>
                        <a href="${repo.html_url}" target="_blank">
                            <strong>${repo.name}</strong>
                        </a>
                    </p>
                </div>
                <a href="${repo.html_url}" target="_blank">
                    <button class="repo-btn">View</button>
                </a>
            `;
            repoList.appendChild(div);
        });

    } catch (error) {
        profileCard.innerHTML = `<p class="error">${error.message}</p>`;
    }
}