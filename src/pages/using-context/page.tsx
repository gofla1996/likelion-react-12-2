import Title from '@/components/title';
import GrandParent from './components/grand-parent';
import React from 'react';

function UsingContextPage() {
  const [message, setMessage] = React.useState('Hello, GrandParent!');

  return (
    <>
      <Title>컨텍스트를 사용한 상태 공유</Title>
      <section>
        <h2>컨텍스트 활용</h2>
        <GrandParent message={message} setMessage={setMessage} />
      </section>
    </>
  );
}

export default UsingContextPage;
