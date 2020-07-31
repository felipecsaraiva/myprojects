import React from 'react';
import './player.css';
import ReactAudioPlayer from 'react-audio-player';

function Player({url,title}){
    return (
        <div className="Player">
            <p>{title}</p>
            <div>
                <ReactAudioPlayer
                    src={url}
                    autoPlay
                    controls
                    className="audioPlayer"
                />
            </div>
        </div>
    );
}

export default Player;