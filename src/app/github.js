class Github {

    constructor(clientId, clientSecret){
        this.client_id = clientId;
        this.client_secret = clientSecret;
        this.repos_count = 6;
        this.repos_sort = "created: asc"
    }

    async fetchUser(user){
        const data = await fetch
        (`http://api.github.com/users/${user}?client_id=${this.client_id}&
        client_secret=${this.client_secret}`);
        const repo = await fetch
        (`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&
        client_secret=${this.client_secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`);
        const DataRepo = await repo.json();
        const userData = await data.json();
        console.log(userData);
        return {
            userData,
            DataRepo
        };

    }
}
module.exports = Github;