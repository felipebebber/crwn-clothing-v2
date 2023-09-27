import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  
  h2 {
    font-size: 28px;
    margin-bottom: 25px;
    text-transform: uppercase;
    span {
      cursor: pointer;
    }
  }

  .capitalize {
    text-align: center;
    text-transform: capitalize;
  }
  
  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`;

