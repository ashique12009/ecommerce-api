"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "iPhone 15",
        price: 1200,
        category: "Mobile",
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samsung S24",
        price: 1000,
        category: "Mobile",
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Google Pixel 8",
        price: 800,
        category: "Mobile",
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "OnePlus 12",
        price: 700,
        category: "Mobile",
        stock: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xiaomi 13",
        price: 600,
        category: "Mobile",
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
