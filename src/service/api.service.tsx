
import {IUserResponce} from "../models/IUserResponce.ts";

const URL = 'https://dummyjson.com';

export const getUsers = async (page:string):Promise<IUserResponce> => {
  const limit= 30;
  const skip = limit*(+page)-limit; //explanation on video 'react hw 4 task 1 resolve mtNy6QQ'

   return  await fetch(URL+'/users'+'?skip='+skip)
      .then(res => res.json())

}
