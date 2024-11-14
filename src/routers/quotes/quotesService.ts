import { CreateQuoteDto } from "./Dtos/quoteDto";
import QuoteModel, { Quote } from "../../schema/quote";
import mongoose from "mongoose";
import ApiResponse from "../../class/CustomeResponse";

class QuoteService {
  static getAllQuotes = async (): Promise<ApiResponse> => {
    const quotes = await QuoteModel.find();
    return ApiResponse.success("", [quotes]);
  };

  static getQuote = async (
    id: mongoose.Types.ObjectId
  ): Promise<Quote | null> => {
    const quote = QuoteModel.findById(id);
    return quote;
  };

  static addQuote = async (quote: CreateQuoteDto): Promise<ApiResponse> => {
    const newQuote = await QuoteModel.create(quote);
    return ApiResponse.success("new code created successfully", newQuote);
  };

  static RemoveQuote = async (id: String): Promise<ApiResponse> => {
    const deleteQuote = await QuoteModel.findByIdAndDelete(id);
    if (!deleteQuote) {
      return ApiResponse.fail("Quote not found");
    }

    return ApiResponse.success("successfuly delete", deleteQuote);
  };
}

export default QuoteService;
