import { Request,Response} from 'express'
import { Router } from 'express'
import { addQuote, getAllQuotes } from './quotesService';
import { validateQuote } from '../../middleware/validateMiddleware/quotevalidator';
import { CreateQuoteDto } from './Dtos/quoteDto';

const quoteRouter = Router();

quoteRouter.get('/' ,(req:Request, res:Response)=>{
  getAllQuotes();
   res.sendStatus(200);
});

quoteRouter.post('/',validateQuote,(req:Request, res:Response)=>{
 const body:CreateQuoteDto = req.body;
 res.send(addQuote(body));
} );

export default quoteRouter;