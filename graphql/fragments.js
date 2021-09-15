import { gql } from '@apollo/client';

export const CATEGORY_FRAGMENT = gql`
  fragment Category on Category {
    id: databaseId,
    slug,
    name,
    description
  } 
`;

export const POST_FRAGMENT = gql`
  fragment Post on Post {
    id: databaseId
    slug
    title
    image: featuredImage {
      node {
        featured: sourceUrl
        thumbnail: sourceUrl(size: THUMBNAIL)
      }
    }
  }
`;
