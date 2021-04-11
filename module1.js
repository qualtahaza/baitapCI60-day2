export class Meme {
    id;
    name;
    image;
    dateModified;
    constructor(id, name, image, dateModified) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = dateModified;
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
        <div class="image">
            Image : <img src="${this.image}" alt="">
        </div>
        <div class="date">
            Date : ${this.dateModified}
        </div>
        <hr>
        
        </div>`


    }
    update(data) {

        this.id = data.id;

        this.name = data.name;
        this.image = data.image;
        this.dateModified = data.dateModified;
    }
}