import store from "../store.js";
import Hero from "../Models/Hero.js";
import HeroesController from "../Controllers/HeroesController.js";

// @ts-ignore
let _api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100',
    timeout: 3000
})
// @ts-ignore
let _sandBoxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Kayden/heroes',
    timeout: 15000
})


class ValuesService {
    constructor() {
        this.getHeroes()
        this.getMyHeroes()
    }
    myHero(heroId) {
        let myHeroId = store.State.heroes.find(hero => hero.id == heroId)
        _sandBoxApi.post("", myHeroId).then(res => {

            this.getMyHeroes()
        })
    }


    deleteMyHero(heroId) {
        _sandBoxApi.delete("" + heroId).then(res => {
            this.getMyHeroes()
        })
    }
    getMyHeroes() {
        _sandBoxApi.get().then(res => {
            store.commit("myHeroes", res.data.data.map(rawMyHeroData => new Hero(rawMyHeroData)))
            this.getHeroes()
        })
    }



    getHeroes() {
        _api.get().then(res => {
            console.log(res);
            store.commit("heroes", res.data.data.results.map(rawHeroDate => new Hero(rawHeroDate))
            )
        }
        )
    }






}

const service = new ValuesService();
export default service;
