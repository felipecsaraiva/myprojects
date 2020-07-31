import React, {useState} from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './Slider';
import Player from '../Player';
import './fechar.css';

function Carousel({
  ignoreFirstVideo,
  category,
  dados,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = dados.items;
  const [showPlayer,setShowPlayer] = useState(false);
  const [Video,setVideo] = useState({});

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {console.log(videos)}
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={''}
                categoryColor={categoryColor}
                imgUrl={video.thumbnail}
                onClick={function handleClick(e) {    
                  e.preventDefault();    
                  setShowPlayer(true); 
                  setVideo(video);
                }}
              />
            </SliderItem>
          );
        })}
      </Slider>
      {showPlayer && (
        <>
        <Player
          url={Video.enclosure.link}
          title={Video.title}
        />
        <div className="Fechar">
          <a onClick={function handleCloseClick(e){
            e.preventDefault();
            setShowPlayer(false);
          }}>Fechar</a>
        </div>
        </>
      )}
    </VideoCardGroupContainer>
  );
}

export default Carousel;
