/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createComment = /* GraphQL */ `mutation CreateComment(
  $condition: ModelCommentConditionInput
  $input: CreateCommentInput!
) {
  createComment(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    post {
      code
      content
      createdAt
      id
      images
      likes
      owner
      updatedAt
      userId
      __typename
    }
    postId
    updatedAt
    user {
      bio
      coverImage
      email
      location
      name
      profilePicture
      username
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $condition: ModelPostConditionInput
  $input: CreatePostInput!
) {
  createPost(condition: $condition, input: $input) {
    code
    comments {
      nextToken
      __typename
    }
    content
    createdAt
    createdBy {
      bio
      coverImage
      email
      location
      name
      profilePicture
      username
      __typename
    }
    id
    images
    likes
    owner
    updatedAt
    user {
      bio
      coverImage
      createdAt
      email
      id
      location
      name
      owner
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    bio
    coverImage
    createdAt
    email
    id
    location
    name
    owner
    posts {
      nextToken
      __typename
    }
    profileOwner
    profilePicture
    updatedAt
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $condition: ModelCommentConditionInput
  $input: DeleteCommentInput!
) {
  deleteComment(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    post {
      code
      content
      createdAt
      id
      images
      likes
      owner
      updatedAt
      userId
      __typename
    }
    postId
    updatedAt
    user {
      bio
      coverImage
      email
      location
      name
      profilePicture
      username
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $condition: ModelPostConditionInput
  $input: DeletePostInput!
) {
  deletePost(condition: $condition, input: $input) {
    code
    comments {
      nextToken
      __typename
    }
    content
    createdAt
    createdBy {
      bio
      coverImage
      email
      location
      name
      profilePicture
      username
      __typename
    }
    id
    images
    likes
    owner
    updatedAt
    user {
      bio
      coverImage
      createdAt
      email
      id
      location
      name
      owner
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    bio
    coverImage
    createdAt
    email
    id
    location
    name
    owner
    posts {
      nextToken
      __typename
    }
    profileOwner
    profilePicture
    updatedAt
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $condition: ModelCommentConditionInput
  $input: UpdateCommentInput!
) {
  updateComment(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    post {
      code
      content
      createdAt
      id
      images
      likes
      owner
      updatedAt
      userId
      __typename
    }
    postId
    updatedAt
    user {
      bio
      coverImage
      email
      location
      name
      profilePicture
      username
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $condition: ModelPostConditionInput
  $input: UpdatePostInput!
) {
  updatePost(condition: $condition, input: $input) {
    code
    comments {
      nextToken
      __typename
    }
    content
    createdAt
    createdBy {
      bio
      coverImage
      email
      location
      name
      profilePicture
      username
      __typename
    }
    id
    images
    likes
    owner
    updatedAt
    user {
      bio
      coverImage
      createdAt
      email
      id
      location
      name
      owner
      profileOwner
      profilePicture
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    bio
    coverImage
    createdAt
    email
    id
    location
    name
    owner
    posts {
      nextToken
      __typename
    }
    profileOwner
    profilePicture
    updatedAt
    username
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
