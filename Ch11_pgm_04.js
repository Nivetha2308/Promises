// The Ch11_pgm_03 promise has been settled with resolve. Let us another example when the promise is settled with reject.

// Promise
  const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS', 'Node']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result) 
    })
    .catch(error => console.error(error))

    //something wrong has happened
  
    

  

    
