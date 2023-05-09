import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactPlayer from 'react-player';
import type { DiscordAttachment } from '../../../types/Discord';
import './style.scss';

interface Props {
  attachment: DiscordAttachment;
}

const MessageAttachment = ({ attachment }: Props) => {
  const type = attachment.content_type?.split('/')[0] || 'unknown';
  let MediaTag: JSX.Element = (<a href={attachment.url}>{attachment.filename}</a>);

  if (attachment.content_type) {
    switch (type) {
    case 'audio':
      MediaTag = (<ReactAudioPlayer src={attachment.url} controls/>);
      break;

    case 'image':
      MediaTag = (<img src={attachment.url} height={attachment.height || undefined} width={attachment.width || undefined} />);
      break;

    case 'video':
      MediaTag = (<ReactPlayer url={attachment.url} controls/>);
      break;

    default:
      break;
    }
  }

  return (
    <div className={`message-attachment ${type}`}>
      {MediaTag}
      <small><a href={attachment.url}>{attachment.filename}</a> | {attachment.size}</small>
    </div>
  );
};

export default MessageAttachment;