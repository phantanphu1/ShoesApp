const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartsSchema = new Schema(
  {
    productId: {
      type: String,
      require: true,
    },
    productName: {
      type: String,
      require: true,
    },
    productBrand: {
      type: String,
      require: true,
    },

    userId: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: false,
    },

    images: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const Carts = mongoose.model("Carts", cartsSchema);
module.exports = Carts;
