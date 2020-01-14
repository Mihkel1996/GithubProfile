class GitHub {

    constructor(){
        this.client_ID = "de0b084f60a20c35fc4d";
        this.client_Secret = "7e11770338448aba7a9e587372e717e2cd9f5abf";
        this.user = 'Mihkel1996';
        this.apiUrl = "https://api.github.com/users/";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }   

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_Secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }

    }

}