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

// TODO: make it beautiful to add : The Adventure Maker
TopProjects.push(new project("Wonderbox", "TBA", "img/wonderbox/hero.jpg", "https://playwonderbox.com/", "Wonderbox is an action-adventure maker where you can create, play, and share endless adventures. Coming soon to Apple Arcade", ["Unreal", "Mobile", "Professional"]));

TopProjects.push(new project("Star Botanist", "2019", "img/star-botanist/0.png", "https://www.behance.net/gallery/76301843/Star-Botanist", "An adventure through an alien and mysterious planet", ["Unity", "Mobile", "Professional"]));

TopProjects.push(new project("Bagaço", "2019", "img/bagaco/title.png", "https://lawendt.itch.io/bagaco", "Experimental game which uses photomontage (collage) and vignettes as a form of expressing feelings and outflow.", ["Unity", "Personal", "University"]));

TopProjects.push(new project("Funda Simulator", "2017", "img/FundaSimulator.png", "#!funda-simulator", "Feel the experience of shooting with a slingshot in VR. Best VR Game finalist on SBGames 2017.", ["Unity", "VR", "Game Design", "Professional"]));

TopProjects.push(new project("Cozy", "2019", "img/cozy/0.png", "https://twinravens.itch.io/cozy", "From fireplace to fireplace, you search for a home", ["Unity", "Jam"]));

TopProjects.push(new project("Angry Pucks", "2018", "img/angry-pucks_.png", "https://babyowlstudios.com/angry-pucks/", "Angry Pucks is a game about pucks that are angry and want you to PUCK OFF!", ["Unity", "Mobile", "Professional"]));   

TopProjects.push(new project("Sheppy The Dog", "2016", "img/sheppy.png", "https://play.google.com/store/apps/details?id=com.babyowl.sheppythedog", "Help a charismatic dog to herd the sheep back to the barn and enjoy your day at the farm.", ["Unity", "Mobile", "Professional"]));  

TopProjects.push(new project("Sheppy The Dog: Quest!", "2018", "img/sheppy-quest/0.png", "https://www.behance.net/gallery/70381037/Sheppy-the-Dog-Quest", "Help Sheppy guide the scattered sheep and complete quests to gain bones!", ["Unity", "Mobile", "Professional"]));   

TopProjects.push(new project("My Little Mjolnir", "2018", "img/my-little-mjolnir/0.png", "https://www.youtube.com/watch?v=9Eg3BZ2TX7w", " In his last fight, Thor loose his powers while it's surrounded by ice giants. To survive he must defeat them using only his magic hammer: Mjolnir.", ["Unity", "RV", "University"]));  




// All projects
Projects = [];
for(var i in TopProjects) {
    Projects.push(TopProjects[i]);
}

//TODO: add Laser

//TODO: add Game from animation project

Projects.push(new project("Atomic Rocket Arena", "2017", "img/rocketArena_.png", "https://play.google.com/store/apps/details?id=com.AtomicRocket.AtomicRocketArena&hl=pt_BR", "Multiplayer of spaceships which players use the same cellphone to battle each other.", ["Unity", "Mobile", "Professional"]));   


Projects.push(new project("Present Aliens", "2016", "img/present-aliens_.png", "https://lawendt.itch.io/present-aliens", "Be like a proper alien and build things for humans!", ["Javascript", "Jam", "University"])); 

Projects.push(new project("Simulacro - Sintagmas", "2017", "img/SimulacroSintagmas_.png", "https://www.behance.net/gallery/55304805/Simulacro-Sintagmas", "Educational game for iOS and Android with the objective of exercising 'sintagmas' in portuguese ", ["Unity", "Mobile", "Professional"]))


Projects.push(new project("Átomo - Ebook Reader", "2017", "img/atomo.png", "https://play.google.com/store/apps/details?id=com.AtomicRocket.Atomo", "Reader of customizable interactable ebooks", ["Unity", "Mobile", "Professional"]));

Projects.push(new project("Jampalooza", "2017", "img/Jampalooza_.png", "http://www.kongregate.com/games/NerdyOrcStudio/jampalooza", "Try to earn your life in a big musical festival.", ["Unity", "Jam"])); 

Projects.push(new project("Despeos", "2016", "img/despeos_.png", "https://lawendt.itch.io/despeos", "Puzzle-plataform where you can only move by using a hook.", ["Unity", "Game Design", "University"]));
                  
Projects.push(new project("Bocha Simulator", "2017", "img/BochaSimulator.png", "https://twinravens.itch.io/bocha-simulator", "Bocha Simulator is your new way of playing Bocha, now on your computer! Built to be played with a custom made controller, but can also be played without it.", ["Unity", "Arduino", "University"])); 

Projects.push(new project("2 Roll", "2015", "img/2Roll_.jpg", "https://lawendt.itch.io/2-roll", "2 Roll is about two separate souls faded to pass through doors wich are only opened by their eternal partner.", ["Unity", "Jam"]));

Projects.push(new project("Party Hats", "2017", "img/partyhats_.png", "https://twinravens.itch.io/party-hats", "Local multiplayer arcade where players fight each other to see which hat is the coolest.", ["Unity", "University"]));

Projects.push(new project("Element Cycle", "2018", "img/ElementCycle.png", "https://globalgamejam.org/2018/games/element-cycle", "Couch arena game about absorbing elements from the battleground and transmitting it to others players.", ["Unity", "Jam"]));

Projects.push(new project("Olympic S.S. Idol Festival", "2015", "img/OlympicSS_.jpg", "https://www.behance.net/gallery/27995525/Olympic-SS-Idol-Festival", "First game developed. A rythim game based on Love Live!", ["C++", "University"]));


AllTags = ["All", "Top"];

Projects.forEach(function(item,index){
	 AllTags = AllTags.concat(item.tags);
});

AllTags = AllTags.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
