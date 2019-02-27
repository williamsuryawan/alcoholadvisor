'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail : true,
        isUnique: function(theEmail, next) {
          let self = this;
          User
          .findOne({
            where: {
              email: theEmail
            }
          })
          .then(function(user) {
            if (user && self.id != user.id) {
              return next("Email has been used");
            }
            return next();
          })
          .catch(function(err) {
            return next(err)
          })
        }
      }
    },
    password: DataTypes.STRING,
    AlkoholId: DataTypes.INTEGER
  }, {timestamps: false});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};