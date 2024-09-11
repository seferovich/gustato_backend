import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  image: {
    type: String
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});


const menuSchema = new mongoose.Schema({
  burgers: [menuItemSchema],
  sides: [menuItemSchema],
  drinks: [menuItemSchema]
});


const Menu = mongoose.model('Menu', menuSchema);

export default Menu