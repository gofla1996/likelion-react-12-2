import { useState } from 'react';
import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';
import colorMoodList from './data/color-mood-list';
import { type ColorMoodItem } from './types';
import { tm } from '@/utils/tw-merge';
import { getQueryParam } from './utils/query-param';

function SearchListPage() {
  const [list, setList] = useState<ColorMoodItem[]>(colorMoodList);
  // 지연된 초기화(lazy.initializer)
  // useState() 훅에 설정된 함수
  const [query, setQuery] = useState(() => getQueryParam() ?? '');

  const handleUpdateList = (item: ColorMoodItem, isFavorited: boolean) => {
    const nextList = list.map((it) => {
      return it.id === item.id ? { ...it, isFavorited } : it;
    });

    setList(nextList);
  };

  return (
    <section className={tm('flex flex-col items-center')}>
      <h2 className="text-2xl font-medium text-react">카드 검색 리스트</h2>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchedList query={query} list={list} onUpdate={handleUpdateList} />
    </section>
  );
}

export default SearchListPage;
