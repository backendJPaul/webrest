import {UserService} from './modules/UserService.js'

const userService = new UserService("https://dfaa-2800-200-eb60-1be9-50d2-27bb-efb8-d798.ngrok.io/user");
userService.fetchAll();


//import {User} from './modules/User.js';


/*
const users = new Array();
users.push(new User("1","Paul","Joel","admin"));
users.push(new User("2","Samuel","Angel","saler"));

console.log(users[0].getName());


 */