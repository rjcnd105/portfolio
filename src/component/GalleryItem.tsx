import { Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {  SetShowingProject, setShowingProject } from '../actions';
import { ShowingProject } from '../types';
import { BaseProps, MouseHandler } from '../types/common';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // border: '1px solid #ddd',
    // borderColor:'#eee',
    border: '0 none',
    width: '100%',
    backgroundColor: 'white',
    padding: '0 0',
    overflow: 'hidden',
    transition: 'all 0.7s cubic-bezier(.25,.8,.25,1)',
    boxShadow: '0 0 3.4rem -.8rem rgba(33,33,33,.2)',
    borderRadius: '3px',
    // boxShadow: '0px 1px 5px 0px rgba(119,119,119,0.1)',
    '&:hover, &:focus': {
      transform: 'translateY(-8px)',
      boxShadow: '0 0 3.7rem -.8rem rgba(33,33,33,0.42)',
      cursor: 'pointer'
    },
    [theme.breakpoints.down('sm')]: {
      '&:hover, &:focus': {
        transform: 'translateY(-12px)',
      }
    }
  },
  imgArea: {
    width: '100%',
    paddingBottom: '115%',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    borderBottom: '1px solid #eee'
  },
  img: {
    position: 'absolute',
    display: 'block',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    top: 'auto',
    width: '100%'
  },
  name: {
    padding: '.7rem 1.125rem',
    fontSize: '.875rem',
    color: '#444',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // [theme.breakpoints.up("sm")]: {
    //   fontSize: '.8rem',
    // },
    // [theme.breakpoints.up("md")]: {
    //   fontSize: '.85rem',
    // },
  }
}));
interface ParentProps extends ShowingProject {}

interface DispatchProps {
  setShowingProject: SetShowingProject
}
const GalleryItem: React.FC<BaseProps & ParentProps & DispatchProps> = (props) => {

  const [el, setEl] = useState<HTMLButtonElement | undefined>();
  const { name, url, src, thumbnail } = props.project;
  const classes = useStyles();

  const onProjectClick = (): MouseHandler => e => {
    e.preventDefault();
    props.setShowingProject({
      type: props.type,
      project: props.project
    });
  };

  return <button
    ref={e => {
      if (e) {
        setEl(e)
      }
    }}
    className={classes.root}
    onClick={onProjectClick()}
  >
    <div className={classes.imgArea}>
      <img src={thumbnail ? thumbnail : './images/noimg_large.gif'} alt={name} className={classes.img}/>
    </div>
    <Typography variant="caption" display="block" className={classes.name}>{name}</Typography>
  </button>
};

const mapDispatchToProps = (dispatch: Dispatch):
  DispatchProps => ({
    // dispatching plain actions
    setShowingProject: (d) => dispatch(setShowingProject(d)),
  });

export default connect(null,
                       mapDispatchToProps)(GalleryItem);
