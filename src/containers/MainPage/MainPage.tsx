import * as React from 'react';
import Categories from '../../components/Categories/Categories.tsx';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IQuotes, IQuotesApi } from '../../types';
import QuoteItem from '../../components/QuoteItem/QuoteItem.tsx';
import Loader from '../../components/UI/Loader.tsx';


const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [quotes, setQuotes] = useState<IQuotes[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axiosApi.get<IQuotesApi>('quotes.json');

      if(response.data) {
        const quotesFromApi = Object.keys(response.data).map(quoteKey => {
          return {
            id: quoteKey,
            ...response.data[quoteKey],
          }
        });
        setQuotes(quotesFromApi);
      }
    } catch (e){
      console.log(e);
    } finally {
      setLoading(false);
    }

  }, []);

  const deleteQuote = async (id: string) => {
    try {
      await axiosApi.delete(`quotes/${id}.json`);
      setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      <Categories/>
      {loading ? (
        <Loader/>
      ) : quotes.length === 0 ? (
        <p className="text-center m-5">No posts :(</p>
      ) : (
        <>
          {quotes.map((quote) => (
            <div key={quote.id} className="m-3">
              <QuoteItem quote={quote} onDelete={deleteQuote} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MainPage;