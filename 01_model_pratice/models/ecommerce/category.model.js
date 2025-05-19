import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({}, { timestamps: true });

export const Category = mongoose.model("Category", CategorySchema);
