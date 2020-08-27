// module.exports = function (sequelize, Sequelize) {
//   var User = sequelize.define("users", {
//     id: {
//       autoIncrement: true,
//       primaryKey: true,
//       type: Sequelize.INTEGER,
//     },

//     name: {
//       type: Sequelize.STRING,
//       notEmpty: true,
//     },

//     email: {
//       type: Sequelize.STRING,
//       validate: {
//         isEmail: true,
//       },
//     },

//     password: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },

//     status: {
//       type: Sequelize.ENUM("active", "inactive"),
//       defaultValue: "active",
//     },
//   });

//   return User;
// };
