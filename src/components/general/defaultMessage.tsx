import React from 'react';
import type { DiscordMessage } from '../../types/Discord';
import MessageAttachment from './Attachment';
import MessageEmbed from './Embed';
import MessageSticker from './Sticker';
import RefMessage from './RefMessage';
import Content from './Content';

interface Props {
  message: DiscordMessage;
  date?: boolean;
}

const DefaultMessage = ({ message, date }: Props) => {
  return(
    <>
      {message.referenced_message && <RefMessage message={message.referenced_message} />}
      {message.content && (<p><Content>{message.content}</Content></p>)}
      {message.embeds.map((embed, index) => (<MessageEmbed embed={embed} key={index} />))}
      {message.sticker_items.map((sticker, index) => (<MessageSticker sticker={sticker} key={index} />))}
      {message.attachments.map((attachment, index) => (<MessageAttachment attachment={attachment} key={index} />))}
      {date && (<small>{new Date(message.timestamp).toLocaleString('en-GB')}</small>)}
    </>
  );
};

export default DefaultMessage;