import { useContext, Fragment, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";

import CategoryList from "../../components/category-list/category-list.component";

import { useParams } from "react-router-dom";

const Category = () => {
    let { category } = useParams();
    
    const { categoriesMap, categoryMapByCategories, getItemsByCategory } = useContext(CategoriesContext);

    useEffect(() => {
        getItemsByCategory(category);
    }, [categoriesMap]);

    return (
        <>
            {
                Object.keys(categoryMapByCategories).map(title => {
                    return (
                        <CategoryList key={title} title={title} list={categoryMapByCategories[title]} />
                    )
                })
            }
        </>
    )
}

export default Category;