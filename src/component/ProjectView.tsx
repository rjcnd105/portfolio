import { Box, Button, ButtonBase, Grid, Link, Modal, Theme, Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, useTheme } from '@material-ui/styles';
import { debounce } from 'lodash';
import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import commonStyle from '../style/commonStyle';
import { theme } from '../style/theme';
import { RootState, ShowingProject } from '../types';
import { BaseProps, MouseHandler } from '../types/common';
import Close from './icons/Close';

const useStyles = makeStyles((theme: Theme) => {

  return createStyles({
    pfDot: commonStyle.pfDot,
    smallTitle: {
        ...commonStyle.smallTitle,
        paddingBottom: '.2em'
      },

    root: {},
    closeButton: {
        position: 'absolute',
        top: '-44px',
        right: '-10px',
        color: '#FAFAFA',
        zIndex: 10000,
        '&:focus, &:hover': {},
        [theme.breakpoints.down('xs')]: {
          top: 0, right: 0
        }
      },
    closeIcon: {
        margin: '4px',
        fontSize: '40px',
        '-webkit-filter': 'drop-shadow( 1px 1px 3px rgba(0, 0, 0, .4))',
        filter: 'drop-shadow( 1px 1px 3px rgba(0, 0, 0, .4))',
      },
    modal: {
        position: 'absolute',
        maxWidth: '940px',
        width: '90%',
        top: 'calc(50% + 10px)',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FAFAFA',
        borderRadius: '3px',
        boxShadow: '0px 19px 38px rgba(0, 0, 0, 0.3), 0px 15px 12px rgba(0, 0, 0, 0.22)',
        padding: 0,
        outline: 'none',
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: '100%',
          top: 0, left: 0, right: 0, bottom: 0, transform: 'translate(0px, 0px)',
        },

      },
    modalWrap: {
        [theme.breakpoints.up('xs')]: {
          overflowY: 'auto',
          '-webkit-overflow-scrolling': 'touch',
        },
        [theme.breakpoints.down('xs')]: {
          height: '100%',
          maxHeight: '100% !implement'
        },
      },
    viewWrap: {
        [theme.breakpoints.down('xs')]: {
          height: '44%',
        }
      },
    imageArea: {
        position: 'relative',
        paddingTop: '48%',
        overflow: 'hidden',
        borderRadius: '3px 3px 0 0',
        [theme.breakpoints.down('xs')]: {
          height: '100%',
          paddingTop: 0,
          borderRadius: 0,
        },
        '&:hover': {
          '& .image': {
            transform: 'scale(1)'
          },
          '& .image-dimm': {
            opacity: .2,
          }
        },
        '& .image': {
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: '100%',
          transform: 'scale(1.08)',
          backgroundSize: 'cover',
          backgroundPosition: '30% 50%',
          transition: 'transform .7s cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        },
        '& .image-dimm': {
          position: 'absolute',
          left: 0, top: 0, right: 0, bottom: 0,
          zIndex: 999,
          backgroundColor: 'rgba(0,0,0,.25)',
          transition: 'opacity .7s cubic-bezier(0.165, 0.840, 0.440, 1.000)',
        }
      },

    iframeArea: {
        position: 'relative',
        paddingTop: '50%',
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderRadius: '3px 3px 0 0',

        [theme.breakpoints.down('xs')]: {
          height: '100%',
          paddingTop: 0,
          borderRadius: 0,
        },
        '& iframe': {
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%'
        }
      },
    infoWrap: {
        position: 'relative',
        width: '100%',
        paddingTop: '42%',
        zIndex: 1,
        [theme.breakpoints.down('xs')]: {
          height: '56%',
          paddingTop: 0,
          borderRadius: 0,
        }
      },
    infoArea: {
        position: 'absolute',
        height: '100%',
        top: 0, left: 0, right: 0, bottom: 0,
        overflowY: 'auto',
        overflowX: 'hidden',
        '-webkit-overflow-scrolling': 'touch',
        padding: '18px',
        boxSizing: 'border-box',

        '& .view-date': {
          position: 'absolute',
          top: '8px', right: '16px',
          color: '#777',
          textAlign: 'right',
          fontSize: '13px',
          [theme.breakpoints.down('xs')]: {
            top: '6px', right: '12px',
            fontSize: '11px',
          },
        },
        '& .view-title': {
          color: '#383838',
          fontSize: '30px',
          // textAlign: 'center',
          lineHeight: '42px',
          fontWeight: 'bold',
          paddingBottom: '.55em',
          [theme.breakpoints.down('xs')]: {
            paddingTop: '.2em'
          },
        },
        '& .view-url': {
          color: '#444',
          opacity: .85,
          [theme.breakpoints.down('xs')]: {
            fontSize: '.95rem'
          }
        },
        '& .view-tech-stack': {
          fontSize: '1.1rem',
          color: '#444'
        },
        '& .view-description': {
          fontSize: '1.1rem',
          color: '#444'
        },
        '& .view-info-item': {
          paddingRight: '32px',
          paddingTop: '22px',
          [theme.breakpoints.down('xs')]: {
            paddingRight: '18px',
            paddingTop: '22px',
          }

        }
      }
  }
  )
});
type Props = BaseProps & {
  showingProject?: ShowingProject
}

const ProjectView: React.FC<Props> = ({ showingProject }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getModalSize = function () {
    let value: string;
    if (window.innerWidth > theme.breakpoints.width('sm')) {
      value = window.innerHeight - 90 + 'px';
    } else {
      value = 'none';
    }

    return value;
  };

  const [maxHeight, setMaxHeight] = useState<string>(getModalSize());

  useEffect(() => {
    const handleResize = debounce(() => {
      setMaxHeight(getModalSize());
    },                            500, {
      trailing: true,
      leading: true,
    });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },        []);

  const renderView = () => {
    if (showingProject) {
      const type = showingProject.type;
      const { name, src, url } = showingProject.project;

      switch (type) {
        case 'image':
          return <Link target="_blank" href={url} title={name + ' 사이트 이동'}>
            <div className={classes.imageArea}>
              <div className="image" style={{ backgroundImage: 'url(' + src + ')' }}/>
              <div className="image-dimm"/>
            </div>
          </Link>;

        case 'frame':
          return <div className={classes.iframeArea}>
            <iframe title={name} src={url}/>
          </div>;
        default:
          return '';
      }
    }
  };

  const urlRender = () => {
    const url = showingProject && showingProject.project.url;
    const mUrl = showingProject && showingProject.project.mUrl;
    const txt = url && !mUrl ? 'URL: ' : 'PC: ';
    if (showingProject && showingProject.type === 'image') {
      const urlEl = url ?
        <Typography className="view-url">{txt}<Link target="_blank" href={url}>{url}</Link></Typography>
        : '';
      const mUrlEl = mUrl ?
        <Typography className="view-url">Mobile: <Link target="_blank" href={mUrl}>{mUrl}</Link></Typography>
        : '';

      return <>{urlEl}{mUrlEl}</>;
    }
    return '';
  };

  const renderModalInner = () => {
    if (showingProject) {
      const { name, areaDate, url, techStack, description } = showingProject.project;
      return <Container maxWidth="lg" className={classes.modal}>

        <ButtonBase className={classes.closeButton} onClick={handleClose} title={'Modal Close'} tabIndex={0}>
          <Close className={classes.closeIcon}/>
        </ButtonBase>
        <Box className={classes.modalWrap} style={{ maxHeight }}>
          <Box className={classes.viewWrap}>
            {renderView()}
          </Box>
          <div className={classes.infoWrap}>
            <div className={classes.infoArea}>
              <Typography className="view-title" variant={'subtitle1'}>{name}</Typography>
              <Typography
                className="view-date">{areaDate ? '투입 기간: ' + areaDate[0] + ' - ' + areaDate[1] : ''}</Typography>
              {urlRender()/* URL */}
              <Grid container={true}>
                <Grid className="view-info-item" item={true} xs={12} sm={6}>
                  <Typography variant={'subtitle1'} className={classes.smallTitle}>TeckStack<span
                    className={classes.pfDot}>.</span></Typography>
                  <Typography variant={'body1'} className="view-tech-stack">{techStack}</Typography>
                </Grid>
                <Grid className="view-info-item" item={true} xs={12} sm={6}>
                  <Typography variant={'subtitle1'} className={classes.smallTitle}>Description<span
                    className={classes.pfDot}>.</span></Typography>
                  <Typography className="view-description" variant={'body1'}
                              dangerouslySetInnerHTML={{ __html: description }}/>
                </Grid>
              </Grid>

            </div>
          </div>
        </Box>
      </Container>
    } 
    return <div/>
    
  };

  useEffect(() => {
    if (!!showingProject) {
      setOpen(true);
    }
  },        [showingProject]);
  // const c = ()=><div>cc</div>

  return (
    <Modal
      className={classes.root}
      aria-labelledby={showingProject && showingProject.project.name + ' Modal'}
      // aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      {renderModalInner()}
    </Modal>
  )
};

const mapStateToProps = ({ showingProject }: RootState) => ({ showingProject });

export default connect(
  mapStateToProps,
)(ProjectView);
