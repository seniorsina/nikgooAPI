import { Request, Response } from "express";
import { Router } from "express";
import { addQuote, getAllQuotes } from "./quotesService";
import { validateQuote } from "../../middleware/validateMiddleware/quotevalidator";
import { CreateQuoteDto } from "./Dtos/quoteDto";

const quoteRouter = Router();

quoteRouter.get("/", async(req: Request, res: Response) => {
  try {
    const quotes = await getAllQuotes();
    res.status(200).send(quotes);
  } catch (err) {
    console.error("Error fetching quotes", err);
    res.status(500).send("Internal server error");
  }
});

quoteRouter.post("/", validateQuote, async (req: Request, res: Response) => {
  const body: CreateQuoteDto = req.body;
  res.send(addQuote(body));
});

export default quoteRouter;
