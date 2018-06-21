import React from 'react';
import SearchFormContainer from './search-form-container';
import StatusBanner from './status-banner';
import SearchResultContainer from './search-result-container';
import styles from './twitter-app.scss';

// keywordInputRef is just a demo of forwardRef with connected components.
let keywordInputRef = React.createRef();

const TwitterApp = () => (
  <div className={styles.containerFluid}>
    <header className="row">
      <h1 className="col-12">twitter-client-redux</h1>
      <p className="col-12">You can search Twitter using the search box below</p>
    </header>
    <div className="row test-blue">
      <SearchFormContainer ref={keywordInputRef} />
    </div>
    <div className="row">
      <StatusBanner />
    </div>
    <div className="row test-red">
      <SearchResultContainer keywordInput={keywordInputRef} />
    </div>
  </div>
);

export default TwitterApp;
