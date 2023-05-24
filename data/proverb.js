import { gql } from "@apollo/client";

export const PROVERB_CONTENT = gql`
  query MyQuery {
    wpPage(databaseId: { eq: 158 }) {
      id
      title
      proverb {
        title
        image {
          altText
          sourceUrl(size: MEDIUM_LARGE)
          srcSet
        }
      }
    }
  }
`;
