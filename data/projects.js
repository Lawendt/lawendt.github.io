function project(name, date, img, url, description, tags) {
    this.name = name;
     this.date = date;
    this.img = img;
    this.description = description;
    this.url = url;
    this.tags = tags;
   
}

Projects = [];

Projects.push(new project("Despeos", "WIP", "img/despeos_.png", "https://lawendt.itch.io/despeos", "Puzzle-plataform where you can only move by using a hook.", ["Unity", "Game Design", "C#"]));

Projects.push(new project("Party Hats", "WIP", "img/partyhats_.png", "https://twinravens.itch.io/party-hats", "Local multiplayer arcade where players fight each other to see which hat is the coolest.", ["Unity", "Game Design", "C#"]));

Projects.push(new project("2 Roll", "2015", "img/2Roll_.jpg", "https://lawendt.itch.io/2-roll", "2 Roll is about two separate souls faded to pass through doors wich are only opened by their eternal partner.", ["Unity", "Game Design", "C#", "Jam"]));

Projects.push(new project("Jampalooza", "2017", "img/Jampalooza_.png", "http://www.kongregate.com/games/NerdyOrcStudio/jampalooza", "Try to earn your life in a big musical festival.", ["Unity", "Game Design", "C#", "Jam"]));                   
      
Projects.push(new project("Atomic Rocket Arena", "2017", "img/rocketArena_.png", "https://play.google.com/store/apps/details?id=com.AtomicRocket.AtomicRocketArena&hl=pt_BR", "Multiplayer of spaceships which players use the same cellphone to battle each other.", ["Unity", "C#", "Client Work"]));   
                
Projects.push(new project("Present Aliens", "2016", "img/present-aliens_.png", "https://lawendt.itch.io/present-aliens", "Be like a proper alien and build things for humans!", ["Javascript", "Jam"]));   
