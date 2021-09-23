import React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import PictureData from './image.json'

export default function StandardImageList() {
  console.log(PictureData);
  
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={250}>
      {PictureData.map((props) => (
        <ImageListItem key={props.img}>
          <img
            src={`${props.img}`}
            srcSet={`${props.img}`}
            alt={props.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
