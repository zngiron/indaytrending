import { gql } from '@apollo/client';
import { POST_FRAGMENT, CATEGORY_FRAGMENT } from './fragments';

export const POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  ${CATEGORY_FRAGMENT}

  query POSTS_QUERY($first: Int $category: String) {
    posts(first: $first, where: {
      categoryName: $category,
    }) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ...Post
          categories(where: {
            exclude: 2
          }) {
            edges {
              node {
                id: databaseId,
                name
              }
            }
          }
        }
      }
    }
    categories {
      edges {
        node {
          ...Category
        }
      }
    }
  }
`;

export const POST_QUERY = gql`
  ${POST_FRAGMENT}
  ${CATEGORY_FRAGMENT}

  query POST_QUERY($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ...Post
      content
      categories(where: {
        exclude: 2
      }) {
        edges {
          node {
            id: databaseId,
            name
            }
        }
      }
    }
    categories {
      edges {
        node {
          ...Category
        }
      }
    }
  }
`;

export const CATEGORIES_QUERY = gql`
  ${CATEGORY_FRAGMENT}
  
  query CATEGORIES_QUERY {
    categories {
      edges {
        node {
          ...Category
        }
      }
    }
  }
`;
