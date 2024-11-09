import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
} from "class-validator";

class CreateQuoteDto {
  @IsDefined()
  @IsNotEmpty({ message: "Quote text can not be empty" })
  QuoteText: string;
  AuthorID: number;
  lang: string;
  UserID: string;
  CategoryID: string;
}

export { CreateQuoteDto };
