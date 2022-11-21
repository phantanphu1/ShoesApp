const express = require("express");
const route = express.Router();
const app = express();
//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

const OrderController=require("../controllers/order");
const { orderValidation } = require("../helpers/orderValidation");
route.post("/orders/create",orderValidation,OrderController.createOrder);
route.get("/order/getAllOrder", OrderController.getAllOrder);
route.get("/order/getAllOrderById/:orderId", OrderController.getOrderById);
route.delete("/order/deleteOrderById/:orderId", OrderController.deleteOrderById);
route.patch("/order/updateOrder/:orderId", OrderController.updateOrder);

// app.use(cors({ origin: '*', credentials: true }))
app.use(allowCrossDomain);



module.exports = route;
