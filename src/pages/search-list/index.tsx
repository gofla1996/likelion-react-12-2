import Card from './components/card';
import SearchForm from './components/search-form';
import SearchedList from './components/searched-list';

function SearchListPage() {
  return (
    <section>
      <h3 className="text-2xl font-medium text-react">카드 검색 리스트</h3>
      <SearchForm />
      <SearchedList />
      <Card />
    </section>
  );
}

export default SearchListPage;
