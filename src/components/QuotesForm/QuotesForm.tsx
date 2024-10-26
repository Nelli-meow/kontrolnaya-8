import * as React from 'react';
import { useEffect, useState } from 'react';
import { IQuote, IQuotes } from '../../types';
import Loader from '../UI/Loader.tsx';

const initialFrom = {
  author: '',
  text: '',
  category: '',
}

interface Props {
  submitForm: (quote: IQuotes) => void,
  quoteToEdit?: IQuote,
}

const QuotesForm: React.FC<Props> = ({submitForm, quoteToEdit}) => {
  const [quote, setQuote] = useState<IQuote>({...initialFrom});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (quoteToEdit) {
      setQuote(prevState => ({
        ...prevState,
        ...quoteToEdit,
      }));
    }
  }, [quoteToEdit])

  const category = [
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Famous people', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
    { title: 'Motivation', id: 'motivation' },
  ];

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setQuote(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!quote.author || !quote.text || !quote.category) {
      alert('Don\'t leave fields blank');
    } else {
      setQuote({...initialFrom});
      submitForm({...quote});
    }
    setLoading(false);
  }

  return (
    loading ? (
      <Loader/>
    ) : (
      <div className="container mt-5">
        <h2>{quoteToEdit ? 'Edit' : 'Submit new'} quote</h2>
        <form onSubmit={onSubmitForm}>
          <div className="my-3">
            <label htmlFor="Category">Category</label>
            <select
              name="category"
              value={quote.category}
              onChange={onChangeField}
              className="form-select form-select-sm"
              aria-label="Small select example">
              <option value="" disabled>Select category</option>
              {category.map(category => (
                <option
                  key={category.id}
                  value={category.id}
                >{category.title}</option>
              ))}
            </select>
          </div>
          <div className="my-3">
            <label htmlFor="Author">Author</label>
            <input
              value={quote.author}
              name="author"
              onChange={onChangeField}
              className="form-select form-select-sm"
              aria-label="Small select example"></input>
          </div>
          <div className="my-3">
            <label htmlFor="text">Quote text</label>
            <textarea
              value={quote.text}
              name="text"
              onChange={onChangeField}
              className="form-select form-select-sm"
              aria-label="Small select example"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-info mt-2">
            {quoteToEdit ? 'Edit' : 'Save'}
          </button>
        </form>
      </div>
    )
  );
};

export default QuotesForm;