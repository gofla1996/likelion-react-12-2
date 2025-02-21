import { ErrorBoundary } from 'react-error-boundary';
import PrintError from './components/error';
import Playground from './playground';
import { ThemeProvider, ThemeSetters } from './contexts/theme';
// import { useCountStore } from './stores/count';

function App() {
  // 앱 상태 관리 (테마, 인증 : UI 전체 단위 공통 컴포넌트 제어)
  // 1. 속성(데이터) 하위 컴포넌트에 전달 x N (prop drilling)
  // 2. Context API (컨텍스트 생성 후, 값을 공급)
  // 3. 외부 상태 관리 라이브러리 활용 (Zustand, Redux or RTK)

  // 컴포넌트 Zustand 스토어 훅 사용 바인딩
  // const count = useCountStore(({ count }) => count);

  return (
    <ErrorBoundary FallbackComponent={PrintError}>
      <ThemeProvider>
        <ThemeSetters />
        {/* <output className="block text-6xl pl-4 mt-4">{count}</output> */}
        <Playground />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
