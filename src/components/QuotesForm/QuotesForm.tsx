import * as React from 'react';

const QuotesForm = () => {

  return (
    <div className="container mt-5">
      <h2>Submit new quote</h2>
      <div>
        <label htmlFor="Category">Category</label>
        <select className="form-select form-select-sm" aria-label="Small select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div>
        <label htmlFor="Author">Author</label>
        <input className="form-select form-select-sm" aria-label="Small select example"></input>
      </div>
      <div>
        <label htmlFor="text">Quote text</label>
        <textarea className="form-select form-select-sm" aria-label="Small select example"></textarea>
      </div>
      <button type="submit" className="btn btn-outline-info mt-3">
        Save
      </button>
    </div>
  );
};

export default QuotesForm;