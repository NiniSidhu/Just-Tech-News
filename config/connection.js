// Import the Sequelize constructor from the library 
const Sequelize = require('sequelize');

// Create connection to out databases, pass in your MySql information for Username and Password 
const sequelize =  new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize; 