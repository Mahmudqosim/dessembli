import { type ClientSchema, a, defineData } from "@aws-amplify/backend"
import { postConfirmation } from "../auth/post-confirmation/resource"

const schema = a
  .schema({
    UserDetails: a.customType({
      bio: a.string(),
      profilePicture: a.url(),
      coverImage: a.url(),
      email: a.email().required(),
      username: a.string().required(),
      location: a.string(),
      name: a.string().required()
    }),
    User: a
      .model({
        bio: a.string(),
        profilePicture: a.url(),
        coverImage: a.url(),
        email: a.email().required(),
        username: a.string().required(),
        location: a.string(),
        posts: a.hasMany("Post", "userId"),
        name: a.string().required(),
        profileOwner: a.string().required()
      })
      .authorization((allow) => [
        allow.ownerDefinedIn('profileOwner'),
        allow.guest().to(["read"]),
        allow.owner(),
      ]),
    Post: a
      .model({
        userId: a.id(),
        user: a.belongsTo("User", "userId"),
        content: a.string().required(),
        images: a.url().array(),
        code: a.string(),
        comments: a.hasMany("Comment", "postId"),
        likes: a.string().array(),
        createdBy: a.ref('UserDetails')
      })
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.owner(),
      ]),
    Comment: a
      .model({
        content: a.string().required(),
        postId: a.id(),
        post: a.belongsTo("Post", "postId"),
        user: a.ref('UserDetails')
      })
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.owner(),
      ]),
  })
  .authorization((allow) => [allow.resource(postConfirmation)])

export type Schema = ClientSchema<typeof schema>

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
})

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
