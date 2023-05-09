import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { MdWebAsset } from 'react-icons/md';
import type { EmbedThumbnail, EmbedVideo } from '../../../types/DiscordEmbed';

interface Props {
  url: string | null;
  video: EmbedVideo;
  thumb: EmbedThumbnail;
}

const MessageEmbedVideo = ({ video, thumb, url }: Props) => {
  const [playerStarted, setPlayerStarted] = useState<boolean>(false);
  return (
    <div className="embed-video-wrapper">
      <div>
        {playerStarted? (
          <iframe 
            loading='lazy' 
            src={video.url} 
            width={video.width || 300} 
            height={video.height || 300} 
            sandbox='allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
          ></iframe>
        ):(
          <img src={thumb.url} width={thumb.width || 300} height={thumb.height || 300}  alt="Video thumbnail" />
        )}
        {!playerStarted && (<div className="embed-video-controller">
          <button onClick={() => setPlayerStarted((val) => !val)}><FaPlay /></button>
          <a href={url || video.url}><MdWebAsset /></a>
        </div>)}
      </div>
    </div>
  );
};

export default MessageEmbedVideo;