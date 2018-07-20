import { Profile } from "../../models/profile/profile.interface";
import { Message } from "../../models/messages/message.interface";
import { USER_LIST } from "../profile/profile";

// const userList: User[] = [
//     {firstName: 'Aditya',lastName: 'Chouhan',email: 'aditya.cs.ind@gmail.com',avatar: 'assets/imgs/PHOTO.jpg'},
//     {firstName: 'Akash',lastName: 'Sharma',email: 'akash.cs.ind@gmail.com',avatar: ''},
//     {firstName: 'Prakhar',lastName: 'Chouhan',email: 'prakhar.cs.ind@gmail.com',avatar: ''},
//     {firstName: 'Harsh',lastName: 'Patel',email: 'harsh.cs.ind@gmail.com',avatar: ''},
//     {firstName: 'Ram',lastName: 'Chouhan',email: 'ram.cs.ind@gmail.com',avatar: ''}, 
// ]
const userList = USER_LIST;
const messageList: Message[] = []  ;

userList.forEach(user => {
    messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
})

// const messageList: Message[] = [
//     { user: userList[0], date: new Date()},
//     { user: userList[1], date: new Date()},
//     { user: userList[2], date: new Date()},
//     { user: userList[3], date: new Date()},
//     { user: userList[4], date: new Date()},
// ]

export const MESSAGE_LIST = messageList;