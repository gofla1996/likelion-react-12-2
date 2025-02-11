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
  const filteredList = list.filter((item) => {
    // console.log(item.tags); // []
    // console.log(item.title); // string
    // console.log(item.description); // string

    if (
      item.title.includes(word) ||
      item.description.includes(word) ||
      item.tags.includes(word)
    ) {
      return true;
    } else {
      return false;
    }
  });

  console.log(filteredList);

  return (
    <section>
      <h3 className="sr-only">검색된 리스트</h3>
      <ul className={tm('flex flex-col gap-12')}>
        {list.map((item) => (
          <Card key={item.id} item={item} onUpdate={onUpdate} />
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
