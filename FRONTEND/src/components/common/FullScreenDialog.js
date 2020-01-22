import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';
import styled from 'styled-components';
import NFSlider from './NFSlider';
import ADNavBar from './ADNavBar';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    background: 'transparent',
    color: 'white',
    boxShadow: 'none',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = ({ data, open, setOpen }) => {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Icon = styled.span`
    margin-right: 2%;
  `;

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {data['title']}
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}> */}
            <WbSunnyIcon /> &nbsp;<Icon>-17&deg;C ~ -3&deg;C</Icon>
            <OpacityIcon /> &nbsp;<Icon> 0 %</Icon>
          </Toolbar>
        </AppBar>

        <NFSlider data={data} />
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
