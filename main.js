document.addEventListener('DOMContentLoaded' , function(){
    const profileAvatar = document.querySelector('#avatar');
    const profileName = document.querySelector('#name');
    const profileUserName = document.querySelector('#user-name');
    const profileLink = document.querySelector('#p-link');
    const repositorios = document.querySelector('#reps');
    const followers = document.querySelector('#followers');
    const follows = document.querySelector('#follows');
    
    fetch('https://api.github.com/users/DiegoPazzini')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        profileAvatar.src = json.avatar_url;
        profileName.innerText = json.name;
        profileUserName.innerText = `@${json.login}`;
        repositorios.innerText = json.public_repos;
        followers.innerText = json.followers;
        follows.innerText = json.following;
        profileLink.href = json.html_url;
    })
})