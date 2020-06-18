import { request } from 'graphql-request';

const url = process.env.API;

export const getStories = async (category) => {
  try {
    const query = `
      query GET_STORIES($first: Int, $after: String, $category: ID!, $categoryName: String) {
        posts(first: $first, after: $after, where: {categoryName: $categoryName, status: PUBLISH}) {
          pageInfo {
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id: databaseId
              slug
              title
              image: featuredImage {
                featured: sourceUrl
                medium: sourceUrl(size: MEDIUM)
              }
            }
          }
        }
        category(id: $category, idType: SLUG) {
          id: databaseId
          name
          slug
          description
        }
      }      
    `;

    const variables = {
      first: 12,
      category,
      categoryName: category,
    };

    return await request(url, query, variables);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPost = async (slug) => {
  try {
    const query = `
      query GET_POST($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id: databaseId
          slug
          published: date
          modified
          title
          content
          image: featuredImage {
            featured: sourceUrl
            medium: sourceUrl(size: MEDIUM)
          }
          categories {
            edges {
              node {
                id:databaseId
                slug
                name
              }
            }
          }
        }
      }
    `;

    const variables = {
      slug,
    };

    return await request(url, query, variables);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPosts = async () => {
  try {
    const query = `
      query GET_POST($first: Int) {
        posts(first: $first) {
          edges {
            node {
              slug
              modified
            }
          }
        }
      }
    `;

    const variables = {
      first: 10000,
    };

    return await request(url, query, variables);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCategories = async () => {
  try {
    const query = `
      query GET_CATEGORIES {
        categories {
          edges {
            node {
              slug
            }
          }
        }
      }
    `;

    return await request(url, query);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPage = async (slug) => {
  try {
    const query = `
      query GET_PAGE($slug: ID!) {
        page(id: $slug, idType: URI) {
          id
          slug
          title
          content
        }
      }
    `;

    const variables = {
      slug,
    };

    return await request(url, query, variables);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getPages = async () => {
  try {
    const query = `
      query GET_PAGES {
        pages {
          edges {
            node {
              slug
            }
          }
        }
      }
    `;

    return await request(url, query);
  } catch (error) {
    throw new Error(error.message);
  }
};
