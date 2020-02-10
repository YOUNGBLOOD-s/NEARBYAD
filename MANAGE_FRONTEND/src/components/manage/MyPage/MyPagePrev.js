import React, { useState, useRef, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import component from '../../../lib/material/component';
import { Snackbar } from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

const MyFormBlcok = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 500px;
`;

const StyledTextField = withStyles({
  root: {
    marginBottom: '1rem',
    // 포커스시 라벨 색상
    '& label.Mui-focused': {
      color: palette.teal[500],
    },
    '& .MuiOutlinedInput-root': {
      // 기본 필드 보더 색상
      '& fieldset': {
        borderColor: palette.teal[50],
      },
      // 호버 했을때 색상
      // '&:hover fieldset': {
      //   borderColor: 'yellow',
      // },
      //  포커스 시 보더 색상
      '&.Mui-focused fieldset': {
        borderColor: palette.teal[600],
      },
    },
  },
})(component.TextField);

const StyledButton = withStyles({
  root: {
    backgroundColor: palette.teal[400],
    color: 'white',
  },
})(component.Button);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const MyFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  margin-top: 1rem;
  text-align: right;
  a {
    color: ${palette.grey[500]};
    text-decoration: underline;
  }
`;

const MyPagePrev = ({ setAuth, token }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const form = useRef(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(
        '/api/auth/infomem',
        // 'http://192.168.100.66:8887/api/auth/infomem',
        { password: e.target.password.value },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then(res => {
        setAuth(true);
      })
      .catch(err => {
        handleClick();
      });
  };

  return (
    <>
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            This is an error alert — check it out!
          </Alert>
        </Snackbar>
      </div>
      <MyFormBlcok>
        <MyFormWrapper onSubmit={onSubmit}>
          <StyledTextField
            label="비밀번호"
            variant="outlined"
            //   onChange={onChange}
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
    </>
  );
};

export default MyPagePrev;
