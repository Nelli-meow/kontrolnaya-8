import * as React from 'react';
import { Link } from 'react-router-dom';
import { IQuote } from '../../types';

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({quote}) => {
  return (
    <div className="border border-2 rounded p-3">
      <div>
        <p>"{quote.text}"</p>
        <h3>{quote.author}</h3>
      </div>
      <div className="d-flex align-items-center justify-content-sm-between mt-5">
        <Link type="button" className="btn btn-outline-primary" to="/">Edit</Link>
        <button type="button" className="btn btn-outline-danger">Delete</button>
      </div>
    </div>
  );
};

export default QuoteItem;