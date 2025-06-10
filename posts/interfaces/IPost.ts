export interface IPost {
    title: string;
    listContents: string;
    contents: string; // markdown
    tags: string[];
    path: string;
    datetime: string;
    seriesId?: string;
    keywords?: string[];
}
