import { Meme } from "./module1.js";

export class MemeCollection extends Meme {

    owner;
    memes = [];
    constructor(id, name, image, dateModified, owner, memes) {
        super(id, name, image, dateModified);
        this.owner = owner;
        this.memes = memes;
    }
    add(meme) {
        if (meme instanceof Meme) {
            this.memes.push(meme);
            console.log(memes);

        } else {
            console.log("wrong meme");
        }
    }
    update(id, data) {

    }
    delete(id) {

    }
    show() {
        console.log("my" + this.id);
    }
}

let meme1 = new MemeCollection(1, "troll", "./troll.png", "13/3/2111", "tienanh")
console.log(meme1);
meme1.add()