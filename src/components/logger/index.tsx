import { useTransition, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { io } from "socket.io-client";

import { page, pageSize, selectedColections } from "./controlPannel/selectedCollections";
import type { IApiPagedResponse } from "../../types/Responses";
import type { Log } from "../../types/Logger";
import CommandItem from "./commandItem";
import axios from '../../utils/axios';
import MessageItem from "./messageItem";

const socket = io('ws://127.0.0.1:8081/logger');

const LoggerItem = (log: Log) => {
  switch (log.category) {
    case 'commands':
      return (<CommandItem data={log} />);

    case 'messages':
      return (<MessageItem data={log} />);
  
    default:
      return null;
  }
}

const LoggerWrapper = () => {
  const [data, setData] = useState<Log[]>([]);
  const $selectedCollections = useStore(selectedColections);
  const $pageSize = useStore(pageSize);
  const $page = useStore(page);

  const fetchInitialData = async (collections: string[], page: number, pageSize: number): Promise<Log[]> => {
    const queryStringCategories = collections.map((coll) => `category=${coll}`).join('&');
    const res = await axios.get<IApiPagedResponse<Log[]>>(`/logger?${queryStringCategories}&page=${page}&pageSize=${pageSize}`, { baseURL: 'http://localhost:8081' });
    return res.data.data;
  } 

  const transitions = useTransition(data, {
    from: { transform: 'translateY(-150%)' },
    enter: { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    // config: { duration: 200 }
  });

  useEffect(() => {
    fetchInitialData($selectedCollections, $page, $pageSize)
      .then((data) => setData(data));


    function addData(data: Log) {
      setData((prev) => [data, ...prev])
    }

    $selectedCollections.forEach((coll) => socket.on(coll, addData));

    return () => {
      $selectedCollections.forEach((coll) => socket.off(coll, addData));
    }

  },[$selectedCollections, $page, $pageSize]);

  return transitions((style, item) => (
    <animated.div style={style}>
      <LoggerItem {...item} />
    </animated.div>
  ));
}

export default LoggerWrapper;