import React from 'react';
import type { DiscordMessage } from '../../../types/Discord';
import './styles.scss';

interface Props {
  message: DiscordMessage
}

const RefMessage = ( { message }: Props ) => {
  return (
    <small className='referenced-message'><a href={`/members/${message.author.id}`}>{message.author.username}</a> | {message.content}</small>
  );
};

export default RefMessage;