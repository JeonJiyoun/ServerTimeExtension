// App.tsx
import * as React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import Content from './Content';
interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = props => {
  const { name } = props;
  return (
    <Content name={name}/> 
  );
}

export default App;