import type { EmbedField } from '../../../types/DiscordEmbed';
import Content from '../Content';
import './style.scss';

interface Props {
  field: EmbedField;
}

const MessageEmbedField = ({ field }: Props) => {
  return (
    <div className={`embed-field ${field.inline && 'inline'}`}>
      <h3>{field.name}</h3>
      <p><Content>{field.value}</Content></p>
    </div>
  );
};

export default MessageEmbedField;