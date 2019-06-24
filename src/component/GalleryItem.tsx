import React, { useEffect, useRef, useState } from 'react';
import { fetchProject, openProject } from '../actions';
import { ProjectData } from '../types';
import { BaseProps, MouseHandler } from '../types/common';
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // border: '1px solid #ddd',
    // borderColor:'#eee',
    border: '0 none',
    width: '100%',
    backgroundColor: 'white',
    padding: '0 0',
    overflow: 'hidden',
    transition: 'all 0.9s cubic-bezier(.25,.8,.25,1)',
    boxShadow: '0px 2px 8px 0px rgba(88,88,88,0.2)',
    borderRadius: "18px",
    // boxShadow: '0px 1px 5px 0px rgba(119,119,119,0.1)',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '2px 8px 20px 1px rgba(88,88,88,0.45)',
      cursor: 'pointer'
    },
  },
  imgArea: {
    width: '100%',
    paddingBottom: "115%",
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
    paddingTop: '.6em',
    paddingBottom: '.5em',
    fontSize: '.85rem',
    color: '#222',
    paddingLeft: '7px',
    paddingRight: '7px',
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


const GalleryItem: React.FC<BaseProps & ProjectData & {type: 'image' | 'frame'}> = (props) => {

  // React HOOK useState
  const [isHover, setIsHover] = useState(false);
  const [el, setEl] = useState<HTMLButtonElement | undefined>();
  const { name, url, src, thumbnail } = props;
  const classes = useStyles();
  const Theme = useTheme();

  const onProjectClick = (src: string): MouseHandler => e => {
    e.preventDefault();
    if(props.type === "frame"){
      fetchProject(src);
    }
    else if(props.type === 'image'){
      openProject(props);
    }
  };
  const onProjectMouseEnter = (el: HTMLElement | undefined): MouseHandler => (e) => {
    // setIsHover(true);
  };
  const onProjectMouseLeave = (el: HTMLElement | undefined): MouseHandler => (e) => {
    // setIsHover(false);
  };
  const onProjectMouseMove = (el: HTMLElement | undefined): MouseHandler => (e) => {
    if (el) {
      const { bottom, top, left, right } = el.getClientRects()[0];
      const [centerX, centerY] = [(left + right) / 2, (bottom + top) / 2];
      const { clientX, clientY } = e;

    }
  };

  // useEffect(() => {}, []);

  return <button
    ref={e => {
      if (e) {
        setEl(e)
      }
    }}
    className={classes.root}
    onClick={url ? onProjectClick(url) : () => false}
    onMouseEnter={onProjectMouseEnter(el)}
    onMouseMove={onProjectMouseMove(el)}
    onMouseLeave={onProjectMouseLeave(el)}
  >
    <div className={classes.imgArea}>
      <img src={thumbnail ? thumbnail : './images/noimg_large.gif'} alt={name} className={classes.img}/>
    </div>
    <Typography variant="caption" display="block" className={classes.name}>{name}</Typography>
  </button>
};

export default connect(null,
  { fetchProject })(GalleryItem);
