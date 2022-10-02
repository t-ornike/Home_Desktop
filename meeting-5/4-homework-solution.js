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



async  function getAll() {
  let user = await getPassedUsersFirstVideoTitle("user1@hw.js");
  
try {
    await loginUser(user, 1234);
    console.log("user:", {userEmail:user})
  } catch(error) {
    console.log(error)
  }

  
try {
    await getUserVideos(user);
    console.log(usersDB[user])
  } catch(error) {
    console.log(error)
  }

  
try {
  await videoDetails(usersDB[user][0])
  console.log(usersDB[user][0].title)
  } catch(error) {
    console.log(error);
  }
}

getAll()

console.log("Finish");
