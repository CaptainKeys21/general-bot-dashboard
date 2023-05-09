import React from 'react';
import type { MessageLog } from '../../../types/Logger';
import './styles.scss';
import MessageEmbed from '../../general/Embed';
import { StickerFormatType } from '../../../types/Discord';
import MessageAttachment from '../../general/Attachment';

interface Props {
  data: MessageLog;
}

const MessageItem = ({ data }: Props) => {
  const msg = data.data;
  return (
    <div className="main message">
      <div className='log-head'>
        <div className={`log-type ${data.logType}`}>{data.category.toUpperCase()} | {data.logType.toUpperCase()}</div>
        <div className='log-date'>{new Date(data.time).toLocaleString('en-GB')}</div>
      </div>
      <div className="log-main">
        <div className="log-data">
          {msg.content && (<p>{msg.content}</p>)}
          {msg.embeds.map((embed, index) => (<MessageEmbed embed={embed} key={index} />))}
          {msg.sticker_items.map((sticker) => (
            <div className="message-sticker" >
              <img src={`https://media.discordapp.net/stickers/${sticker.id}.webp?size=160`} alt="Message Sticker" />
              <small>{sticker.name} | {StickerFormatType[sticker.format_type].toLowerCase()}</small>
            </div>
          ))}
          {msg.attachments.map((attachment) => (<MessageAttachment attachment={attachment} />))}
        </div>
        <div className='log-author'>
          <div className="img-wrapper">
            <img src={`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`} alt="Discord Avatar" />
          </div>
          <span>
            {msg.author.username}#{msg.author.discriminator}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;