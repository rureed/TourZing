var bcrypt = require("bcryptjs");
// Creating our TourGuide model
module.exports = function(sequelize, DataTypes) {
  var Guide = sequelize.define("Guide", {
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
    country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            msg: "Must be a country"
        }
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            msg: "Must be a city"
        }
    },
    tour: {
        type: DateTypes.STRING,
        allowNull: true,
        validate: {
            isAlpha: true,
            msg: "Describe your expertise"
        }
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,

        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1, 
            max: 5,
            isNumeric: true
        }
    }
  });

  Guide.associate = function(models) {
        Guide.hasMany(models.User, {
        onDelete: "cascade"
        });
    };

  // Creating a custom method for our Guide model. This will check if an unhashed password entered by the Guide can be compared to the hashed password stored in our database
  Guide.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  // Hooks are automatic methods that run during various phases of the Guide Model lifecycle
  // In this case, before a Guide is created, we will automatically hash their password
  Guide.addHook("beforeCreate", function(guide) {
    guide.password = bcrypt.hashSync(guide.password, bcrypt.genSaltSync(10), null);
  });
  
  return Guide;
};