import type { EmbedField } from '../../../types/DiscordEmbed';
import './style.scss';

interface Props {
  field: EmbedField;
}

const MessageEmbedField = ({ field }: Props) => {
  return (
    <div className={`embed-field ${field.inline && 'inline'}`}>
      <h3>{field.name}</h3>
      <p>{field.value}</p>
    </div>
  );
}

export default MessageEmbedField;