import { IPost } from './IPost';
import { GoMap } from './GoMap';
import { GoArray } from './GoArray';
import { GoConditions } from './GoConditions';
import { GoDefer } from './GoDefer';
import { GoFunctions } from './GoFunctions';
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
    GoMap,
    GoArray,
    GoConditions,
    GoDefer,
    GoFunctions,
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
