import { CategoryList } from '../../components/category-list/categories.component'
import { Outlet } from 'react-router-dom'
import categories from '../../data/categories.json'

const Home = () => {
  return <CategoryList categories={categories} />
}

export default Home
