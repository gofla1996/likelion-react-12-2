import { ColorMoodItem } from '../types';
import Card from './card';

interface SearchedListProps {
  list: ColorMoodItem[];
}

function SearchedList({ list }: SearchedListProps) {
  return (
    <section>
      <h3 className="sr-only">검색 리스트</h3>
      <ul>
        {list.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default SearchedList;
