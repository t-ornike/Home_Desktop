console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};


function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, callback, cbForError) {
  setTimeout(() => {
    if (email in usersDB) {
      console.log(`Now we have the data of user: ${email}`);
      callback({userEmail:email})
    } else {
      cbForError("User not found!")
    }

  }, 3000)
}


function getUserVideos(email, callback, cbForError) {
  setTimeout(() => {
    if (usersDB[email].length !== 0) {
      callback(usersDB[email]);
    } else {
      cbForError("Videos not found!")
    }
  },2000)
}

function videoDetails(video, callback, cbForError) {
  setTimeout(() => {
    if (video.title) {
      callback(video.title);
    } else {
      cbForError("Video Title not found!")
    }
    
  },2000)
}


const getPassedUsersFirstVideoTitle = (user) => {
  loginUser(user, 1234, function(arg) {
    console.log("user:", arg);
    let email = arg.userEmail;
    getUserVideos(email, function(arg) {
      console.log(arg);
      let video = usersDB[email][0];
      videoDetails(video, function(arg) {
        console.log(arg)
      },displayError)
    },displayError)
  },displayError)
}

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");





