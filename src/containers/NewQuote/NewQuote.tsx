import * as React from 'react';
import QuotesForm from '../../components/QuotesForm/QuotesForm.tsx';
import { useNavigate } from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import { useState } from 'react';
import { IQuotes } from '../../types';
import Loader from '../../components/UI/Loader.tsx';

const NewQuote = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const submitForm = async (quote: IQuotes) => {
    try {
      setLoading(true);
      await axiosAPI.post(`/quotes.json`, {...quote});
      navigate('/');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      alert('Quote has been added');
    }
  }

  return (
    <div>
      {loading ? <Loader/> :<QuotesForm submitForm={submitForm}/>}
    </div>
  );
};

export default NewQuote;