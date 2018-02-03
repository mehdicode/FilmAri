module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1],
            unique: true
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        salt: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        name: {
            type: DataTypes.TEXT,
            len: [1]
        },
        photo_url: {
            type: DataTypes.TEXT,
            len: [1]
        },
        photo_publicid: {
            type: DataTypes.TEXT,
            len: [1]
        },
        age: {
            type: DataTypes.INTEGER,
            len: [1]
        },
        zipcode: {
            type: DataTypes.INTEGER,
            len: [1]
        },
        description: {
            type: DataTypes.TEXT,
            len: [10]

        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        }


    });

    User.associate = function(models) {
        User.hasMany(models.Match, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return User;
};