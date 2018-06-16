import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './status-banner.scss';

const StatusBannerInner = ({ status, text }) => {
  if ('' === text)
    return null;

  let className = `${styles.statusBanner} alert alert-${status}`;

  return (
    <div className="col-12">
      <p className={className}>{text}</p>
    </div>
  );
};

StatusBannerInner.propTypes = {
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  status: state.lastStatus.status,
  text: state.lastStatus.text
});

const StatusBanner = connect(mapStateToProps)(StatusBannerInner);
export default StatusBanner;
