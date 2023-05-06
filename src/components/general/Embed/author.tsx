import type { EmbedAuthor } from '../../../types/DiscordEmbed';
import './style.scss';

interface Props {
  author: EmbedAuthor;
}

const MessageEmbedAuthor = ({ author }: Props) => {
  return (
    <div className="embed-author">
      {author.proxy_icon_url && (
        <img className='embed-author-icon' src={author.proxy_icon_url} alt='author icon'/>
      )}
      {author.url? (
        <a href={author.url}>
          <h5>{author.name}</h5>
        </a>
      ):(
        <h5>{author.name}</h5>
      )}
    </div>
  );
};

export default MessageEmbedAuthor;