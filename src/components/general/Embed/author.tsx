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
          <span>{author.name}</span>
        </a>
      ):(
        <span>{author.name}</span>
      )}
    </div>
  );
}

export default MessageEmbedAuthor;