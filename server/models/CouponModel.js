const { Schema, model } = require("mongoose");
const CouponSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your coupon code name!"],
      unique: true,
    },
    value: {
      type: Number,
      required: true,
    },
    minAmount: {
      type: Number,
    },
    maxAmount: {
      type: Number,
    },
    shop: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CouponModel = model("Coupon", CouponSchema);

module.exports = CouponModel;
