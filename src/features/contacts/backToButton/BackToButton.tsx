import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/ui/button/Button';

function BackToButton() {
  const history = useHistory();
  
  return (
    <Button primary onClick={ () => history.goBack() } >
      Back
    </Button>
  )
}

export default BackToButton;
