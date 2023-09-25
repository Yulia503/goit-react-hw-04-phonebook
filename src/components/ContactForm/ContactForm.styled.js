import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormAddContact = styled(Form)`
  width: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-radius: 20px;
  border: 2px solid;
  background-color: pink;
`;
export const FormField = styled(Field)`
  width: 400px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 40px;
  border: 2px solid #111;
  outline: none;
  background-color: #ECF1F4;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  text-transform: uppercase;

  &:focus {
    border: 2px solid #31D0AA;
   &:hover {
    border: 2px solid #31D0AA;
  }
`;

export const ErrorMsgForm = styled(ErrorMessage)`
  color: red;
`;

export const AddBtn = styled.button`
  width: 400px;
  height: 64px;
  padding: 0;
  border: transparent;
  border-radius: 40px;
  background-color: #111;

  color: #f3f3f3;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;

  transition: background-color 250ms ease-in;
  &:focus {
    background-color: #404BBF;
  }
  &:hover {
    background-color: #404BBF;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #111;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;
`;
