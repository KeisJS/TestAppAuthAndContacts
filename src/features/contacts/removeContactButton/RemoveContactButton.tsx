import React from 'react';
import { ContactId } from '../interfaces';
import { useDispatch } from 'react-redux';
import Button from '../../../components/ui/button/Button';
import contactThunk from '../store/contactThunk';

interface RemoveContactButtonProps {
  id: ContactId;
}

export default  function RemoveContactButton({ id }: RemoveContactButtonProps) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(contactThunk.remove(id));
  }

  return (
    <>
      <Button primary onClick={ onClick }>
        Remove
      </Button>
    </>
  );
}

