const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "postgres",
    "tushar55",
    "abcd",
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection established with DB');
    }
    catch (err) {
        console.error('Unable to connect with DB');
    }
})();

module.exports = sequelize;