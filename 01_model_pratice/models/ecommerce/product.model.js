import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    productImage: {
      type: String,
    },

    amount: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
