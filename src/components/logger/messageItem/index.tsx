import type React from 'react';
import DefaultMessage from '../../general/defaultMessage';
import type { MessageLog } from '../../../types/Logger';
import DefaultItem from '../defaultItem';
import './styles.scss';

interface Props {
  data: MessageLog;
}

const MessageItem = ({ data }: Props) => {
  const msg = data.data;
  return (
    <DefaultItem logData={data} user={msg.author} key={msg.id}>
      <div className="log-data message">
        <DefaultMessage message={data.data} />
      </div>
    </DefaultItem>
  );
};

export default MessageItem;