import { useState, useEffect } from 'react';
import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodItem } from './types';
import { tm } from '@/utils/tw-merge';
import { getQueryParam } from './utils/query-param';

const getQueryState = () => getQueryParam() ?? '';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);
  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    const nextList = list.map((it) => {
      return it.id === item.id ? { ...it, isFavorited } : it;
    });

    setList(nextList);
  };

  // 지연된 초기화(lazy.initializer)
  // useState() 훅에 설정된 함수
  const [query, setQuery] = useState(getQueryState);

  // 이펙트 처리
  // popstate 이베느 구독/해지
  useEffect(() => {
    // 이벤트 핸들러 (동일 참조)
    const handlePopState = () => {
      // 브라우저 popstate 이벤트가 감지될 때
      // 리액트 앱의 query 상태 업데이트 -> UI 화면 업데이트
      // setQuery(getQueryState());
      // setQuery(() => getQueryState());
      setQuery(getQueryState);

      // setState(nextState)
      // setState((prevState) => nextState)
    };

    // 이벤트 구독
    globalThis.addEventListener('popstate', handlePopState);

    // 이벤트 해지
    return () => {
      globalThis.removeEventListener('popstate', handlePopState);
    };
  }, []);
  return (
    <section className={tm('flex flex-col items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList query={query} list={list} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
