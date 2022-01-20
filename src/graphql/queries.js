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
      profileimage
      location
      createdAt
      updatedAt
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
        profileimage
        location
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
      price
      rating
      createdAt
      baseType
      coverImage
      images
      username
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
        price
        rating
        createdAt
        baseType
        coverImage
        images
        username
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByUsername = /* GraphQL */ `
  query ProductsByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByUsername(
      username: $username
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
        price
        rating
        createdAt
        baseType
        coverImage
        images
        username
        updatedAt
      }
      nextToken
    }
  }
`;
