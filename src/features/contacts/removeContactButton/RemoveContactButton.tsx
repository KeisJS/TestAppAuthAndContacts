import React from 'react';
import { ContactId } from '../interfaces';
import { useDispatch } from 'react-redux';
import Button from '../../../components/ui/button/Button';
import contactThunk from '../store/contactThunk';
import appRoutes from '../../../app/routes';

interface RemoveContactButtonProps {
  id: ContactId;
  lightHistory: {
    replace: (url: string) => void
  };
}

export default  function RemoveContactButton({ id, lightHistory }: RemoveContactButtonProps) {
  const dispatch = useDispatch();
  const onClick = async () => {
    await dispatch(contactThunk.remove(id));
    
    lightHistory.replace(appRoutes.contacts.path);
  }

  return (
    <>
      <Button primary onClick={ onClick }>
        Remove
      </Button>
    </>
  );
}

