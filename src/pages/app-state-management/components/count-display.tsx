import { useCountStore } from '@/stores/count';

function CountDisplay() {
  // 상태만 가지고 옵니다.
  // 화면 업데이트가 필요하니가
  // 상태가 변경되면 CountDisplay 컴포넌트는 리-렌더링 된다.

  const count = useCountStore(({ count }) => count);
  return <output className="font-black text-3xl">{count}</output>;
}

export default CountDisplay;
