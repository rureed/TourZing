var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isAlpha: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            msg: "Must be an email address"
        }
    },
    phone: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        unique: true,
        validate: {
            min: 10, 
            max: 10,
            isNumeric: true,
            msg: "Must be a phone number (xxx-xxx-xxxx)"
        }
    },
    creditcard: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true,
            isCreditCard: true,
            msg: "Enter a 16 digit credit card number"
        }
    },
    tourDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isNumeric: true,
          isDate: true,
          msg: "Input dates for your tour"
        }
    }
  });

  User.associate = function(models) {
    User.belongsTo(models.Guide, {
      foreignKey: {
        allowNull: false
      }
    });
    
    
  };
  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    
  });
  
  User.addHook("beforeCreate", function(user) {
      user.creditcard = bcrypt.hashSync(user.creditcard, bcrypt.genSaltSync(10), null);
  });
  
  return User;
};