import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={50} text="Javascript"/>
        <ProgressBar percent={95} text="C++" />
        <ProgressBar percent={85} text="Django" />
        <ProgressBar percent={60} text="NodeJS" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="Web Development" />
        <ProgressBar percent={90} text="postgresql" />
        <ProgressBar percent={78} text="MongoDB" />
        <ProgressBar percent={80} text="Python" />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
