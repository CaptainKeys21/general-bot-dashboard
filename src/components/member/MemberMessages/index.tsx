import React, { useEffect, useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import { io } from 'socket.io-client';

import type { IApiPagedResponse } from '../../../types/Responses';
import DefaultMessage from '../../general/defaultMessage';
import type { MessageLog } from '../../../types/Logger';
import axios from '../../../utils/axios';
import './styles.scss';

interface Props {
  userId: string;
}

const MemberMessages = ({ userId }: Props) => {
  const [messages, setMessages] = useState<MessageLog[]>([]);
  const fetchInitialData = async (userId: string) => {
    const res = await axios.get<IApiPagedResponse<MessageLog[]>>(`/logger/${userId}/messages`, { baseURL: 'http://localhost:8081' });
    return res.data.data;
  };

  const transitions = useTransition(messages, {
    from: { transform: 'translateY(-150%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    // config: { duration: 200 }
  });
  
  useEffect(() => {
    fetchInitialData(userId)
      .then((data) => setMessages(data));

    const socket = io(`ws://127.0.0.1:8081/logger/${userId}`);

    socket.on('message', (data) => setMessages((prev) => [data, ...prev]));

    return () => {
      socket.off('message', (data) => setMessages((prev) => [data, ...prev]));
      socket.disconnect();
    };
  }, [userId]);

  
  return (
    <div className="message-wrapper">
      {transitions((style, item) => (
        <animated.div className={'message-item'} style={style}>
          <DefaultMessage message={item.data} date />
        </animated.div>
      ))}
    </div>
  );
};

export default MemberMessages;