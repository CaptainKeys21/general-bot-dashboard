import React from 'react';
import type { CommandLog } from '../../../types/Logger';
import './styles.scss';

interface Props {
  data: CommandLog;
}

const CommandItem = ({ data }: Props) => {
  return (
    <div className="main">
      <div className='log-head'>
        <div className={`log-type ${data.logType}`}>{data.category.toUpperCase()} | {data.logType.toUpperCase()}</div>
        <div className='log-date'>{new Date(data.time).toLocaleString('en-GB')}</div>
      </div>
      <div className="log-main">
        <div className='log-data'>
          <div>
            <span>Mensagem: {data.message}</span>
          </div>
          <div>
            <span>Comando: </span>
            <span>{data.command.name}</span>
          </div>
          {'args' in data.command && data.command.args.length > 0 && (<div>
            <span>Args: </span>
            <span>{data.command.args.join(' | ')}</span>
          </div>)}
        </div>
        <div className='log-author'>
          <div className="img-wrapper">
            <img src={`https://cdn.discordapp.com/avatars/${data.author.id}/${data.author.avatar}.png`} alt="Discord Avatar" />
          </div>
          <span>
            {data.author.username}#{data.author.discriminator}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandItem;