import './CategoryWrapper.scss'
import CategoryItem from '../CategoryItem/CategoryItem'

const CategoryWrapper = ({ categories }) => {

  return <div className="categories-container">
    {categories.map(category => (
      <CategoryItem key={category.id} category={category} />
    ))}

  </div>
}

export default CategoryWrapper