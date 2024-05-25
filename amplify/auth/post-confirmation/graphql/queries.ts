/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
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
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      owner
      postId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
