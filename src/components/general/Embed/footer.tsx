import type { EmbedFooter } from '../../../types/DiscordEmbed';
import Content from '../Content';
import './style.scss';

interface Props {
  footer: EmbedFooter;
}

const MessageEmbedFooter = ({ footer }: Props) => {
  return (
    <div className='embed-footer'>
      {footer.icon_url && (<img src={footer.icon_url} alt="Embed footer icon" />)}
      <small><Content>{footer.text}</Content></small>
    </div>
  );
};

export default MessageEmbedFooter;