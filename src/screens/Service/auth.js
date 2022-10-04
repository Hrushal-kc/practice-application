const BASE_URL = 'https://api-nodejs-todolist.herokuapp.com/';

export const login = async (data) => {
  // console.log('This is the data::::', data);
  try {
    const response = await fetch(BASE_URL + 'user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    alert(error);
  }
};

export const signup = async (data) => {
  try {
    const response = await fetch(BASE_URL + 'user/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const value = await response.json();
    return value;
  } catch (error) {
    alert(error);
  }
};
