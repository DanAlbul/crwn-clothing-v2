import './category.style.scss'

export const Category = ({ title, imageUrl }) => {
  return (
    <div className='category-container'>
      <div
        className='background-image'
        alt={title}
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
