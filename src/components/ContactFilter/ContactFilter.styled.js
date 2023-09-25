import styled from 'styled-components';

export const FilterInputBox = styled.input`
  width: 300px;
  padding: 20px 30px 20px 30px;
  border-radius: 20px;
  border: 1px solid;
  outline: none;
  margin-bottom: 20px;
  background-color: #ECF1F4;
  color: #2E2F42;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.6px;

  &:focus {
    border: 2px solid #31D0AA;
  }
   &:hover {
    border: 2px solid #31D0AA;
  }
`;

export const FilterText = styled.p`
  color: #434455;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.6px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

