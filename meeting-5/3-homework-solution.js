console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};



function loginUser(email, password) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (email in usersDB) {
        console.log(`Now we have the data of user: ${email}`);
        resolve( {userEmail:email} );
      } else {
        reject("User not found!");
      }
    }, 3000)
  })
}


function getUserVideos(email) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (usersDB[email].length !== 0) {
        resolve(usersDB[email]);
      } else {
        reject("Videos not found!")
      }
    },2000)    
  })
}


function videoDetails(video) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
       if (video.title) {
         resolve(video.title)
       } else {
         reject("Video Title not found!");
       }
  	}, 2000)
})
}



const getPassedUsersFirstVideoTitle = (user) => {
	return new Promise( (resolve, reject) => {resolve(user)} )
}


const promise = getPassedUsersFirstVideoTitle("user1@hw.js");

promise.then((value) => { console.log("user:", {userEmail:value}); return loginUser(value, 1234) }).
then((value) => { console.log(usersDB[value.userEmail]); return getUserVideos(value.userEmail) }).
then((value) => { console.log(value[0]); return videoDetails(value[0])} ).
catch((error) => console.log(error));

console.log("Finish");
