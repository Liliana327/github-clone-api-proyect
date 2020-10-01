class UI {
    constructor(){
        this.profile = document.getElementById('profile')
    }
    showProfile(User){
        this.profile.innerHTML = `
            <div class="card mt-2 animated bounceInLeft">
                <img src="${User.avatar_url}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${User.name} / ${User.login}</h3>
                    <a href="${User.html_url}" class="btn btn-outline-info btn-block" target="_blank">Mirar perfil</a>
                    <span class="badge badge-success">
                        Followers: ${User.followers}
                    </span>
                    <span class="badge badge-primary">
                        Following: ${User.following}
                    </span>
                    <span class="badge badge-warning">
                        Company: ${User.company}
                    </span>
                </div>
            </div>
        `;
    }
}
module.exports = UI