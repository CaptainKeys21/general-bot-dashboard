import type { Embed } from './DiscordEmbed';

export interface DiscordUser {
  id: string;
  avatar: string | null;
  bot: boolean;
  discriminator: string;
  username: string;
  public_flags: number;
  banner: string | null;
  accent_color: string | null;
}

export interface DiscordMember {
  deaf: boolean;
  guild_id: string;
  joined_at: Date;
  mute: boolean;
  nick: string | null;
  roles: DiscordRole[];
  user: DiscordUser;
  pending: boolean;
  premium_since: Date | null;
  permissions: number | null;
  avatar: string | null;
  communication_disables_until: Date | null;
}

export interface DiscordRole {
  id: string;
  guild_id: string;
  color: number;
  hoist: boolean;
  managed: boolean;
  mentionable: boolean;
  name: string;
  permitions: string;
  position: number;
  tags: {
    bot_id: string | null;
    integration_id: string | null;
  };
  icon: string | null;
  unicode_emoji: string | null;
}

export interface DiscordMessage {
  id: string;
  attachments: DiscordAttachment[];
  author: DiscordUser;
  channel_id: string;
  content: string;
  edited_timestamp: Date | null;
  embeds: Embed[];
  guild_id: string | null;
  kind: MessageType;
  member: DiscordMember | null;
  mention_everyone: boolean;
  mention_roles: string[];
  mention_channels: {
    id: string;
    guild_id: string;
    kind: ChannelType;
    name: string;
  }[];
  mentions: DiscordUser[];
  nonce: string;
  pinned: boolean;
  reactions: MessageReaction[];
  timestamp: string;
  tts: boolean;
  webhook: string | null;
  activity: {
    kind: MessageActivityKind;
    party_id: string | null;
  } | null;
  application: {
    id: string;
    cover_image: string | null;
    description: string;
    icon: string | null;
    name: string;
  } | null;
  message_reference: {
    message_id: string | null;
    channel_id: string;
    guild_id: string | null;
  } | null;
  flags: number;
  sticker_items: {
    id: string;
    name: string;
    format_type: StickerFormatType;
  }[];
  referenced_message: DiscordMessage | null;
  interaction: {
    id: string;
    kind: InteractionType;
    name: string;
    user: DiscordUser;
  };
  components: ActionRow[];
}

export interface MessageReaction {
  count: number;
  me: boolean;
  reaction_type: ReactionType;
}

export type ReactionType =
  | {
      animated: boolean;
      id: string;
      name: string | null;
    }
  | string;

export interface DiscordAttachment {
  id: number;
  filename: string;
  height: number | null;
  proxy_url: string;
  size: number;
  url: string;
  width: number | null;
  content_type: string | null;
  ephemeral: boolean;
}

export interface ActionRow {
  kind: ComponentType;
  components: ActionRowComponent[];
}

export interface DiscordButton {
  kind: ComponentType;
  style: ButtonStyle;
  label: string | null;
  emoji: ReactionType | null;
  custom_id: string | null;
  url: string | null;
  disabled: boolean;
}

export interface DiscordSelectMenu {
  kind: ComponentType;
  placeholder: string | null;
  custom_id: string | null;
  min_values: number | null;
  max_values: number | null;
  options: {
    label: string;
    value: string;
    description: string | null;
    emoji: ReactionType | null;
    default: boolean;
  }[];
  values: string[];
}

export interface DiscordInputText {
  kind: ComponentType;
  custom_id: string;
  value: string;
}

export type ActionRowComponent = DiscordButton | DiscordSelectMenu | DiscordInputText;

export enum InteractionType {
  Ping,
  ApplicationCommand,
  MessageComponent,
  Autocomplete,
  ModalSubmit,
  Unknown,
}

export enum MessageType {
  Regular,
  GroupRecipientAddition,
  GroupRecipientRemoval,
  GroupCallCreation,
  GroupNameUpdate,
  GroupIconUpdate,
  PinsAdd,
  MemberJoin,
  NitroBoost,
  NitroTier1,
  NitroTier2,
  NitroTier3,
  ChannelFollowAdd,
  GuildDiscoveryDisqualified,
  GuildDiscoveryRequalified,
  GuildDiscoveryGracePeriodInitialWarning,
  GuildDiscoveryGracePeriodFinalWarning,
  ThreadCreated,
  InlineReply,
  ChatInputCommand,
  ThreadStarterMessage,
  GuildInviteReminder,
  ContextMenuCommand,
  AutoModerationAction,
  Unknown,
}

export enum ChannelType {
  Text,
  Private,
  Voice,
  Category,
  News,
  NewsThread,
  PublicThread,
  PrivateThread,
  Stage,
  Directory,
  Forum,
  Unknown,
}

export enum MessageActivityKind {
  JOIN,
  SPECTATE,
  LISTEN,
  JOIN_REQUEST,
  Unknown,
}

export enum StickerFormatType {
  Png,
  Apng,
  Lottie,
  Unknown,
}

export enum ComponentType {
  ActionRow,
  Button,
  SelectMenu,
  InputText,
  Unknown,
}

export enum ButtonStyle {
  Primary,
  Secondary,
  Success,
  Danger,
  Link,
  Unknown,
}
