const Orders = require("../models/orders");
const Products = require("../models/products");
const Users = require("../models/users");
const {errorFunction} = require("../utils/errorFunction");
const createOrder = async (req, res, next) => {
  try {
    const productId = await Products.findById(req.body.productId);
    const userId = await Users.findById(req.body.userId);
    if (!productId) {
      return res.json(
        errorFunction(true, 204, "This product Id have not in the database")
      );
    }
    if (!userId) {
      return res.json(
        errorFunction(true, 204, "This user Id have not in the database")
      );
    }
    const newOrder = await Orders.create(req.body);

    if (newOrder) { 
      return res
        .status(201)
        .json(errorFunction(false, 201, "Order Created", newOrder));
    } else {
      return res.status(403).json(errorFunction(true, "Error Creating Order"));
    }
  } catch (error) {
    console.log("ERRORS:", error);
    return res.status(403).json(errorFunction(true, "Error Creating Order"));
  }
};
const getAllOrder = async (req, res, next) => {
  try {
    const {
      pageSize = 12,
      pageNumber = 1,
      totalOrders = "",
      productName = "",
      productBrand = "",
      orderByColumn,
      orderByDirection = "desc",
      orderStatus,
      type = "",
    } = req.query;
    const filter = {
      $and: [
        {
          productName: {
            $regex: productName,
            $options: "$i",
          },
        },
        {
          productBrand: {
            $regex: productBrand,
            $options: "$i",
          },
        },
        {
          type: {
            $regex: type,
            $options: "$i",
          },
        },
        // {
        //   orderStatus:{
        //     $regex: orderStatus,
        //     $options: "$i",
        //   }
        // }
      ],
    };
    const filterOrder = await Orders.find(filter)
      .sort(`${orderByDirection === "asc" ? "" : "_"}${orderByColumn}`)
      .limit(pageSize * 1)
      .skip((pageNumber - 1) * pageSize);

    const allOrders = await Orders.find(filter);
    let totalPage = 0;
    if (allOrders.length % pageSize === 0) {
      totalPage = allOrders.length / pageSize;
    } else {
      totalPage = parseInt(allOrders.length / pageSize) + 1;
    }

    if (Orders.length > 0) {
      res.status(200).json({
        totalPage: totalPage,
        totalOrders: allOrders.length,
        orders:
          orderByDirection && orderByColumn ? filterOrder : filterOrder.reverse(),
        // reverse: thêm vào đầu
      });
    } else {
      res.status(200).json({
        message: "no results",
      });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({
      message: "Bad request",
    });
  }
};

const getOrderById = async (req, res, next) => {
  const orderId = req.params.orderId;
  try {
    const order = await Orders.findById(orderId);
    if (order) {
      res.status(200).json({
        statuscode: 200,
        order,
      });
    } else {
      res.json({
        statuscode: 204,
        message: "this product Id is have not in the database",
        order: {},
      });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({
      statuscode: 400,
      message: "Bad request",
    });
  }
};

const deleteOrderById = async (req, res, next) => {
  const orderId = req.params.orderId;
  try {
    const order = await Orders.findByIdAndRemove(orderId);
    if (order) {
      res.status(200).json({
        statuscode: 200,
        message: "Delete product successfully",
      });
    } else {
      res.json({
        statuscode: 204,
        message: "this product Id is have not in the database",
      });
    }
  } catch (error) {
    console.log("error: ", error);
    res.status(400).json({
      statuscode: 400,
      message: "Bad request",
    });
  }
};

const updateOrder = (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const isBodyEmpTy = Object.keys(req.body).length;
    if (isBodyEmpTy === 0) {
      return res.send({
        statuscode: 403,
        message: "Body request can not emty.",
      });
    }
    Orders.findByIdAndUpdate(orderId, req.body).then((data) => {
      if (data) {
        res.status(200).json({
          statuscode: 200,
          message: "Update product successfully",
        });
      } else {
        res.json({
          statuscode: 204,
          message: "This product Id is have not in the database ",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      statuscode: 400,
      message: "Bad request",
    });
  }
};
module.exports = {
  createOrder,
  getAllOrder,
  getOrderById,
  deleteOrderById,
  updateOrder,
};
