const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

// Comment.init({
//     id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         autoIncrement: true,
//     },
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     contents: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'user',
//             key: 'id'
//         },
//     },
// }, {
//     post_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: 'post',
//             key: 'id'
//         },
//     },
// }, {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'comment',
// });

module.exports = Comment;
