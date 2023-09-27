import { useState, createContext, useEffect } from "react"; 
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({});

const getItemsCategory = (category, categories) => {
    const obj = {};
    if (typeof categories[category] !== 'undefined') {
        obj[category] = categories[category];
    }

    return obj;
}

const getItemsEachCategoryByQty = (number, categories) => {
    const categoryByQty = {};

    Object.keys(categories).map(title => {
        const category = categories[title];
        const categoryArray = [];

        for (let i = 0; i < number; i++) {
            categoryArray.push(category[i]);
        }

        categoryByQty[title] = categoryArray;
    });

    return categoryByQty;
}

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const [categoriesMapByQty, setCategoriesMapByQty] = useState({});
    const [categoryMapByCategories, setCategoryMapByCategories] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const getItemsCategoriesByQty = (number) => {
        setCategoriesMapByQty(getItemsEachCategoryByQty(number, categoriesMap));
    }
    
    const getItemsByCategory = (category) => {
        setCategoryMapByCategories(getItemsCategory(category, categoriesMap));
    }

    const value = {categoriesMap, categoriesMapByQty, categoryMapByCategories, getItemsCategoriesByQty, getItemsByCategory};

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}