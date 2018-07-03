import React from 'react';
import EquifaxImg from '../../../assets/finance/equifax.png';

import './GetIntelligent.scss';

const GetIntelligent = () => (
  <div className="get-intelligent-wrapper">
    <div className="get-intelligent-title">Get Intelligent about your finances</div>

    <button className="mmk-btn active-btn">Sign Up</button>
    <div className="get-intelligent-wrapper-short-txt">
      <div className="get-intelligent-description">Credit Score powered by</div>
      <img src={EquifaxImg} alt="equifaximg" />
    </div>
  </div>
)

export default GetIntelligent