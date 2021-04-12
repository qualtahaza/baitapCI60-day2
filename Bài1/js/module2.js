import { Meme } from "./module1.js";

export class MemeCollection {
    id;
    name;
    owner;
    memes;
    constructor(id, name, owner, memes) {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.memes = memes;
    }
    add(meme) {

        if (meme instanceof Meme) {
            this.memes.push(meme);
            console.log(this.memes);
        } else {
            console.log("wrong meme");
        }

    }
    update(id, data) {

        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes[i].name = data.name;
                this.memes[i].image = data.image;
                this.memes[i].dateModified = data.dateModified;


            } else {
                continue;
            }
        }
    }
    delete(id) {
        for (let i = 0; i < this.memes.length; i++) {
            if (this.memes[i].id == id) {
                this.memes.splice(i, 1);
            } else {
                console.log("remove wrong id");
            }
        }
    }
    show() {
        let meme = document.getElementById("container")
        meme.innerHTML = meme.innerHTML +
            `<div id ="meme">
            <div class="id">
            ID : ${this.id}
        </div>
        <div class="name">
            Name : ${this.name}
        </div>
        <div class="owner">
            Owner : ${this.owner}
        </div>
        <div class="listmeme">
            List Meme :ID:${this.memes[0].id}, Tên: ${this.memes[0].name},Image:<img src="${this.memes[0].image}">,DateModified:${this.memes[0].dateModified}
            <br>
            List Meme :ID:${this.memes[1].id}, Tên: ${this.memes[1].name},Image:<img src="${this.memes[1].image}">,DateModified:${this.memes[1].dateModified}
        </div>
        <hr>
        
        </div>`
    }
}


//*add 2 meme vào mảng memes trong MemeCollection_1

let meme1 = new Meme(1, "troll", "/Bài1/img/troll.png", "13/3/2111");
let meme2 = new Meme(2, "thuglife", "/Bài1/img/thug_life.png", "13/3/2111");
let MemeCollection_1 = new MemeCollection(1, "tuyen tap Meme", "by TienAnh", [])
MemeCollection_1.add(meme1)
MemeCollection_1.add(meme2)
console.log(MemeCollection_1);


//* update thông tin meme trong mảng memes của MemeCollection_1 theo thông tin id của meme đó lấy từ class Meme , object mới sẽ thay thế cho meme1 trong mảng memes

// MemeCollection_1.update(1, { name: "test", image: "./troll.png", dateModified: "13/7/2012" })
// console.log(MemeCollection_1);

// -------------------------------------------------

//* remove 1 meme theo id trong mảng memes,xóa

// MemeCollection_1.delete(1);
// console.log(MemeCollection_1);

// --------------------------------------------------------

//*show ra màn hình html các thong tin của meme trong mảng memes của 1 MemeCollection 

MemeCollection_1.show();