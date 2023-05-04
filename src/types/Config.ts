export interface IGeneralConfig {
  name: string;
  config_type: string;
  data?: string;
}

export interface IKeynamedGeneralConfig {
  [k: string]: IKeynamedGeneralProperties;
}

export interface IKeynamedGeneralProperties { 
  config_type: string; 
  data?: string;
  label?: string
}

export interface ICommandAllowedIdsConfig {
  name: string;
  config_type: string;
  allowed: {
    users: string[];
    roles: string[];
  };
}

export interface IKeynamedCAIConfig {
  [k: string]: {
    config_type: string;
    allowed: IAllowedData;
  };
}

export interface IAllowedData {
  users: string[];
  roles: string[];
}
