function project(name, date, img, url, description, tags) {
    this.name = name;
    this.date = date;
    this.img = img;
    this.description = description;
    this.url = url;
    this.tags = tags;

}

TopProjects = [];

// Stared Projects

TopProjects.push(new project("Funda Simulator", "2017", "img/FundaSimulator.png", "#!funda-simulator", "Feel the experience of shooting with a slingshot in VR. Best VR Game finalist on SBGames 2017.", ["VR", "Unity", "Game Design", "C#", "Atomic Rocket"]));

TopProjects.push(new project("Despeos", "WIP", "img/despeos_.png", "https://lawendt.itch.io/despeos", "Puzzle-plataform where you can only move by using a hook.", ["Unity", "Game Design", "C#"]));

TopProjects.push(new project("Party Hats", "WIP", "img/partyhats_.png", "https://twinravens.itch.io/party-hats", "Local multiplayer arcade where players fight each other to see which hat is the coolest.", ["Unity", "Game Design", "C#"]));

TopProjects.push(new project("2 Roll", "2015", "img/2Roll_.jpg", "https://lawendt.itch.io/2-roll", "2 Roll is about two separate souls faded to pass through doors wich are only opened by their eternal partner.", ["Unity", "Game Design", "C#", "Jam"]));

TopProjects.push(new project("Angry Pucks", "2018", "img/angry-pucks_.png", "https://play.google.com/store/apps/details?id=com.babyowlstudios.angrypucks", "Angry Pucks is game about pucks that are angry and want you to PUCK OFF!", ["Unity", "C#", "Management", "Baby Owl"]));   

TopProjects.push(new project("Jampalooza", "2017", "img/Jampalooza_.png", "http://www.kongregate.com/games/NerdyOrcStudio/jampalooza", "Try to earn your life in a big musical festival.", ["Unity", "Game Design", "C#", "Jam"]));                   

TopProjects.push(new project("Atomic Rocket Arena", "2017", "img/rocketArena_.png", "https://play.google.com/store/apps/details?id=com.AtomicRocket.AtomicRocketArena&hl=pt_BR", "Multiplayer of spaceships which players use the same cellphone to battle each other.", ["Unity", "C#", "Mobile", "Atomic Rocket"]));   

TopProjects.push(new project("Bocha Simulator", "2017", "img/BochaSimulator.png", "https://twinravens.itch.io/bocha-simulator", "Bocha Simulator is your new way of playing Bocha, now on your computer! Built to be played with a custom made controller, but can also be played without it.", ["Unity", "Arduino","C#"]));   

TopProjects.push(new project("Present Aliens", "2016", "img/present-aliens_.png", "https://lawendt.itch.io/present-aliens", "Be like a proper alien and build things for humans!", ["Javascript", "Jam", "Web"]));   



// All projects
Projects = [];
for(var i in TopProjects) {
    Projects.push(TopProjects[i]);
}

Projects.push(new project("Sheppy The Dog", "2018", "img/sheppy-the-dog_.png", "https://play.google.com/store/apps/details?id=com.babyowl.sheppythedog", "Help a charismatic dog to herd the sheep back to the barn and enjoy your day at the farm.", ["Unity", "C#", "Baby Owl"]));   

Projects.push(new project("Element Cycle", "2018", "img/ElementCycle.png", "https://globalgamejam.org/2018/games/element-cycle", "Couch arena game about absorbing elements from the battleground and transmitting it to others players.", ["Unity", "Game Design", "Jam"]));

Projects.push(new project("Simulacro - Sintagmas", "2017", "img/SimulacroSintagmas_.png", "https://www.behance.net/gallery/55304805/Simulacro-Sintagmas", "Educational game for iOS and Android with the objective of exercising 'sintagmas' in portuguese ", ["Unity", "C#", "Mobile", "Atomic Rocket"]))

Projects.push(new project("Átomo - Ebook Reader", "2017", "img/atomo.png", "https://play.google.com/store/apps/details?id=com.AtomicRocket.Atomo", "Reader of customizable interactable ebooks", ["Unity", "C#", "Mobile", "Atomic Rocket"]));


Projects.push(new project("Olympic S.S. Idol Festival", "2015", "img/OlympicSS_.jpg", "https://www.behance.net/gallery/27995525/Olympic-SS-Idol-Festival", "First game developed. A rythim game based on Love Live!", ["C++", "Game Design"]));


AllTags = ["All", "Top"];

Projects.forEach(function(item,index){
	 AllTags = AllTags.concat(item.tags);
});

AllTags = AllTags.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
