import { CreateQuoteDto } from "./Dtos/quoteDto";
import QouteModle from "../../schema/quote";

const getAllQuotes = () => {
  console.log("get all Qouts");
};

const addQuote = (quote: CreateQuoteDto) => {
  QouteModle.create(quote)
    .then((quote) => {
      console.log(quote);
      return quote;
    })

    .catch((err) => {
      console.error(err);
    });
};
export { getAllQuotes, addQuote };
