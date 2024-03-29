
import type { Embed } from '../../../types/DiscordEmbed';
import Content from '../Content';
import MessageEmbedAuthor from './author';
import MessageEmbedField from './fields';
import MessageEmbedFooter from './footer';
import './style.scss';
import MessageEmbedVideo from './video';

interface Props {
  embed: Embed;
}


const MessageEmbed = ( { embed }: Props ) => {
  const embedColor = embed.colour?.toString(16) || '#1e1f22';
  return (
    <div className="embed-main" style={{ borderLeft: `6px solid ${embedColor}`}}>
      {embed.provider && embed.provider.name && (
        <div className="embed-provider">
          {embed.provider.url? (
            <a href={embed.provider.url}><small>{embed.provider.name}</small></a>
          ):(
            <small>{embed.provider.name}</small>
          )} 
        </div>
      )}

      {embed.author && (<MessageEmbedAuthor author={embed.author} />)}

      {embed.title && (
        <div className="embed-title">
          {embed.url
            ?(<a href={embed.url}><h1>{embed.title}</h1></a>)
            :(<h1>{embed.title}</h1>)
          }
        </div>
      )}

      {!embed.video && embed.thumbnail && (
        <div className="embed-thubnail-wrapper">
          <img src={embed.thumbnail.url} alt="Embed Thumbnail" width={embed.thumbnail.width || undefined} height={embed.thumbnail.height || undefined}/>
        </div>
      )}

      {embed.description && (
        <div className="embed-description">
          <p><Content>{embed.description}</Content></p>
          {/* <p>{embed.description}</p> */}
        </div>
      )}

      {embed.fields.length > 0 && (
        <div className="embed-field-wrapper">
          {embed.fields.map((field, index) => (<MessageEmbedField field={field} key={index}/>))}
        </div>
      )}

      {embed.image && (
        <div className="embed-image-wrapper">
          <img src={embed.image.url} alt="Embed Image" width={embed.image.width || undefined} height={embed.image.height || undefined}/>
        </div>
      )}

      {embed.video && embed.thumbnail && (<MessageEmbedVideo url={embed.url} video={embed.video} thumb={embed.thumbnail} />)}
      
      {embed.footer && <MessageEmbedFooter footer={embed.footer }/>}
    </div>
  );
};

export default MessageEmbed;