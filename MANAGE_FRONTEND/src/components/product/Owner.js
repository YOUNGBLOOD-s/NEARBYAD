import React from 'react';
import gradeType from '../../lib/data/gradeType';
import styled from 'styled-components';

const OwnerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .Info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 1rem;
    .text {
      font-weight: bold;
      text-align: center;
      font-size: 1rem;
    }
  }
`;

const Owner = ({ owner }) => {
  const { username, company, grade } = owner;
  return (
    <OwnerWrapper>
      <div className="Info-box">
        <div className="text">유저명</div>
        <div>{username}</div>
      </div>
      <div className="Info-box">
        <div className="text">회사명</div>
        <div>{company}</div>
      </div>
      <div className="Info-box">
        <div className="text">등급</div>
        <div>{gradeType[grade]}</div>
      </div>
    </OwnerWrapper>
  );
};

export default Owner;
