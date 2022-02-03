export interface IPageConfig {
    build: (...args: Array<string>) => string;
    pattern: string;
    title?: string;
}
export declare class PageConfigItem {
    props: IPageConfig;
    constructor(props: IPageConfig);
}
