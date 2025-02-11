import { useState } from 'react';
import SearchForm from './components/form';
import SearchedList from './components/searched-list';
import colorMoodList from './data/color-mood-list';
import { ColorMoodItem } from './types';

function SearchListPage() {
  const [list] = useState<ColorMoodItem[]>(colorMoodList);

  return (
    <section>
      <h3 className="text-2xl font-medium text-react">카드 검색 리스트</h3>
      <SearchForm />
      <SearchedList list={list} />
    </section>
  );
}

export default SearchListPage;
