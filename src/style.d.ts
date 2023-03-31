import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            heading:string,
            text:string,
            white:string,
            black:string,
            helper:string,
            bg:string,
            footer_bg:string,
            btn:string,
            border:string,
            hr:string,
            gradient:string,
            shadow:string,
            shadowSupport:string,
        };
        media: { mobile: string, tab: string }
    }
}