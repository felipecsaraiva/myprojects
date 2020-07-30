import React from 'react';
import { VideoCardContainer } from './styles';

//function getYouTubeId(youtubeURL) {
//  return youtubeURL
//    .replace(
//      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//      '$7',
//    );
//}


function VideoCard({ videoTitle, videoURL, categoryColor, imgUrl }) {
  const image = imgUrl;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      />
    </>
  );
}

export default VideoCard;
