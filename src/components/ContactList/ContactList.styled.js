import styled from 'styled-components';

export const ContactsList = styled.ul`
  width: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 20px;
  border: 2px solid ;
  background-color: pink;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  &:not(:last-child) {
    margin-bottom: 28px;
  }

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  border: 2px solid #111;
  outline: none;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.18px;
  text-transform: uppercase;
  background-color: #ECF1F4;
`;
