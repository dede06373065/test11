const axios = require('axios');
const api = 'https://randomuser.me/api/?page=8&results=20&seed=abc'
let team = [];

async function getRandomStaff(){
    let staff = {};
    team = [];
    await axios.get(api).then((response)=>{
        staff = response.data.results;
    }).catch((error)=>{
        return error
    })
    return staff;
}

async function getAllStaff(page){
    const staff = await getRandomStaff();
    let start = (page.current - 1) * page.size
    let end = page.current * page.size
    let list = staff.slice(start, end);
    team.push(list);
    return team;
}

module.exports = { getAllStaff }