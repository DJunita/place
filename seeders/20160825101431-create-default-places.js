'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('places', [{
            name: 'John Doe',
            address: 'BEC',
            description: 'BEC',
            longitude: 'BEC',
            latitude: 'BEC',
            createdAt: '2016-08-26',
            updatedAt: '2016-08-26'
        }, {
            name: 'Miata',
            address: 'BIP',
            description: 'Mall',
            longitude: '3',
            latitude: '4',
            createdAt: '2016-08-26',
            updatedAt: '2016-08-26'
        }], {});
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('places', null, {});
    }
};
