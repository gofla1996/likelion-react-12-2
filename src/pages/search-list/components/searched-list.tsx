import { tm } from '@/utils/tw-merge';
import { type ColorMoodItem } from '../types';
import Card from './card';

interface SearchedListProps {
  list: ColorMoodItem[];
  query: string;
  onUpdate: (item: ColorMoodItem, isFavorited: boolean) => void;
}

function SearchedList({ list, onUpdate, query }: SearchedListProps) {
  // 사용자가 입력한 검색어(query) 소문자화
  const word = query.toLowerCase();

  // [상태 -> 속성(읽기전용) ] list
  // [파생된 상태] filteredList = query를 기반으로 하여 list를 순환한 후, 새 리스트를 반환
  const filteredList = list.filter(
    (item) =>
      item.title.includes(word) ||
      item.description.includes(word) ||
      item.tags.includes(word)
  );

  const isEmpty = filteredList.length === 0;

  console.log({ isEmpty });

  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      {isEmpty && (
        <p className="text-xl text-slate-700">
          검색 결과가 없습니다. 다른 검색어를 입력해주세요.
        </p>
      )}
      {!isEmpty && (
        <ul className={tm('flex flex-col gap-12')}>
          {filteredList.map((item) => (
            <Card key={item.id} item={item} onUpdate={onUpdate} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchedList;
