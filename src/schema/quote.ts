import mongoose from "mongoose";

import { Document } from "mongoose";

export interface Quote extends Document {
  QuoteText: string;
  AuthorID: number;
  lang: string;
  UserID: string;
  CategoryID: string;
}

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

const QuoteModel = mongoose.model<Quote>("quote", quoteSchema);
export default QuoteModel;
