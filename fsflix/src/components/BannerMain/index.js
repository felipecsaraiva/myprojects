import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

//function getYouTubeId(youtubeURL) {
//  return youtubeURL
//    .replace(
//      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//      '$7',
//    );
//}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url,
  image,
  download,
}) {
  //const youTubeID = getYouTubeId(url);
  //const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={image}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
          <ReactAudioPlayer
            src={download}
            autoPlay
            controls
          />
          <br/>
          <div>
            <WatchButton href={url}>
              Acessar
            </WatchButton>
          </div>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
