import * as React from 'react';
import Loader from '../../components/UI/Loader.tsx';
import QuotesForm from '../../components/QuotesForm/QuotesForm.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuotes } from '../../types';
import axiosApi from '../../axiosAPI.ts';

const EditQuote = () => {
  const [quote, setQuote] = useState<IQuote>();
  const [loading, setLoading] = useState<boolean>(false);
  const params = useParams<{idQuote: string}>();
  const navigate = useNavigate();

  const fetchOneQuote = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const response = await axiosApi<IQuote>(`quotes/${id}.json`);

      if(response.data) {
        setQuote(response.data);
      }
    } catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }

  }, []);

  const submitForm = async (quote: IQuotes) => {
    try {
      if(params.idQuote) {
        setLoading(true);
        await axiosApi.put(`quotes/${params.idQuote}.json`, {...quote});
      }
      navigate('/');

    } catch(error) {
      console.error(error)
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    if(params.idQuote) {
      void fetchOneQuote(params.idQuote);
    }
  },[params.idQuote, fetchOneQuote]);

  return (
    <div>
      {loading ? <Loader/> :
        <>
          {quote ?
            <>
              <QuotesForm quoteToEdit={quote} submitForm={submitForm}/>
            </>
            :
            <p>Post id not found :(</p>
          }
        </>
      }
    </div>
  );
};

export default EditQuote;