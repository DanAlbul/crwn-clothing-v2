import { useContext } from 'react'
import { CategoryList } from '../../components/category-list/categories.component'
import { Outlet } from 'react-router-dom'
import categories from '../../data/categories.json'
import { UserContext } from '../../contexts/user.context'

const Home = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

  console.log(currentUser)
  return <CategoryList categories={categories} />
}

export default Home
