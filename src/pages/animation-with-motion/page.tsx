import { Box } from '@mynaui/icons-react';
import { useEffect, useRef } from 'react';
import AnimationBox from './components/animation-box';
import MotionComponent from './components/motion-component';
import ReplayAnimation from './components/replay-animation';
import StaggerList from './components/stagger-list';
import Title from '../../components/title';

function AnimationWithMotionPage() {
  <Title>Motion 라이브러리 활용</Title>;

  // 하위 컴포넌트 DOM 요소 참조를 위한 참조(ref) 객체
  const childDomRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const childDomButtonElement = childDomRef.current;

    if (childDomButtonElement) {
      childDomButtonElement.focus();
    }
  });

  return (
    <section className="flex flex-col items-start gap-7">
      <h2 className="text-2xl font-medium">
        애니메이션 - Motion 라이브러리 활용
      </h2>

      <ReplayAnimation>
        <MotionComponent />
      </ReplayAnimation>

      <ReplayAnimation>
        <StaggerList />
      </ReplayAnimation>

      <ReplayAnimation>
        <AnimationBox ref={childDomRef}>
          <Box size={48} />
        </AnimationBox>
      </ReplayAnimation>
    </section>
  );
}

export default AnimationWithMotionPage;
