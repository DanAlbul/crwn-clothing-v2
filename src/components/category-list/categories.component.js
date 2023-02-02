import { Category } from '../category-item/category.component'
import './categories.style.scss'

export const CategoryList = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return (
          <Category
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        )
      })} 
    </div>
  )
}
