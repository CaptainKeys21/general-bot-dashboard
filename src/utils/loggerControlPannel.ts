import { atom } from 'nanostores';

export const selectedColections = atom<string[]>([]);

export const pageSize = atom<number>(10);
export const page = atom<number>(1);

export const initialDate = atom<number>(0);
export const finalDate = atom<number>(0);

