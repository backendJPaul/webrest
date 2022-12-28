import {User} from './User.js'

export class UserService{
    #usersArray = new Array();
    #url;
    constructor(url){
        this.#url = url;
        console.log(this.#url);
        this.init();
    }

    init(){
        this.#usersArray.push(new User("1","pticlavilca","root","admin"));
        this.#usersArray.push(new User("1","Joel","root","admin"));
        this.#usersArray.push(new User("2","Samuel","root","admin"));
        this.#usersArray.push(new User("3","Elisa","root","admin"));
        this.#usersArray.push(new User("4","Mary","root","admin"));
        this.#usersArray.push(new User("5","Jhon","root","admin"));
        this.#usersArray.push(new User("6","Eli","root","admin"));
        this.#usersArray.push(new User("7","Maria","root","admin"));
        this.#usersArray.push(new User("8","Anabel","root","admin"));
    }

    fetchAll(){
        fetch(this.#url)
            .then(response => response.json())
            .then(data => console.log(data));
/*
        console.log(this.#usersArray);
        console.log(this.#usersArray[3].getName());

 */
    }
}
