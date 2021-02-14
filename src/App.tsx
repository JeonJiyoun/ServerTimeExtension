// App.tsx
import * as React from 'react';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import Content from './Content';
interface AppProps {
  contentdiv: string;
  current : Date;
}

const App: React.FC<AppProps> = props => {
  const { contentdiv, current } = props;
  return (
    <Content contentdiv={contentdiv} current = {current}/> 
  );
}

export default App;