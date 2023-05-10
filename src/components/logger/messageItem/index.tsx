import type React from 'react';
import type { MessageLog } from '../../../types/Logger';
import './styles.scss';
import MessageEmbed from '../../general/Embed';
import { StickerFormatType } from '../../../types/Discord';
import MessageAttachment from '../../general/Attachment';
import DefaultItem from '../defaultItem';
import type { Key } from 'react';

interface Props {
  data: MessageLog;
}

const MessageItem = ({ data }: Props) => {
  const msg = data.data;
  return (
    <DefaultItem logData={data} user={msg.author} key={msg.id}>
      <div className="log-data message">
        {msg.content && (<p>{msg.content}</p>)}
        {msg.embeds.map((embed, index) => (<MessageEmbed embed={embed} key={index} />))}
        {msg.sticker_items.map((sticker, index) => (
          <div className="message-sticker" key={index}>
            <img src={`https://media.discordapp.net/stickers/${sticker.id}.webp?size=160`} alt="Message Sticker" />
            <small>{sticker.name} | {StickerFormatType[sticker.format_type].toLowerCase()}</small>
          </div>
        ))}
        {msg.attachments.map((attachment, index) => (<MessageAttachment attachment={attachment} key={index} />))}
      </div>
    </DefaultItem>
  );
};

export default MessageItem;