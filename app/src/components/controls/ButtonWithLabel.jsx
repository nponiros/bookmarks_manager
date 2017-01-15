import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const wrapperStyle = {
  marginTop: '14px',
};

const labelStyle = {
  lineHeight: '22px',
  color: 'rgba(0, 0, 0, 0.298039)',
};

const ButtonWithLabel = ({ title, btnLabel, action }) => <div style={wrapperStyle}>
  <span style={labelStyle}>{title}</span>
  <br />
  <FlatButton
    label={btnLabel}
    onTouchTap={action}
  />
</div>;

ButtonWithLabel.propTypes = {
  title: PropTypes.string.isRequired,
  btnLabel: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ButtonWithLabel;
