import * as React from 'react';
import Categories from '../../components/Categories/Categories.tsx';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosAPI.ts';
import { IQuotes, IQuotesApi } from '../../types';
import QuoteItem from '../../components/QuoteItem/QuoteItem.tsx';
import Loader from '../../components/UI/Loader.tsx';
import { useLocation } from 'react-router-dom';

const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [quotes, setQuotes] = useState<IQuotes[]>([]);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const categoryId = params.get('category');

  const fetchData = useCallback(async (categoryId?: string) => {
    setLoading(true);

    try {
      const categoryParam = categoryId ? `?orderBy="category"&equalTo="${categoryId}"` : '';
      const response = await axiosApi.get<IQuotesApi>(`quotes.json${categoryParam}`);

      if (response.data) {
        const quotesFromApi = Object.keys(response.data).map(quoteKey => ({
          id: quoteKey,
          ...response.data[quoteKey],
        }));
        setQuotes(quotesFromApi);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteQuote = async (id: string) => {
    try {
      await axiosApi.delete(`quotes/${id}.json`);
      setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void fetchData(categoryId ?? undefined);
  }, [search, fetchData, categoryId]);

  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      <Categories />
      <h1 className="text-center m-5">
        {
                categoryId === 'star-wars' ? 'Star Wars' :
                categoryId === 'famous-people' ? 'Famous People' :
                categoryId === 'saying' ? 'Saying' :
                categoryId === 'humour' ? 'Humour' :
                categoryId === 'motivation' ? 'Motivation' :
                  'All'}
      </h1>
      {loading ? (
        <Loader />
      ) : quotes.length === 0 ? (
        <p className="text-center m-5">No posts :(</p>
      ) : (
        <>
          {quotes.map(quote => (
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
