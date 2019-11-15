import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::after,
    *::before{
        magrin : 0;
        padding: 0;
        box-sizing: inherit;
        -webkit-font-smoothing: antiliased;
        -moz-osx-font-smoothing: grayscale;
    }

    html{
        font-size : 62.5%; /* "for 100% 1rem = 16px" therfore now 1rem = 10px */
        box-sizing : border-box;
        --color-main: ${props => props.theme.colors.main};
        --color-mainDark: ${props => props.theme.colors.mainDark};
        --color-mainLight: ${props => props.theme.colors.mainLight};
        --color-mainLighter: ${props => props.theme.colors.mainLighter};
        --color-text: ${props => props.theme.colors.textColor};
        --color-white: ${props => props.theme.colors.whiteColor};
        --color-shadow: ${props => props.theme.colors.shadow};

        @media ${props => props.theme.mediaQueries.small} {
            font-size : 60%
        }

        @media ${props => props.theme.mediaQueries.smallest} {
            font-size : 55%
        }
    }

    body{
        font-family : 'Roboto, sans-serrif';
        font-weight : 400;
        line-height : 1.6;
    }

    button ,a , input, textarea{
        outline : none;
        text-decoration: none; 
        font-family : inherit;
    }

`;
