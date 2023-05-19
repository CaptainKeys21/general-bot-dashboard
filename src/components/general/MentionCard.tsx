import type { CSSProperties, PropsWithChildren } from 'react';
import { decimalToRGB } from '../../utils/dataFunctions';
import { ChannelType } from '../../types/Discord';
import { FaHashtag, FaVolumeUp } from 'react-icons/fa';
import { IoChatbubbleOutline, IoChatbubblesOutline } from 'react-icons/io5';
import { TbBroadcast } from 'react-icons/tb';
import { BsMegaphoneFill } from 'react-icons/bs';
import { MdQuestionMark } from 'react-icons/md';

interface Props {
  color?: number;
  type?: number;
}

const channelIcon = (channelType: keyof typeof ChannelType) => {
  switch(channelType) {
  case 'Text':
    return (<FaHashtag />);
  case 'Voice':
    return (<FaVolumeUp />);
  case 'Forum':
    return (<IoChatbubblesOutline />);
  case 'PublicThread':
  case 'NewsThread':
  case 'PrivateThread':
    return (<IoChatbubbleOutline />);
  case 'Stage':
    return (<TbBroadcast />);
  case 'News':
    return (<BsMegaphoneFill />);
  default:
    return (<MdQuestionMark />);
  }
};

const MentionCard = ({ children, color = 10798075, type }: PropsWithChildren<Props>) => {
  const rgbColor = decimalToRGB(color);
  const style: CSSProperties = {
    color: `#${color.toString(16)}`,
    backgroundColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.15)`,
    padding: '4px',
    borderRadius: '4px'
  };


  return(
    <strong style={style}>{type? channelIcon(ChannelType[type] as keyof typeof ChannelType):'@'}{children}</strong>
  );
};

export default MentionCard;