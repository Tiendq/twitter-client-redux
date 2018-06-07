import React from 'react';
import SearchFormContainer from './search-form-container';
import StatusBanner from './status-banner';
import SearchResultContainer from './search-result-container';
import './scss/twitter-app.scss';

const TwitterApp = () => (
  <div>
    <header className="row">
      <h1 className="col-12">twitter-client-redux</h1>
      <p className="col-12">You can search Twitter using the search box below</p>
    </header>
    <div className="row">
      <SearchFormContainer />
    </div>
    <div className="row">
      <StatusBanner />
    </div>
    <div className="row">
      <SearchResultContainer />
    </div>
  </div>
);

export default TwitterApp;
