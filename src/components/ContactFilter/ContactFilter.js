import { FilterInputBox, FilterText } from './ContactFilter.styled';

export const ContactFilter = ({ filter, onContactFilter }) => {
  return (


    <>
      
      <FilterText>Find contacts by name</FilterText>
      <FilterInputBox
        
        type="text"
        value={filter}
        onChange={evt => {
          onContactFilter(evt.target.value);
        }}

      />
    </>
  );
}

