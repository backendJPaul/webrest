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

        var request = new XMLHttpRequest();
        request.open('GET', 'https://dfaa-2800-200-eb60-1be9-50d2-27bb-efb8-d798.ngrok.io/user', true);

        request.send();

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var respuesta = request.responseText;
                console.log(respuesta);
            } else {
                console.error('Error al obtener los recursos');
            }
        }
    }
}
