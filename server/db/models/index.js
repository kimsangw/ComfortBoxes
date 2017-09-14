const BoxItem = require('./boxItem')
const Category = require('./category')
const Order = require('./order')
const Product = require('./product')
const Review = require('./review')
const User = require('./user')
/**
 * Associations
 */

Review.belongsTo(User, {foreignKey: 'user_id'});
User.hasMany(Review, {foreignKey: 'user_id'});

Review.belongsTo(Product, {foreignKey: 'product_id'});
Product.hasMany(Review, {foreignKey: 'product_id'});

Order.belongsTo(User, {foreignKey: 'user_id'});
User.hasMany(Order, {foreignKey: 'user_id'});

BoxItem.belongsTo(Product, {foreignKey: 'product_id'});
Product.hasMany(BoxItem, {foreignKey: 'product_id'});

BoxItem.belongsTo(Order, {foreignKey: 'order_id'});
Order.hasMany(BoxItem, {foreignKey: 'order_id'});


Category.belongsToMany(Product, {through: 'product_category', foreignKey: 'product_id'});
Product.belongsToMany(Category, {through: 'product_category', foreignKey: 'category_id'});

/**
 * We're exporting all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User, Review, Product, Order, Category, BoxItem
}
