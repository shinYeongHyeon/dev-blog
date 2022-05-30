import { IPost } from './IPost';
import { GraphQLWebSocket } from './GraphQLWebSocket';
import { LessCode } from './LessCode';
import { OptionalChaining } from './OptionalChaining';
import { SimpleParseInt } from './SimpleParseInt';
import { ValidationPipe } from './ValidationPipe';
import { Indexable } from './Indexable';
import { goSettingsAndVars } from './goSettingsAndVars';
import { whyGo } from './whyGo';
import { databaseNull } from './databaseNull';

export const allPosts: IPost[] = [
    GraphQLWebSocket,
    LessCode,
    OptionalChaining,
    SimpleParseInt,
    ValidationPipe,
    Indexable,
    goSettingsAndVars,
    whyGo,
    databaseNull,
];
