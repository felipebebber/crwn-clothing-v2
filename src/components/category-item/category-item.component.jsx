import { Container, BackgroundImage, BodyContainer } from './category-item.styles.jsx';

const CategoryItem = ({ category }) => {
    const { title, id, imageUrl } = category;
    
    return (
        <Container>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <BodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </BodyContainer>
        </Container>
    )
}

export default CategoryItem;