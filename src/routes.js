const express = require('express');
const router = express.Router();
const connection = require('./db')

function calculateDistance (lat1, lon1, lat2, lon2) {
    const toRadians = (degrees) => degrees * Math.PI / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *          //Haversine formula----
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;                                                        
}                                            

router.post('/addSchool',(req,res) => {
    const {name, address , latitude, longitude} = req.body;
    if(!name || !address || !latitude || !longitude){
        return res.status(400).json("All Fields are required!!!")
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, address, latitude, longitude], (err) => {
        if(err){
            return res.status(500).json({error: "Error adding School"});
        }
        res.status(201).json({message: "School added Successfully"});
    });
});

router.get('/listSchools', (req,res) =>{
    const {latitude, longitude} = req.body;
    if(!latitude || !longitude){
        return res.status(400).json("Latitude & Longitude are required!!")
    }

    const query = 'SELECT * FROM schools';
    connection.query(query, (err,results) => {
        if(err){
            res.status(500).json({error: "Error retrieving Schools. " })
        }
        results.forEach(school => {
            school.distance = calculateDistance(parseFloat(latitude), parseFloat(longitude), school.latitude, school.longitude);
        });
        results.sort((a, b) => a.distance - b.distance);
        res.json(results);
    });
});

module.exports = router;