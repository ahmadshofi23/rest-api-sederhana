'use strict';

const { STRING } = require("sequelize");
const { INTEGER, DATE } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('activity', {
        id:{
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        activityType:{
          type: STRING,
        },
        institution:{
          type: STRING,
        },
        when:{
          type: DATE,
        },
        objective:{
          type: STRING,
        },
        remarks:{
          type:STRING,
        },
        createdAt:{
          type: DATE,
        },
        updatedAt:{
          type: DATE,
        },
      }); 
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('activity');

  }
};
