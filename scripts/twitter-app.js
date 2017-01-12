import React from 'react';
import SearchFormContainer from './search-form-container';
import '../scss/twitter-app.scss';

const TwitterApp = () => (
  <div>
    <header className="row">
      <h1>twitter-client-redux</h1>
      <h5>You can search Twitter using the search box below</h5>
    </header>
    <SearchFormContainer />
    <div className="row">
      <div className="col-md-4">
        
      </div>
    </div>
  </div>
);

export default TwitterApp;
