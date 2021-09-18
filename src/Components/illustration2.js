import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import Image from '../Assets/illustration2.png';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  

}));

const itemData = [
    {
      img: Image,
    
    },
   
  ];
  

export default function Illustration2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <ImageList className={classes.imageList} cols={1.0}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img src={item.img}  />
                   
                </ImageListItem>
            ))}
        </ImageList>
    </div>
);
  
}
