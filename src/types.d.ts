export interface IQuote {
  author: string,
  category: string,
  text: string,
}

export interface IQuotes {
  id: string;
  author: string;
  category: string;
  text: string,
}

export interface IQuotesApi {
  [id: string]: IQuotes;
}
