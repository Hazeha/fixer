/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($username: String) {
    onCreateProduct(username: $username) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($username: String) {
    onUpdateProduct(username: $username) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($username: String) {
    onDeleteProduct(username: $username) {
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
