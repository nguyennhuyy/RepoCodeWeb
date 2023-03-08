import { css, createGlobalStyle } from "styled-components";
import PoppinsThin from "./Poppins-Thin.ttf";
import PoppinsExtraLight from "./Poppins-ExtraLight.ttf";
import PoppinsLight from "./Poppins-Light.ttf";
import PoppinsRegular from "./Poppins-Regular.ttf";
import PoppinsMedium from "./Poppins-Medium.ttf";
import PoppinsSemiBold from "./Poppins-SemiBold.ttf";
import PoppinsBlack from "./Poppins-Black.ttf";
export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsThin}) format('woff');
        font-weight: 100;
        font-style: normal;
    }
		@font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsExtraLight}) format('woff');
        font-weight: 200;
        font-style: normal;
    }
			@font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
			@font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
			@font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
			@font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsSemiBold}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
    	@font-face {
        font-family: 'Poppins, sans-serif';
        src: local('Poppins, sans-serif'), local('Poppins, sans-serif'),
        url(${PoppinsBlack}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
