import React from 'react';
import { VideoCardContainer } from './styles';

//function getYouTubeId(youtubeURL) {
//  return youtubeURL
//    .replace(
//      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//      '$7',
//    );
//}


function VideoCard({ videoTitle, videoURL, categoryColor, imgUrl,onClick }) {
  const image = imgUrl;
  return (
    <>
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
        onClick={onClick}
      >
        <div style={{background:'rgba(0, 0, 0, 0.5)',color:'#FCFCFC',padding:'5px'}}> {videoTitle} </div>
      </VideoCardContainer>
    </>
  );
}

export default VideoCard;
