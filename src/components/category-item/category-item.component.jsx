import { Container, BackgroundImage, BodyContainer } from './category-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { title, imageUrl, route } = category;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(route);
    }
    
    return (
        <Container onClick={handleNavigate}>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <BodyContainer>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </BodyContainer>
        </Container>
    )
}

export default CategoryItem;