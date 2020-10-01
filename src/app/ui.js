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
        this.clearMsg();
    }

    showMessage(message, css){
        const div = document.createElement('div');
        div.className = css;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.row');
        const profileHtml = document.querySelector('#profile');
        content.insertBefore(div, profileHtml);
    }

    clearMsg(){
        const alertFound = document.querySelector('.alert');
        if(alertFound) {
            alertFound.remove();
        }
    }
}
module.exports = UI