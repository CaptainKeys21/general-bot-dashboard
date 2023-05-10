import React from 'react';
import type { CommandLog } from '../../../types/Logger';
import './styles.scss';
import DefaultItem from '../defaultItem';

interface Props {
  data: CommandLog;
}

const CommandItem = ({ data }: Props) => {
  return (
    <DefaultItem logData={data}  user={data.author}>
      <div className='log-data command'>
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
    </DefaultItem>
  );
};

export default CommandItem;