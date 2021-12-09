/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      productID
      content
      createdAt
      updatedAt
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
