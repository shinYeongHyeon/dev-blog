import { IPost } from './IPost';
import { whyGo } from './whyGo';
import { goSettingsAndVars } from './goSettingsAndVars';
import { databaseNull } from './databaseNull';

export const allPosts: IPost[] = [goSettingsAndVars, whyGo, databaseNull];
