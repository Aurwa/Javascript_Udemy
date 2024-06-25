// Question 1

/*
// ---- Promises
function getUsername() {
  fetch('https://randomuser.me/api/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      } else {
        return response.json();
      }
    })
    .then(data => {
      console.log(data.results[0].name.first);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

// getUsername();

// ----- Async/Await
async function getUsername2() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      const data = await response.json();
      console.log(data.results[0].name.first);
      // return data;
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation: ', error);
  }
}

// getUsername2();
*/

// Question 2

/*
// ----- Promises

function getUserDetails(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      } else {
        return response.json();
      }
    })
    .then(userData => {
      return userData;
    });
}

// The return userData inside the .then() does not make getUserDetails return a promise that resolves to userData. Instead, getUserDetails itself returns undefined.
// Therefore, you cannot chain off getUserDetails because it doesn't return a promise.

function getUserPosts(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      } else {
        return response.json();
      }
    })
    .then(userPosts => {
      return userPosts;
    });
}

function fetchDetails(userId) {
  getUserDetails(userId)
    .then(userData => {
      console.log('User Details: ', userData);
      return getUserPosts(userId);
    })
    .then(userPosts => {
      console.log('User Posts: ', userPosts);
    });
}

// fetchDetails(1);

// ----- Async/await
async function getUserDetails2(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      const userData = await response.json();
      return userData;
    }
  } catch (error) {
    console.error('There was a problem: ', error);
  }
}

async function getUserPosts2(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    } else {
      const userPosts = await response.json();
      return userPosts;
    }
  } catch (error) {
    console.error('There was a problem: ', error);
  }
}

async function userInformation2(userId) {
  const userData = await getUserDetails2(userId);
  console.log(userData);
  const userPosts = await getUserPosts2(userId);

  console.log(userPosts);
}

// userInformation2(1);
*/

// Question 3

/*
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/comments/1

// ------- Promises
function users() {
  return fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      } else {
        return response.json();
      }
    })
    .then(data => {
      return data;
    });
}

function posts() {
  return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      } else {
        return response.json();
      }
    })
    .then(data => {
      return data;
    });
}

function comments() {
  return fetch(`https://jsonplaceholder.typicode.com/comments/1`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error');
      } else {
        return response.json();
      }
    })
    .then(data => {
      return data;
    });
}

function fetchDetails() {
  Promise.all([users(), posts(), comments()])
    .then(([userData, postData, commentData]) => {
      console.log(userData);
      console.log(postData);
      console.log(commentData);
    })
    .catch(error => {
      console.error(error);
    });
}

// fetchDetails();

// ------- Async/await

async function userData2() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
  if (!response.ok) {
    throw new Error('Error');
  } else {
    const data = await response.json();
    console.log(data);
  }
}

async function userPosts2() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  if (!response.ok) {
    throw new Error('Error');
  } else {
    const data = await response.json();
    return data;
  }
}

async function userComments2() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments/1`
  );
  if (!response.ok) {
    throw new Error('Error');
  } else {
    const data = await response.json();
    return data;
  }
}

async function fetchDetails2() {
  const [userData, postData, commentData] = await Promise.all([
    userData2(),
    userPosts2(),
    userComments2(),
  ]);

  console.log(userData);
  console.log(postData);
  console.log(commentData);
}

// fetchDetails2();
*/

// Question 4
