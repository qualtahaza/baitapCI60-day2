import { Meme } from "/Bài1/js/module1.js";
let Meme1 = new Meme(1, "troll", "/Bài1/img/troll.png", "13/02/1995")
let Meme2 = new Meme(2, "thuglife", "/Bài1/img/thug_life.png", "13/02/2021")

Meme2.update({ id: 3, name: "laught", image: "/Bài1/img/thug_life.png", dateModified: "13/3/2020" });
Meme1.show();
Meme2.show();