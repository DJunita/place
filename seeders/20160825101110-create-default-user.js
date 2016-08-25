'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            email: 'admin@example.com',
            password: 'adminadmin',
            createdAt: '2016-08-25',
            updatedAt: '2016-08-25'
        }], {});
    },

    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};
