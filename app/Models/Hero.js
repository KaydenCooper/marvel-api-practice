export default class Hero {
    constructor(data) {
        this.id = data.id || data._id
        this.name = data.name
        this.img = data.img || data.thumbnail.path + "." + data.thumbnail.extension
        this.description = data.description || "Undefined"
        this.user = data.user

    }

    get Template() {
        return ` <div class="card bg-secondary text-light shadow-lg text-capitalize m-2 p-3">
        <h2><u><b>HEROES</b></u></h2>
                    <img class="img-fluid" src=" ${this.img}" alt="">

                     <h3><u>Name:</u><br> ${this.name}</h3>

                    <h3><u>Description:</u><br> ${this.description}</h3>

                    <h3><u>User:</u><br> ${this.user}</h3>

                    <button class="btn btn-primary" onclick="app.HeroesController.myHero('${this.id}')">Add Hero</button>
            </div>`
    }

    get HeroTemplate() {
        return ` <div class="card bg-secondary text-light shadow-lg text-capitalize m-2 p-3">
        <h2><u><b>MY HEROES</b></u></h2>
                    <img class="img-fluid" src=" ${this.img}" alt="">

                     <h3><u>Name:</u><br> ${this.name}</h3>

                    <h3><u>Description:</u><br> ${this.description}</h3>

                    <h3><u>User:</u><br> ${this.user}</h3>

                    <button class="btn btn-danger" onclick="app.HeroesController.deleteMyHero('${this.id}')">Delete Hero</button>
            </div>`
    }

}