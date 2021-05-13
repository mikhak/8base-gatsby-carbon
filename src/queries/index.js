import gql from 'graphql-tag';

const POSTS_QUERY = gql`
  query {
    postsList {
      items {
        title
        text
        image {
          downloadUrl
        }
        id
        createdAt
      }
    }
  }
`;

export { POSTS_QUERY }

