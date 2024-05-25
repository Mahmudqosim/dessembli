/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Comment = {
  __typename: "Comment",
  content: string,
  createdAt: string,
  id: string,
  owner?: string | null,
  post?: Post | null,
  postId?: string | null,
  updatedAt: string,
  user?: UserDetails | null,
};

export type Post = {
  __typename: "Post",
  code?: string | null,
  comments?: ModelCommentConnection | null,
  content: string,
  createdAt: string,
  createdBy?: UserDetails | null,
  id: string,
  images?: Array< string | null > | null,
  likes?: Array< string | null > | null,
  owner?: string | null,
  updatedAt: string,
  user?: User | null,
  userId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type UserDetails = {
  __typename: "UserDetails",
  bio?: string | null,
  coverImage?: string | null,
  email: string,
  location?: string | null,
  name: string,
  profilePicture?: string | null,
  username: string,
};

export type User = {
  __typename: "User",
  bio?: string | null,
  coverImage?: string | null,
  createdAt: string,
  email: string,
  id: string,
  location?: string | null,
  name: string,
  owner?: string | null,
  posts?: ModelPostConnection | null,
  profilePicture?: string | null,
  updatedAt: string,
  username: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  and?: Array< ModelCommentFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCommentFilterInput | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelPostFilterInput = {
  and?: Array< ModelPostFilterInput | null > | null,
  code?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  images?: ModelStringInput | null,
  likes?: ModelStringInput | null,
  not?: ModelPostFilterInput | null,
  or?: Array< ModelPostFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  bio?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  location?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCommentConditionInput = {
  and?: Array< ModelCommentConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelCommentConditionInput | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  postId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCommentInput = {
  content: string,
  id?: string | null,
  postId?: string | null,
  user?: UserDetailsInput | null,
};

export type UserDetailsInput = {
  bio?: string | null,
  coverImage?: string | null,
  email: string,
  location?: string | null,
  name: string,
  profilePicture?: string | null,
  username: string,
};

export type ModelPostConditionInput = {
  and?: Array< ModelPostConditionInput | null > | null,
  code?: ModelStringInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  images?: ModelStringInput | null,
  likes?: ModelStringInput | null,
  not?: ModelPostConditionInput | null,
  or?: Array< ModelPostConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreatePostInput = {
  code?: string | null,
  content: string,
  createdBy?: UserDetailsInput | null,
  id?: string | null,
  images?: Array< string | null > | null,
  likes?: Array< string | null > | null,
  userId?: string | null,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  bio?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  location?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  bio?: string | null,
  coverImage?: string | null,
  email: string,
  id?: string | null,
  location?: string | null,
  name: string,
  profilePicture?: string | null,
  username: string,
};

export type DeleteCommentInput = {
  id: string,
};

export type DeletePostInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateCommentInput = {
  content?: string | null,
  id: string,
  postId?: string | null,
  user?: UserDetailsInput | null,
};

export type UpdatePostInput = {
  code?: string | null,
  content?: string | null,
  createdBy?: UserDetailsInput | null,
  id: string,
  images?: Array< string | null > | null,
  likes?: Array< string | null > | null,
  userId?: string | null,
};

export type UpdateUserInput = {
  bio?: string | null,
  coverImage?: string | null,
  email?: string | null,
  id: string,
  location?: string | null,
  name?: string | null,
  profilePicture?: string | null,
  username?: string | null,
};

export type ModelSubscriptionCommentFilterInput = {
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  postId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  code?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  images?: ModelSubscriptionStringInput | null,
  likes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  bio?: ModelSubscriptionStringInput | null,
  coverImage?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  owner?: ModelStringInput | null,
  profilePicture?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      content: string,
      createdAt: string,
      id: string,
      owner?: string | null,
      postId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: CreatePostInput,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: DeletePostInput,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  condition?: ModelCommentConditionInput | null,
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  condition?: ModelPostConditionInput | null,
  input: UpdatePostInput,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    content: string,
    createdAt: string,
    id: string,
    owner?: string | null,
    post?:  {
      __typename: "Post",
      code?: string | null,
      content: string,
      createdAt: string,
      id: string,
      images?: Array< string | null > | null,
      likes?: Array< string | null > | null,
      owner?: string | null,
      updatedAt: string,
      userId?: string | null,
    } | null,
    postId?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    code?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    content: string,
    createdAt: string,
    createdBy?:  {
      __typename: "UserDetails",
      bio?: string | null,
      coverImage?: string | null,
      email: string,
      location?: string | null,
      name: string,
      profilePicture?: string | null,
      username: string,
    } | null,
    id: string,
    images?: Array< string | null > | null,
    likes?: Array< string | null > | null,
    owner?: string | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      bio?: string | null,
      coverImage?: string | null,
      createdAt: string,
      email: string,
      id: string,
      location?: string | null,
      name: string,
      owner?: string | null,
      profilePicture?: string | null,
      updatedAt: string,
      username: string,
    } | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    bio?: string | null,
    coverImage?: string | null,
    createdAt: string,
    email: string,
    id: string,
    location?: string | null,
    name: string,
    owner?: string | null,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    profilePicture?: string | null,
    updatedAt: string,
    username: string,
  } | null,
};
