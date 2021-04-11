// import { MemeCollection, } from "./module2.js";
import { Meme } from "./module1.js";
let Meme1 = new Meme(1, "troll", "./troll.png", "13/02/1995")
let Meme2 = new Meme(2, "thuglife", "./thug_life.png", "13/02/2021")

Meme2.update({ id: 3, name: "laught", image: "./troll.png", dateModified: "13/3/2020" });
Meme1.show();
Meme2.show();