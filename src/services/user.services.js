const url = import.meta.env.VITE_BASE_URL
console.log(url);

export const registerRequest = async (user) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {'Content-Type': 'application/json'}
  }

  try {

    const response = await fetch(`${url}register`, options)
    if (response.ok) {
      const json = await response.json()
      console.log(json);
      return json
    }

  } catch (error) {
    console.log(error); 
  }
  
}

export const loginRequest = async (user) => {
  const options = {
    method: 'POST',
    // credentials: 'include',
    body: JSON.stringify(user),
    headers: {'Content-Type': 'application/json'}
  }

  try {

    const response = await fetch(`${url}login`, options)
    const json = await response.json()
    console.log(json);
    return json
    

  } catch (error) {
    console.log(error); 
  }
  
}

export const logoutRequest = async () => {

  const loggedUserJSON = window.localStorage.getItem('loggedUser')
  const userLogged = JSON.parse(loggedUserJSON) 
  
  const options = {
    method: 'POST',
    // credentials: 'include',
    headers: { 
      'Authorization': userLogged.token,
      'Content-Type': 'application/json'
    }
  }


  try {

    const response = await fetch(`${url}logout`, options)
    const json = await response.json()
    return json

  } catch (error) {
    console.log(error); 
  }

}
