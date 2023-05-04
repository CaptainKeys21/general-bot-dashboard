import type { DiscordMessage, DiscordUser } from './Discord';

export type Log = CommandLog | MessageLog;

interface BaseLog {
  logType: string;
  category: string;
  message?: string;
  time: Date;
}

export interface CommandLog extends BaseLog {
  author: DiscordUser;
  category: 'commands';
  command: SlashCommand | PrefixCommand;
}

export interface MessageLog extends BaseLog {
  data: DiscordMessage;
  category: 'messages';
}

export interface PrefixCommand {
  name: string;
  args: string[];
}

export interface SlashCommand {
  id: string;
  name: string;
  type: number;
  resolved: {
    [key: string]: string;
  };
  options: string[];
  guild_id: string;
  target_id: string | null;
}
