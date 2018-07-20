import { Profile } from "../../models/profile/profile.interface";
import { dateDataSortValue } from "ionic-angular/util/datetime-util";

const userList: Profile[] = [
    {firstName: 'Aditya',lastName: 'Chouhan',email: 'aditya.cs.ind@gmail.com',avatar: 'assets/imgs/PHOTO.jpg', DOB: new Date()},
    {firstName: 'Akash',lastName: 'Sharma',email: 'akash.cs.ind@gmail.com',avatar: 'assets/imgs/PHOTO.jpg', DOB: new Date()},
    {firstName: 'Prakhar',lastName: 'Chouhan',email: 'prakhar.cs.ind@gmail.com',avatar: 'assets/imgs/PHOTO.jpg', DOB: new Date()},
    {firstName: 'Harsh',lastName: 'Patel',email: 'harsh.cs.ind@gmail.com',avatar: 'assets/imgs/PHOTO.jpg', DOB: new Date()},
    {firstName: 'Ram',lastName: 'Chouhan',email: 'ram.cs.ind@gmail.com',avatar: 'assets/imgs/PHOTO.jpg', DOB: new Date() }, 
]

export const USER_LIST = userList;