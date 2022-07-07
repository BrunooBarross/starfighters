import axios from "axios"
import userRepository from "../repositories/userRepository.js"

async function getUserData(user: String){
    const url = `http://api.github.com/users/${user}/repos`;
    try {
        const { data } = await axios.get(url);
        const existingUser = await userRepository.selectUserByName(user);
        if(existingUser.rowCount === 0){
            console.log("entrei aqui com o " + user)
            await userRepository.insertUser(user);
        }
        return data;
    } catch (error) {
        throw { type: 'not_Found', message: `User ${user} Not Found`}
    }
}

function battleUserStar(user1: any, user2: any){
    let resultUser1: Number = 0;
    let resultUser2: Number = 0;

    user1.forEach(element => {
       resultUser1 = resultUser1 + element.stargazers_count;
    }); 
    user2.forEach(element => {
        resultUser2 = resultUser2 + element.stargazers_count;
     }); 

    if(resultUser1 === resultUser2){
        return {"winner": null, "loser": null, "draw": true}
    }

    if(resultUser1 > resultUser2){
        return {"winner": user1[0].owner.login, "loser": user2[0].owner.login, "draw": true}
    }

    return {"winner": user2[0].owner.login, "loser": user1[0].owner.login, "draw": true}

}

const userServices = {
    getUserData,
    battleUserStar
}

export default userServices;