import styled from 'styled-components';

export const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1000px;
  right: -1000px;
  z-index: -1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  transform: rotate(-15deg);
`;

export const Stripe = styled.div`
  min-width: 100%;
  height: 60px;
  margin-top: 1rem;
  opacity: 0.85;
`;

export const BackgroundLayer1 = styled(Stripe)`
  background: #F1C416;
`;

export const BackgroundLayer2 = styled(Stripe)`
  background: #E89B18;
`;

export const BackgroundLayer3 = styled(Stripe)`
  background: #D35617;
`;

export const BackgroundLayer4 = styled(Stripe)`
  background: #E43E32;
`;

export const BackgroundLayer5 = styled(Stripe)`
  background: #CB2F40;
`;
