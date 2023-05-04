import type { EmbedFooter } from '../../../types/DiscordEmbed';
import './style.scss';

interface Props {
  footer: EmbedFooter;
}

const MessageEmbedFooter = ({ footer }: Props) => {
  return (
    <div className='embed-footer'>
      {footer.icon_url && (<img src={footer.icon_url} alt="Embed footer icon" />)}
      <small>{footer.text}</small>
    </div>
  );
}

export default MessageEmbedFooter;