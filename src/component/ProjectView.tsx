import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { closeProject } from '../actions';
import { RootState, ShowingProject } from '../types';
import { BaseProps, MouseHandler } from '../types/common';
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import { colors } from '../constants/colors';
import { Modal, Theme, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
      root: {
        display: 'fixed',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
      }
    }
  )
});
// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

type Props = BaseProps & {
  showingProject?: ShowingProject
}

const ProjectView: React.FC<Props> = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  console.log(props);
  // const handleOpen = ()
  const handleClose: MouseHandler = e => {
    e.preventDefault();
  };
  const renderContent = () => {
    if (!props.showingProject) {
      return;
    }
    const type = props.showingProject.type;
    const { name, src, url } = props.showingProject.selectProject;
    // const [modalStyle] = React.useState(getModalStyle);

    switch (type) {
      case 'image':
        return <div className="view-frame">
          <iframe title={name} src={url}/>
        </div>;
      case 'frame':
        return <div className="view-image">
          <img alt={name} src={src}/>
        </div>;
      default:
        return '';
    }
  }

  console.log(props.showingProject);
  // const c = ()=><div>cc</div>

  return (
    <Box>
      <Modal
        className={classes.root}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={!!props.showingProject}
        onClose={handleClose}
      >
        <div>
          {/*<button className="close-btn" onClick={onClose}/>*/}
          <Box>{renderContent()}</Box>
          <div className="view-info">
            <Typography variant="subtitle2" className="view-title"></Typography>
            <Typography className="view-date"></Typography>
            <Typography className="view-url"></Typography>
            <Typography className="view-tech-stack"></Typography>
            <Typography className="view-description"></Typography>
          </div>
        </div>
      </Modal>
    </Box>

  );
}


const mapStateToProps = ({ showingProject }: RootState) => showingProject;

export default connect(
  mapStateToProps,
  { closeProject },
)(ProjectView);
