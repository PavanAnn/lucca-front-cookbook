// CategoryContainer.js

import React from 'react';
import { Container, CategoryColumn, CategoryTitle, ItemList, Item } from './styles';
import { useNavigate } from 'react-router-dom';


const CategoryContainer = () => {

  const navigate = useNavigate()

  const categories = [
    {
      name: 'Zustand',
      items: [
        { link: '/zustand', name: 'Zustand 1' },
      ],
    },
    {
      name: 'Category 2',
      items: [
        { link: '/category2/item1', name: 'Item 1' },
        { link: '/category2/item2', name: 'Item 2' },
        // Add more items as needed
      ],
    },
    {
      name: 'Category 3',
      items: [
        { link: '/category3/item1', name: 'Item 1' },
        { link: '/category3/item2', name: 'Item 2' },
        // Add more items as needed
      ],
    },
  ];

  const redirect = (link: string) => {
    navigate(link)
  };

  return (
    <Container>
      {categories.map((category, index) => (
        <CategoryColumn key={index}>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ItemList>
            {category.items.map((item, itemIndex) => (
              <Item key={itemIndex} onClick={() => redirect(item.link)}>
                {item.name}
              </Item>
            ))}
          </ItemList>
        </CategoryColumn>
      ))}
    </Container>
  );
};

export default CategoryContainer;
