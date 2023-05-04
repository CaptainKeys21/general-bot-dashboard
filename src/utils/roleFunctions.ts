import ContrastColor from "contrast-color";
import type { IDiscordRole } from "../types/Discord";

export function getMainRoleColor(role: IDiscordRole): readonly [string, string] {
  const roleColor = '#' + (role.color? role.color.toString(16):'99AAB5'); // #99AAB5 é o valor da cor padrão dos cargos do discord
  const contrastColor = new ContrastColor({ bgColor: roleColor, fgLightColor: '#F2F3F5', fgDarkColor: "#1E1F22" }).contrastColor();

  return [roleColor, contrastColor]
}

export function getHoistedRole(roles: IDiscordRole[]): IDiscordRole {
  const maxPosition = Math.max(...roles.filter((role) => role.hoist).map((role) => role.position));
  return roles.find((roles) => roles.position === maxPosition) as IDiscordRole; 
}