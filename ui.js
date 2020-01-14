class UI {
    constructor(){
        this.profile = document.querySelector('.profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <ul>
                <li>User: ${user.login}</li>
                <li>HTML url: ${user.html_url}</li>
                <li>${user.avatar_url}</li>
                <li><img src="${user.avatar_url}"></li>
            </ul>        
        `;
    }

    showRepos(repos){
        let reposArrayElements = '';

        repos.forEach(repo => {
            reposArrayElements += `
                <ul>
                    <li>Name: ${repo.name}</li>
                    <li>Repo URL: ${repo.html_url}</li>
                    <li>Followers: ${repo.forks_count}</li>
                </ul>
            `;

            document.querySelector('.repos').innerHTML = reposArrayElements;
        });

    }
}