import type React from 'react';
import type { PropsWithChildren } from 'react';
import type { BaseLog } from '../../../types/Logger';
import type { DiscordUser } from '../../../types/Discord';
import './styles.scss';

interface Props {
  user: DiscordUser;
  logData: BaseLog;
}

const DefaultItem = ({ user, logData, children }: PropsWithChildren<Props>) => {
  return (
    <div className="main">
      <div className='log-head'>
        <div className={`log-type ${logData.logType}`}>{logData.category.toUpperCase()} | {logData.logType.toUpperCase()}</div>
        <div className='log-date'>{new Date(logData.time).toLocaleString('en-GB')}</div>
      </div>
      <div className="log-main">
        {children}
        <div className='log-author'>
          <div className="img-wrapper">
            {user.avatar? (
              <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="Discord Avatar" />
            ):(
              <img src={`https://cdn.discordapp.com/embed/avatars/${Number(user.discriminator) % 5}.png`} alt="Discord Avatar" />
            )}
          </div>
          <span>{user.username}#{user.discriminator}</span>
        </div>
      </div>
    </div>
  );
};

export default DefaultItem;