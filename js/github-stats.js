const username = "mehulprajapati2610";

async function loadGithub() {

    const user = await fetch(
        `https://api.github.com/users/${username}`
    ).then(res => res.json());

    document.getElementById("github-avatar").src =
        user.avatar_url;

    document.getElementById("github-name").textContent =
        user.name;

    document.getElementById("github-bio").textContent =
        user.bio;

    document.getElementById("repo-count").textContent =
        user.public_repos;

    document.getElementById("followers").textContent =
        "70+";

    document.getElementById("following").textContent =
        "5+";

    const repos = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated`
    ).then(res => res.json());

    const repoList =
        document.getElementById("repo-list");

    const featuredRepos = [
    "neuronudge",
    "DoseHopeProject",
    "chatverse-groq",
    "DSA_Revision"
];

const displayNames = {
    neuronudge: "NeuroNudge",
    DoseHopeProject: "DoseHope",
    "chatverse-groq": "ChatVerse",
    "DSA_Revision": "DSAPractice"
};


const techStack = {

    neuronudge: "Spring Boot • AI • MongoDB",

    DoseHopeProject: "Spring Boot • JWT • MySQL",

    "chatverse-groq": "Groq AI • Spring Boot",
DSA_Revision: "Java • DSA • LeetCode"

};

repos
    .filter(repo => featuredRepos.includes(repo.name))
    .forEach(repo => {

       repoList.innerHTML += `

<a
    class="repo"
    href="${repo.html_url}"
    target="_blank"
>

    <h4 class="repo-name">

        ${displayNames[repo.name] || repo.name}

    </h4>

    <p class="repo-description">

        ${repo.description ?? "Personal project under active development."}

    </p>

    <div class="repo-footer">

        <span class="repo-language">

            ${techStack[repo.name]}

        </span>

        <span class="repo-arrow">

            →

        </span>

    </div>

</a>

`;

    });

}

loadGithub();