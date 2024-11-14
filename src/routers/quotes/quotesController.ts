import { NextFunction, Request, Response } from "express";
import { Router } from "express";
import QuoteService from "./quotesService";
import { validateQuote } from "../../middleware/validateMiddleware/quotevalidator";
import { CreateQuoteDto } from "./Dtos/quoteDto";
import mongoose from "mongoose";

const quoteRouter = Router();

quoteRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const quotes = await QuoteService.getAllQuotes();
      res.status(quotes.statusCode).send(quotes);
    } catch (error) {
      next(error);
    }
  }
);

quoteRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const objectId = new mongoose.Types.ObjectId(id);
      const quote = await QuoteService.getQuote(objectId);
      if (!quote) {
        res.status(400).json({ message: "Quote not found" });
      } else res.status(200).send(quote);
    } catch (err) {
      next(err);
    }
  }
);

quoteRouter.post("/", validateQuote, async (req: Request, res: Response) => {
  const body: CreateQuoteDto = req.body;
  res.send(QuoteService.addQuote(body));
});

quoteRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const delResult = await QuoteService.RemoveQuote(req.params.id);
      res.status(delResult.statusCode).send(delResult);
    } catch (error) {
      next(error);
    }
  }
);

export default quoteRouter;
