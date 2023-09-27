import { useContext, Fragment, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryList from "../../components/category-list/category-list.component";

const Shop = () => {
    const { categoriesMap, categoriesMapByQty, getItemsCategoriesByQty } = useContext(CategoriesContext);

    useEffect(() => {
        getItemsCategoriesByQty(4);
    }, [categoriesMap]);

    return (
        <>
            {
                Object.keys(categoriesMapByQty).map(title => {
                    return (
                        <CategoryList key={title} title={title} linkToCategory={true} list={categoriesMapByQty[title]} />
                    )
                })
            }
        </>
    )
}

export default Shop;