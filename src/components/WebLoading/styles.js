import styled, { keyframes } from "styled-components";
import { COLOR } from "~/utils/appConst";

export const BoxLoader = styled.div({
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: COLOR.RGB_5,
	zIndex: 999
});
export const Loader = styled.div({
	width: 64,
	height: 64,
	borderRadius: 999,
	perspective: 800
});
const rotateOne = keyframes`
      0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`;
export const ItemOne = styled.div`
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	left: 0%;
	top: 0%;
	animation: ${rotateOne} 1s linear infinite;
	border-bottom: 3px solid #0f70e6;
`;

const rotateTwo = keyframes`
   0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
`;
export const ItemTwo = styled.div`
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	right: 0%;
	top: 0%;
	animation: ${rotateTwo} 1s linear infinite;
	border-bottom: 3px solid #0f70e6;
`;

const rotateThree = keyframes`
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`;
export const ItemThree = styled.div`
	position: absolute;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	right: 0%;
	bottom: 0%;
	animation: ${rotateThree} 1s linear infinite;
	border-bottom: 3px solid #0f70e6;
`;
