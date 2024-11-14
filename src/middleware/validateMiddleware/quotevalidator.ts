import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Response, Request, NextFunction, RequestHandler } from "express";
import { CreateQuoteDto } from "../../routers/quotes/Dtos/quoteDto";

const validateQuote: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const quoteDto = plainToClass(CreateQuoteDto, req.body);

  try {
    const errors = await validate(quoteDto);

    if (errors.length > 0) {
      const formattedErrors = errors.map((error) => ({
        field: error.property,
        errors: Object.values(error.constraints || {}),
      }));
      res.status(400).json({ errors: formattedErrors });
    }

    next();
  } catch (err) {
    res
      .status(500)
      .json({ message: "Validation failed due to an internal error." });
  }
};
export { validateQuote };
