require("dotenv").config();
const app = require("./src/app");
const { sequelize } = require("./src/models");

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log("DB connected");

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});