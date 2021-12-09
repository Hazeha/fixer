/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($username: String) {
    onCreateProduct(username: $username) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($username: String) {
    onUpdateProduct(username: $username) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($username: String) {
    onDeleteProduct(username: $username) {
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
