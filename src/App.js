import { CategoryList } from './components/category-list/categories.component'
import categories from './data/categories.json'

const App = () => {
  return <CategoryList categories={categories} />
}

export default App
