"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("123456", 10);

    await queryInterface.bulkInsert("Users", [
      {
        name: "Admin User",
        email: "admin@example.com",
        password: hashedPassword,
        type: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Customer One",
        email: "customer1@example.com",
        password: hashedPassword,
        type: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Customer Two",
        email: "customer2@example.com",
        password: hashedPassword,
        type: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};