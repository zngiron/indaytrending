import { request } from 'graphql-request';

const url = process.env.API;

export const getStories = async (category, options = {}) => {
  try {
    const query = `
      query GET_STORIES($first: Int, $after: String, $last: Int, $before: String, $category: ID!, $categoryName: String) {
        posts(first: $first, after: $after, last: $last, before: $before, where: {categoryName: $categoryName, status: PUBLISH}) {
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id: databaseId
              slug
              title
              image: featuredImage {
                node {
                  featured: sourceUrl
                  medium: sourceUrl(size: MEDIUM)
                }
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
      first: options?.first,
      after: options?.after,
      last: options?.last,
      before: options?.before,
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
            node {
              featured: sourceUrl
              medium: sourceUrl(size: MEDIUM)
            }
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
        posts(first: $first, where: {
          dateQuery: {
            after: {
              year: 2019
              month: 1
            }
          }
          status: PUBLISH
        }) {
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

export const getFeed = async (entries) => {
  try {
    const query = `
      query GET_FEED($first: Int) {
        posts(first: $first, where: {
          status: PUBLISH
          dateQuery: {
            after: {
              year: 2019,
              month: 1
            }
          },
        }) {
          edges {
            node {
              id: databaseId
              slug
              published: date
              modified
              title
              content
              image: featuredImage {
                node {
                  featured: sourceUrl
                  medium: sourceUrl(size: MEDIUM)
                }
              }
            }
          }
        }
      }
    `;

    const variables = {
      first: entries || undefined,
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
