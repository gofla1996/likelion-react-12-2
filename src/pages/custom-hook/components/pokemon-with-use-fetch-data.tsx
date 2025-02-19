import { tm } from '@/utils/tw-merge';
import Loading from '@/pages/memo-list/components/loading';
import { useFetchData } from '@/hooks/use-fetch-data';
import type { Pokemon as PokemonSingle } from '@/types/pokemon';

function Pokemon() {
  // 포켓몬 개별 정보 가져오기
  // 'https://pokeapi.co/api/v2/pokemon/1'

  // const loading = true;
  // const error = null;
  // const data = null;

  const { loading, error, data } = useFetchData<PokemonSingle>(
    'https://pokeapi.co/api/v2/pokemon/25'
  );

  return (
    <figure
      className={tm(
        'flex gap-5 justify-center',
        'border-4 border-black/10',
        'rounded-full p-6',
        'transition-colors duration-250 ease-in-out',
        'hover:border-black'
      )}
    >
      {/* <Loading size={24} label="데이터 로딩 중..." className="text-black/50" /> */}
      {loading && <Loading size={48} label="포켓몬 데이터 로딩 중..." />}
      {error && <div role="alert">{error.message}</div>}
      {data && (
        <pre>{JSON.stringify((data as { cries: [] }).cries, null, 2)}</pre>
      )}
    </figure>
  );
}

export default Pokemon;
