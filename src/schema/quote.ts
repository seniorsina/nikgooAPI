import mongoose from "mongoose";
const quoteSchema = new mongoose.Schema({
  QuoteText: String,
  AuthorID: Number,
  lang: {
    type: String,
    default: "Fa",
  },
  UserID: String,
  CategoryID: String,
});

const QouteModle = mongoose.model("quote", quoteSchema);
export default QouteModle;
