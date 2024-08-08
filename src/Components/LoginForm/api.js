const API_KEY = 'aab4af24f368e7dd896af5af45588714';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getRequestToken = async () => {
  const response = await fetch(`${BASE_URL}/authentication/token/new?api_key=${API_KEY}`);
  const data = await response.json();
  return data.request_token;
};

export const validateWithLogin = async (username, password, requestToken) => {
  const response = await fetch(`${BASE_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
      request_token: requestToken
    })
  });
  const data = await response.json();
  return data;
};

export const createSession = async (requestToken) => {
  const response = await fetch(`${BASE_URL}/authentication/session/new?api_key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      request_token: requestToken
    })
  });
  const data = await response.json();
  return data.session_id;
};

export const registerUser = async (userData) => {
  // Kayıt işlemi için uygun bir API endpoint'i kullanın.
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Kayıt işlemi başarısız');
  }

  return response.json();
};
