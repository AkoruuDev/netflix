const container = document.querySelector('.container');
const users = [
    {
        name: "Felipe Cardio oso",
        picture: "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
    },{
        name: "Relampago Marquinhos",
        picture: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
    },{
        name: "Franciny Elke",
        picture: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
    },{
        name: "Glauber José",
        picture: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
    }
]

function loadSelectUserPage() {
    container.innerHTML += `
    <div class="logo-icon">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
    </div>
    `

    users.forEach(e => {
        container.innerHTML += `
            <div class="users">
                <div class="user" onclick=selectUser(this)>
                    <img src=${e.picture} alt=${e.name} />
                    <p>${e.name}</p>
                </div>
            </div>
            `
    })
}

function selectUser(element) {
    const user = {
        name: element.querySelector("p").innerHTML,
        picture: element.querySelector("img").currentSrc
    }
    
    loadUserPage(user)
}

function loadUserPage(user) {
    console.log(user)

    container.innerHTML = `
    <header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" alt="logo-icon" />
        <nav class="menu-bar">
            <p>Home</p>
            <p>Series</p>
            <p>Films</p>
            <p>New & Popular</p>
            <p>My List</p>
        </nav>
    </header>
    `
}

function onLoad() {
    loadSelectUserPage()
}

onLoad()