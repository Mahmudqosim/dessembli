/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateComment = /* GraphQL */ `subscription OnCreateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onCreateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onCreatePost(filter: $filter, owner: $owner) {
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
      profilePicture
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
    profilePicture
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onDeleteComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onDeletePost(filter: $filter, owner: $owner) {
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
      profilePicture
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
    profilePicture
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment(
  $filter: ModelSubscriptionCommentFilterInput
  $owner: String
) {
  onUpdateComment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost(
  $filter: ModelSubscriptionPostFilterInput
  $owner: String
) {
  onUpdatePost(filter: $filter, owner: $owner) {
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
      profilePicture
      updatedAt
      username
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
    profilePicture
    updatedAt
    username
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
