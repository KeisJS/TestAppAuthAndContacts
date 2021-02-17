import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/ui/button/Button';
import { routes } from 'features/routes';

function AddContactButton() {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`${ routes.contacts.pattern }/edit/:id`)
  }, [history]);
  
  return (
    <Button primary onClick={ onClick }>
      Add new
    </Button>
  )
}

export default AddContactButton;
