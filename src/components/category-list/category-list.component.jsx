import ProductCard from "../product-card/product-card.component";

import { useNavigate } from "react-router-dom";

import { CategoryPreviewContainer, ProductsContainer } from "./category-list.styles";

const CategoryList = ({ title, list, linkToCategory = false }) => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/shop/${title}`);
    }

    return (
        <CategoryPreviewContainer>
            {linkToCategory ? 
                <h2 className="title"><span onClick={handleNavigation}>{title}</span></h2>
                : <h2 className="capitalize">{title}</h2>
            }
            <ProductsContainer>
                {list.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </CategoryPreviewContainer>
    )
}

export default CategoryList;