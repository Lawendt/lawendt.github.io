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

TopProjects.push(new project("Funda Simulator", "2017", "img/FundaSimulator.png", "https://atomicrocket.itch.io/funda-simulator", "Feel the experience of shooting with a slingshot in VR. Best VR Game finalist on SBGames 2017.", ["VR", "Unity", "Game Design", "C#"]));

TopProjects.push(new project("Despeos", "WIP", "img/despeos_.png", "https://lawendt.itch.io/despeos", "Puzzle-plataform where you can only move by using a hook.", ["Unity", "Game Design", "C#"]));

TopProjects.push(new project("Party Hats", "WIP", "img/partyhats_.png", "https://twinravens.itch.io/party-hats", "Local multiplayer arcade where players fight each other to see which hat is the coolest.", ["Unity", "Game Design", "C#"]));

TopProjects.push(new project("2 Roll", "2015", "img/2Roll_.jpg", "https://lawendt.itch.io/2-roll", "2 Roll is about two separate souls faded to pass through doors wich are only opened by their eternal partner.", ["Unity", "Game Design", "C#", "Jam"]));

TopProjects.push(new project("Jampalooza", "2017", "img/Jampalooza_.png", "http://www.kongregate.com/games/NerdyOrcStudio/jampalooza", "Try to earn your life in a big musical festival.", ["Unity", "Game Design", "C#", "Jam"]));                   

TopProjects.push(new project("Atomic Rocket Arena", "2017", "img/rocketArena_.png", "https://play.google.com/store/apps/details?id=com.AtomicRocket.AtomicRocketArena&hl=pt_BR", "Multiplayer of spaceships which players use the same cellphone to battle each other.", ["Unity", "C#", "Mobile", "Atomic Rocket"]));   

TopProjects.push(new project("Bocha Simulator", "2017", "img/BochaSimulator.png", "https://twinravens.itch.io/bocha-simulator", "Play bocha now on your computer!", ["Unity", "Arduino","C#"]));   

TopProjects.push(new project("Present Aliens", "2016", "img/present-aliens_.png", "https://lawendt.itch.io/present-aliens", "Be like a proper alien and build things for humans!", ["Javascript", "Jam", "Web"]));   

// All projects
Projects = [];
for(var i in TopProjects) {
    Projects.push(TopProjects[i]);
}
Projects.push(new project("Simulacro - Sintagmas", "2017", "img/SimulacroSintagmas_.png", "https://www.behance.net/gallery/55304805/Simulacro-Sintagmas", "Educational game for iOS and Android with the objective of exercising 'sintagmas' in portuguese ", ["Unity", "C#", "Mobile", "Atomic Rocket"]))

AllTags = ["All", "Top"];

Projects.forEach(function(item,index){
	 AllTags = AllTags.concat(item.tags);
});

AllTags = AllTags.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
