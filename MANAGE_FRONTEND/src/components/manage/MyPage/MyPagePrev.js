import React, { useRef } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import { Map, List } from 'immutable';
import axios from 'axios';
import StyledTextField from '../../common/StyledTextField';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { dispatch } from '../../../../node_modules/rxjs/internal/observable/range';
import { getCurrentUser } from '../../../modules/user';

const MyFormBlcok = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 500px;
  height: 100%;
`;

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.theme[400],
    color: 'white',
  },
})(component.Button);

const MyFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.grey[500]};
    text-decoration: underline;
  }
`;

const MyPagePrev = ({ setAuth, token, setOpen, setUserInfo }) => {
  const form = useRef(null);

  const { member } = useSelector(({ user }) => ({
    member: user.member,
  }));

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        'https://i02c110.p.ssafy.io:8887/api/auth/infomem',
        { password: e.target.password.value },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(res => {
        res.data.meminfo.password = '';
        setUserInfo({ data: Map(res.data.meminfo) });
        setAuth(true);
      })
      .catch(err => {
        console.log(err);
        handleClick();
      });
  };

  return (
    <MyFormBlcok>
      {member && (
        <div>
          <h1>{member.username}</h1>
          <h1>{member.grade}</h1>
        </div>
      )}
      <MyFormWrapper onSubmit={onSubmit}>
        <StyledTextField
          label="비밀번호"
          variant="outlined"
          value={form.password}
          name="password"
          type="password"
          autoComplete="new-password"
        />
        <StyledButton variant="contained" type="submit">
          확인
        </StyledButton>
        <Footer></Footer>
      </MyFormWrapper>
    </MyFormBlcok>
  );
};

export default MyPagePrev;
