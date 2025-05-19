import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    compeled: {
      type: Boolean,
      default: false,
    },

    createdAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    subTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
