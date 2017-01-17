import React from 'react';
import { connect } from 'react-redux';
import '../scss/status-banner.scss';

const StatusBannerInner = ({ status, text }) => {
  if ('' === text)
    return null;

  let className = 'status-banner alert alert-' + status;
  return <p className={className}>{text}</p>;
};

StatusBannerInner.propTypes = {
  status: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  status: state.lastStatus.status,
  text: state.lastStatus.text
});

const StatusBanner = connect(mapStateToProps)(StatusBannerInner);
export default StatusBanner;
