import React from 'react';
import type { MessageLog } from '../../../types/Logger';
import './styles.scss';
import MessageEmbed from '../../general/Embed';

interface Props {
  data: MessageLog;
}

const MessageItem = ({ data }: Props) => {
  const msg = data.data;
  return (
    <div className="main">
      <div className='log-head'>
        <div className={`log-type ${data.logType}`}>{data.category.toUpperCase()} | {data.logType.toUpperCase()}</div>
        <div className='log-date'>{new Date(data.time).toLocaleString('en-GB')}</div>
      </div>
      <div className="log-main">
        <div className="log-data">
          {msg.content && (<p>{msg.content}</p>)}
          {msg.embeds.map((embed, index) => (<MessageEmbed embed={embed} key={index} />))}
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