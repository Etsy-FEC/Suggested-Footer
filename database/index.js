const { database_password } = require('../config.js');

const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : `${database_password}`,
  database : 'etsy_suggested'
});
 
db.connect();

const getImagesFromDb = (imageId, callback) => {
  db.query(`SELECT imageURL, title, company_name, price FROM listings WHERE category = (SELECT category FROM listings WHERE listing_id = '${imageId}');`, function(error, result) {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  })
}


module.exports = { 
  db,
  getImagesFromDb
};


