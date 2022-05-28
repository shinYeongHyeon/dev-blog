import { IPost } from './IPost';
import { OptionalChaining } from './OptionalChaining';
import { SimpleParseInt } from './SimpleParseInt';
import { ValidationPipe } from './ValidationPipe';
import { Indexable } from './Indexable';
import { goSettingsAndVars } from './goSettingsAndVars';
import { whyGo } from './whyGo';
import { databaseNull } from './databaseNull';

export const allPosts: IPost[] = [
    OptionalChaining,
    SimpleParseInt,
    ValidationPipe,
    Indexable,
    goSettingsAndVars,
    whyGo,
    databaseNull,
];
