function getRepositories() {
    const username = document.getElementById('username').value;

    if (username.trim() === '') {
        alert('Please enter a valid GitHub username.');
        return;
    }

    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(repositories => {
            displayRepositories(repositories);
        })
        .catch(error => {
            console.error('Error fetching repositories:', error);
            alert('Error fetching repositories. Please try again.');
        });
}

function displayRepositories(repositories) {
    const repositoriesDiv = document.getElementById('repositories');
    repositoriesDiv.innerHTML = '';

    if (repositories.length === 0) {
        repositoriesDiv.innerHTML = 'No public repositories found.';
        return;
    }

    const ul = document.createElement('ul');

    repositories.forEach(repo => {
        const li = document.createElement('li');
        li.textContent = repo.name;
        ul.appendChild(li);
    });

    repositoriesDiv.appendChild(ul);
}