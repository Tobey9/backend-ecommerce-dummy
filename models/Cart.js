module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });

    Cart.hasMany(models.CartItem, {
      foreignKey: "cartId",
      onDelete: "CASCADE",
    });
  };

  return Cart;
};
