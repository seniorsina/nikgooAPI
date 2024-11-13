import { CreateQuoteDto } from "./Dtos/quoteDto";
import QouteModle from "../../schema/quote";

const getAllQuotes = async () => {
  const quotes = await QouteModle.find();
  return quotes;
};

const addQuote = async (quote: CreateQuoteDto) => {
  try {
    const newQuote = await QouteModle.create(quote);
    console.log(newQuote);
    return newQuote;
  } catch (err) {
    console.error("Error creating quote", err);
  }
};
export { getAllQuotes, addQuote };
