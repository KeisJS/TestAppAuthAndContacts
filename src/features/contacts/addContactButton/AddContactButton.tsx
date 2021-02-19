import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/ui/button/Button';
import appRoutes from '../../../app/routes';

function AddContactButton() {
  const history = useHistory();
  const onClick = useCallback(() => {
    history.push(`${ appRoutes.contacts.child.editNew.path }`)
  }, [history]);
  
  return (
    <Button primary onClick={ onClick }>
      Add new
    </Button>
  )
}

export default AddContactButton;
