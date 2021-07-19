import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, post: "Hi, how are you", likesCount: 10 },
    { id: 2, post: "Its my first post", likesCount: 25 },
  ],
};

test("length of posts should be incremented", () => {
  // 1. start data
  let action = addPostActionCreator("abror.com");

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(3);
});

test("post of new post should be correct", () => {
  // 1. start data
  let action = addPostActionCreator("abror.com");

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts[2].post).toBe("abror.com");
});

test("after deleting length of posts should be decrement", () => {
  // 1. start data
  let action = deletePost(1);

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(1);
});

test("after deleting length of posts shouldn't be decrement if id is incorrect", () => {
  // 1. start data
  let action = deletePost(1000);

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(2);
});
