import {plainToClass} from 'class-transformer'
import { validate } from 'class-validator'
import { Response, Request, NextFunction } from 'express'
import { CreateQuoteDto } from '../../routers/quotes/Dtos/quoteDto';


const validateQuote = (req:Request, res:Response, next:NextFunction) =>{

  const quoteDto = plainToClass(CreateQuoteDto,req.body);

  validate(quoteDto).then((errors)=>{
    if (errors.length>0){
      const formattedErrors = errors.map((error)=>({
        field:error.property,
        errors: Object.values(error.constraints||{}),
    }));
    return res.status(400).json({errors:formattedErrors});
    }
    else
    {
      next();
    }
  });
}

 export {
  validateQuote
}