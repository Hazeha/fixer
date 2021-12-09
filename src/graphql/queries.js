/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      firstname
      lastname
      verified
      location
      rating
      createdAt
      updatedAt
      products {
        items {
          id
          name
          discription
          category
          priceDay
          priceWeek
          rating
          username
          createdAt
          baseType
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        firstname
        lastname
        verified
        location
        rating
        createdAt
        updatedAt
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      discription
      category
      priceDay
      priceWeek
      rating
      comments {
        items {
          id
          productID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      username
      createdAt
      baseType
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        discription
        category
        priceDay
        priceWeek
        rating
        comments {
          nextToken
        }
        username
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productSearchByName = /* GraphQL */ `
  query ProductSearchByName(
    $baseType: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productSearchByName(
      baseType: $baseType
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        discription
        category
        priceDay
        priceWeek
        rating
        comments {
          nextToken
        }
        username
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productSearchByCategory = /* GraphQL */ `
  query ProductSearchByCategory(
    $baseType: String
    $category: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productSearchByCategory(
      baseType: $baseType
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        discription
        category
        priceDay
        priceWeek
        rating
        comments {
          nextToken
        }
        username
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productByCategory = /* GraphQL */ `
  query ProductByCategory(
    $category: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByCategory(
      category: $category
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        discription
        category
        priceDay
        priceWeek
        rating
        comments {
          nextToken
        }
        username
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productByPriceDay = /* GraphQL */ `
  query ProductByPriceDay(
    $baseType: String
    $priceDay: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByPriceDay(
      baseType: $baseType
      priceDay: $priceDay
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        discription
        category
        priceDay
        priceWeek
        rating
        comments {
          nextToken
        }
        username
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productByPriceWeek = /* GraphQL */ `
  query ProductByPriceWeek(
    $baseType: String
    $priceWeek: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productByPriceWeek(
      baseType: $baseType
      priceWeek: $priceWeek
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        discription
        category
        priceDay
        priceWeek
        rating
        comments {
          nextToken
        }
        username
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
