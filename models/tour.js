var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var TourSet = sequelize.define("TourSet", {
    // The email cannot be null, and must be a proper email before creation
    guideFirstName: {
        type: DataTypes.STRING,
        allowNull: true,
        // unique: true,
        validate: {
            isAlpha: true
        }
    },
    guideLastName: {
      type: DataTypes.STRING,
      allowNull: true,
      // unique: true,
      validate: {
          isAlpha: true
      }
    },
    tourCity: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    creditcard: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isNumeric: true,
            isCreditCard: true,
            // msg: "Enter a 16 digit credit card number"
        }
    },
    tourDate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isNumeric: true,
          isDate: true,
          // msg: "Input dates for your tour"
        }
    },
    phone: {
        type: DataTypes.BIGINT, 
        allowNull: true,
        unique: true,
        validate: {
            min: 10, 
            max: 10,
            isNumeric: true,
            // msg: "Must be a phone number (xxx-xxx-xxxx)"
        }
    },
  });

  TourSet.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    TourSet.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    
 
  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  TourSet.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  TourSet.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    
  });
  
  TourSet.addHook("beforeCreate", function(user) {
      user.creditcard = bcrypt.hashSync(user.creditcard, bcrypt.genSaltSync(10), null);
  });
  
  return TourSet;
};