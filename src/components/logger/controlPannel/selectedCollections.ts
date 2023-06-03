import { atom } from 'nanostores';

export const selectedColections = atom<string[]>([]);
export const pageSize = atom<number>(10);
export const page = atom<number>(1);

