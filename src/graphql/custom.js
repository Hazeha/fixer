export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        category
      }
      nextToken
    }
  }
`;