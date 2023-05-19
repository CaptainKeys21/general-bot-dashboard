import React from 'react';
import { StickerFormatType, StickerItem } from '../../../types/Discord';
import './styles.scss';

interface Props {
  sticker: StickerItem;
}

const MessageSticker = ({ sticker }: Props) => {
  return (
    <div className="message-sticker">
      <img src={`https://media.discordapp.net/stickers/${sticker.id}.webp?size=160`} alt="Message Sticker" />
      <small>{sticker.name} | {StickerFormatType[sticker.format_type].toLowerCase()}</small>
    </div>
  );
};

export default MessageSticker;