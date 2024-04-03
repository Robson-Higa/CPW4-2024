import { Input } from './styles'

type Props = {
  query: string
  setQuery: (newValue: string) => void
}

const SearchInput = ({ query, setQuery }: Props) =>
  <Input
    placeholder ='Digite a pesquisa'
    data-cy='search-input'
    value={query}
    onChange={(e) => setQuery(e.target.value)} />


export default SearchInput