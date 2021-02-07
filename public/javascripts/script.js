// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
/*for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}*/

// Iteration 1 using callbacks
const pr1 = addFood(steak[0], '#steak', (callback1) => {
  callback1 = addFood(steak[1], '#steak', (callback2) => {
    callback2 = addFood(steak[2], '#steak', (callback3) => {
      callback3 = addFood(steak[3], '#steak', (callback4) => {
        callback4 = addFood(steak[4], '#steak', (callback5) => {
          callback5 = addFood(steak[5], '#steak', (callback6) => {
            callback6 = addFood(steak[6], '#steak', (callback7) => {
              callback7 = addFood(steak[7], '#steak', (addImage) => {
                  const newImg = document.createElement("img");
                  document.getElementById('table').appendChild(newImg);
                  newImg.setAttribute('src', '/public/images/steak.jpg')
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
const pr2 = addFood(mashPotatoes[0], '#mashPotatoes')
  .then((resolve) => {
    return addFood(mashPotatoes[1], '#mashPotatoes')
  .then((resolve) => {
    return addFood(mashPotatoes[2], '#mashPotatoes')
  })
  .then((resolve) => {
    return addFood(mashPotatoes[3], '#mashPotatoes')
  })
  .then((resolve) => {
    return addFood(mashPotatoes[4], '#mashPotatoes')
  })
  .then((resolve) => {
    const newImg = document.createElement("img");
    document.getElementById('table').appendChild(newImg);
    newImg.setAttribute('src', '/public/images/mashPotatoes.jpg')
  })
  .catch((reject) => {
    throw new Error("The operation could not be completed")
  })
});

// Iteration 3 using async and await
  function addBrusselsImage () {
      newImg = document.createElement("img");
      document.getElementById('table').appendChild(newImg);
      newImg.setAttribute('src', '/public/images/brusselSprouts.jpg')
  };

  async function makeFood() {
    try {await addFood(brusselSprouts[0], "#brusselSprouts");
    await addFood(brusselSprouts[1], "#brusselSprouts");
    await addFood(brusselSprouts[2], "#brusselSprouts");
    await addFood(brusselSprouts[3], "#brusselSprouts");
    await addFood(brusselSprouts[4], "#brusselSprouts");
    await addFood(brusselSprouts[5], "#brusselSprouts");
    await addFood(brusselSprouts[6], "#brusselSprouts");
    await addFood(brusselSprouts[7], "#brusselSprouts");
    await addFood(brusselSprouts[8], "#brusselSprouts");
    await addBrusselsImage();
    } 
    catch {throw new Error("The operation could not be completed")};
  }

  const pr3 = makeFood();

  Promise.all([pr1, pr2, pr3])
    .then((resolve) => {
      const successMessage = document.createElement('h1');
      document.body.appendChild(successMessage);
      successMessage.innerHTML = "Dinner is served!"
    })


  