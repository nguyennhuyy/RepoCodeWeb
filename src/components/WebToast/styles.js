import styled, { keyframes } from "styled-components";
import { COLOR } from "~/utils/appConst";

const translate = keyframes`
	0% {
    transform: translateY(-300px);
	}
	10% {
    transform: translateY(0px);
	}
  	20% {
    transform: translateY(0px);
	}
  	30% {
    transform: translateY(0px);
	}
  	40% {
    transform: translateY(0px);
	}
  	70% {
    transform: translateY(0px);
	}
	100% {
    transform: translateY(-300px);
	}
`;
export const BoxError = styled.div`
  position: fixed;
  top: 35px;
  left: 10px;
  right: 10px;
  z-index: 999;
  background-color: ${COLOR.GREEN_0};
  border-radius: 5px;
  overflow: hidden;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  animation: ${translate} 5s forwards;
`;
export const BoxErrorWarning = styled.div`
  position: fixed;
  top: 35px;
  left: 10px;
  right: 10px;
  z-index: 999;
  background-color: ${COLOR.YELLOW_0};
  border-radius: 5px;
  overflow: hidden;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  animation: ${translate} 5s forwards;
`;
export const BoxErrorError = styled.div`
  position: fixed;
  top: 35px;
  left: 10px;
  right: 10px;
  z-index: 999;
  background-color: ${COLOR.RED_1};
  border-radius: 5px;
  overflow: hidden;
  padding: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  animation: ${translate} 5s forwards;
`;
