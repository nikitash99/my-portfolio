import React from 'react';
import { Progress } from 'antd';

const ProgressBar = props => {
  const { text, percent } = props;
  return (
    <div style={{ marginTop: '20px' }}>
      <div>
        <Progress
          strokeColor="linear-gradient(270deg,#ff8a00,#e52e71)"
          percent={percent || 0}
          strokeWidth={22}
          status="active"
        />
      </div>
      <div
        style={{
          position: 'absolute',
          marginTop: '-22px',
          marginLeft: '15px',
          backgroundColor: 'transparent',
          color: 'white',
          fontSize: '13px',
        }}
      >
        <span>{text || ''}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
