import styled from 'styled-components';

const SCOrderSummary = styled.div`
  width: 100%;
  height: 327px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  color: #293845;
    h2 {
      margin: auto 30px;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
    };
    p {
      margin: auto 30px;
      font-size: 22px;
      line-height: 26px;
    };
`;

const SCBackToHome = styled.div`
  width: 225px;
  margin: 100px auto;
  height: 42px;
  background: #E8833A;
  border-radius: 3px;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    text-decoration: none;
    color: #FFFFFF;
  }
`;

export { SCOrderSummary, SCBackToHome };