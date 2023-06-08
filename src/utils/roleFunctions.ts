import ContrastColor from 'contrast-color';
import type { DiscordRole } from '../types/Discord';

export function getMainRoleColor(role: DiscordRole | null): readonly [string, string] {
  const roleColor = '#' + (role && role.color? role.color.toString(16):'99AAB5'); // #99AAB5 é o valor da cor padrão dos cargos do discord
  const contrastColor = new ContrastColor({ bgColor: roleColor, fgLightColor: '#F2F3F5', fgDarkColor: '#1E1F22' }).contrastColor();
  return [roleColor, contrastColor];
}

export function getHoistedRole(roles: DiscordRole[]): DiscordRole | null {
  if (!roles.length) return null;
  const maxPosition = Math.max(...roles.filter((role) => role.hoist).map((role) => role.position));
  return roles.find((roles) => roles.position === maxPosition) as DiscordRole; 
}