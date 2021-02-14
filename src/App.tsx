// App.tsx
import * as React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import Content from './Content';
interface AppProps {
  name: string;
  contentdiv: string;
}

const App: React.FC<AppProps> = props => {
  const { name, contentdiv } = props;
  return (
    <Content name={name} contentdiv={contentdiv}/> 
  );
}

export default App;