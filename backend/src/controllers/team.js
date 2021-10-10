const Team = require('../models/team');

async function getAllStaff(req,res){
    const page = req.query;
    const team = await Team.getAllStaff(page);
    return res.status(201).json(team);
}

module.exports = {getAllStaff};