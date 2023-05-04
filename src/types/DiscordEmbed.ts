export interface EmbedAuthor {
  name: string;
  url: string | null;
  icon_url: string | null;
  proxy_icon_url: string | null;
}

export interface EmbedField {
  name: string;
  value: string;
  inline: boolean;
}

export interface EmbedFooter {
  text: string;
  icon_url: string | null;
  proxy_icon_url: string | null;
}

export interface EmbedImage {
  url: string;
  proxy_url: string | null;
  height: number | null;
  width: number | null;
}

export interface EmbedProvider {
  name: string | null;
  url: string | null;
}

export interface EmbedThumbnail {
  url: string;
  proxy_url: string | null;
  height: number | null;
  width: number | null;
}

export interface EmbedVideo {
  url: string;
  proxy_url: string | null;
  height: number | null;
  width: number | null;
}

export interface Embed {
  author: EmbedAuthor | null;
  colour: number | null;
  description: string | null;
  fields: EmbedField[];
  footer: EmbedFooter | null;
  image: EmbedImage | null;
  kind: string | null;
  provider: EmbedProvider | null;
  thumbnail: EmbedThumbnail | null;
  timestamp: string | null;
  title: string | null;
  url: string | null;
  video: EmbedVideo | null;
}
