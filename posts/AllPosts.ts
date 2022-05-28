import { IPost } from './IPost';
import { Indexable } from './Indexable';
import { goSettingsAndVars } from './goSettingsAndVars';
import { whyGo } from './whyGo';
import { databaseNull } from './databaseNull';

export const allPosts: IPost[] = [
    Indexable,
    goSettingsAndVars,
    whyGo,
    databaseNull,
];
