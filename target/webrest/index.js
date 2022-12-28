import {UserService} from './modules/UserService.js'

const userService = new UserService("https://jsonplaceholder.typicode.com/todos/");
userService.fetchAll();


//import {User} from './modules/User.js';


/*
const users = new Array();
users.push(new User("1","Paul","Joel","admin"));
users.push(new User("2","Samuel","Angel","saler"));

console.log(users[0].getName());


 */