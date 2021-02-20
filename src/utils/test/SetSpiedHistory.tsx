import { useHistory } from 'react-router-dom';

let history: ReturnType<typeof useHistory>;

export type SpiedHistory = {
  goBack: jest.SpiedFunction<typeof history.goBack>
  push: jest.SpiedFunction<typeof history.push>
}

export function SetSpiedHistory({ outHistory }: { outHistory: {}}) {
  const history = useHistory();
  
  Object.assign(outHistory, {
    goBack: jest.spyOn(history, 'goBack'),
    push: jest.spyOn(history, 'push')
  })
  return null;
}
