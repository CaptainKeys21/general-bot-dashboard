import { ReactNode, PropsWithChildren, useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';
import axios from '../../utils/axios';
import type { IApiResponse, IdNames } from '../../types/Responses';
import reactStringReplace from 'react-string-replace';
import MentionCard from './MentionCard';

const channelRegex = /<#[0-9]{18}>/g;
const forumChannelRegex = /<#[0-9]{19}>/g;
const userRegex = /<@[0-9]{18}>/g;
const roleRegex = /<@&[0-9]{18}>/g;
const emojiRegex = /<a?:[a-zA-z]+:\d{18}>/g;

const Content = ({ children }: PropsWithChildren) => {
  if(!children) return (<></>);

  const channelIds = channelRegex.exec(children.toString())?.map((val) => val.slice(2, 20)) || [];
  const forumChannelIds = forumChannelRegex.exec(children.toString())?.map((val) => val.slice(2, 21)) || [];
  const userIds = userRegex.exec(children.toString())?.map((val) => val.slice(2, 20)) || [];
  const rolesIds = roleRegex.exec(children.toString())?.map((val) => val.slice(3, 21)) || [];
  const emojiIds = emojiRegex.exec(children.toString())?.map((val) => val.slice(1,-1)) || [];

  const queryIds = [...channelIds, ...forumChannelIds, ...userIds, ...rolesIds];


  if (!queryIds.length && !emojiIds.length) return(<>{children}</>);

  const [newChildren, setChildren] = useState(children);
  const handleDataFetch = ({ data: { data } }: AxiosResponse<IApiResponse<IdNames>>) => {
    let returnChildren = newChildren;
    channelIds.forEach((id) => {
      returnChildren = reactStringReplace(returnChildren.toString(), `<#${id}>`, (_, i) => (<MentionCard key={i} type={data[id]['type'] as number}>{data[id]['name']}</MentionCard>));
    });
    forumChannelIds.forEach((id) => {
      returnChildren = reactStringReplace(returnChildren.toString(), `<#${id}>`, (_, i) => (<MentionCard key={i} type={data[id]['type'] as number}>{data[id]['name']}</MentionCard>));
    });
    userIds.forEach((id) => {
      returnChildren = reactStringReplace(returnChildren.toString(), `<@${id}>`, (_, i) => (<MentionCard key={i}>{data[id]['name']}</MentionCard>));
    });
    rolesIds.forEach((id) => {
      returnChildren = reactStringReplace(returnChildren.toString(), `<@&${id}>`, (_, i) => (<MentionCard key={i} color={data[id]['color'] as number}>{data[id]['name']}</MentionCard>));
    });

    setChildren(returnChildren);
  };

  const handleEmojiRender = () => {
    let returnChildren = newChildren;
    emojiIds.forEach((emojiId) => {
      const [a, name, id] = emojiId.split(':');
      returnChildren = reactStringReplace(returnChildren.toString(), `<${emojiId}>`, (_, i) => (<img width={'24px'} src={`https://cdn.discordapp.com/emojis/${id}.${a? 'gif': 'png'}`} />));
    });
    setChildren(returnChildren);
  };

  useEffect(() => {
    queryIds.length && axios.post<IApiResponse<IdNames>>('/utilities/idNames', { ids: queryIds }, { baseURL: 'http://localhost:8081' })
      .then(handleDataFetch);
    handleEmojiRender();
  }, []);

  return(<>{newChildren}</>);
};

export default Content;