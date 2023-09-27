import { CategoryContainer, CategoryBackgroundImage, CategoryBodyContainer } from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
    const { title, id, imageUrl } = category;
    
    return (
        <CategoryContainer>
            <CategoryBackgroundImage style={{backgroundImage: `url(${imageUrl})`}}></CategoryBackgroundImage>
            <CategoryBodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </CategoryBodyContainer>
        </CategoryContainer>
    )
}

export default CategoryItem;