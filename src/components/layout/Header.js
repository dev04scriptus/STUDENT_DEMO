import { List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "block",
    '& ul' :{
      display:'flex',
      justifyContent:'flex-start',
      padding:'0px',

      '& li':{
        display:'contents',

        '& a':{
          textDecoration:'none',
          padding:'20px',
          color:'#000',
          fontWeight:500,

          '&:hover':{
            background:'#966dcd',
            color:'#fff'
          }
        }
      }
    }
  },
  active:{
    background:'#966dcd',
    color:'#fff !important'
  }
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const pathName = history.location.pathname
  console.log("pathName",pathName);
  return (
    <div className={classes.header}>
      <List>
        <ListItem>
          <Link to="/student-registration" className={pathName === '/' || pathName === '/student-registration' ? classes.active  : null}>Registration</Link>
        </ListItem>
        <ListItem>
          <Link to="/student-record" className={pathName === '/student-record' ? classes.active  : null}>Student Record</Link>
        </ListItem>
      </List>
    </div>
  );
}
