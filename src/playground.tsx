import { useEffect, useState } from 'react';
import { getView } from '@/router/manage-view';
import ReactPingIcon from '@/components/react-ping-icon';
import Nav from '@/components/nav';
import Router from '@/router';

function Playground() {
  // [반응성 데이터] 화면 전환을 위한 상태 변수 선언
  const [route, setRoute] = useState(getView);

  // [이펙트]
  // 외부 시스템인 브라우저와 클라이언트 앱인 리액트 사이에 동기화
  // 브라우저 주소창의 `?view=값`이 변경되면 이를 읽어옵니다.
  // 읽어온 값을 새로운 `route` 반응성 데이터 값으로 변경합니다.
  useEffect(() => {
    // popstate 이벤트 window 객체의 인터페이스
    // 브라우저 탐색 버튼을 누를 때 or 프로그래밍 방식의 네비게이션 history.back() 발생
    const handlePopState = () => {
      // ?view=tic-tac-toe
      // 'tic-tac-toe'
      setRoute(getView());

      // 변경된 ?view=[????] 읽기
      const params = new URLSearchParams(location.search);
      const nextRoute = params.get('view');

      // ?view=newRoute
      // 리액트 앱 동기화 (표시할 화면)
      // route 상태 변경
      if (nextRoute) setRoute(nextRoute);
    };

    // 이벤트 구독
    window.addEventListener('popstate', handlePopState);

    // 이벤트 구독 해지(정리)
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [route]);

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1 lang="en" className="flex items-center gap-2 font-normal text-react">
        <ReactPingIcon size={24} /> Playground
      </h1>
      <Nav onChangeRoute={setRoute} />
      <Router route={route} />
    </section>
  );
}

export default Playground;