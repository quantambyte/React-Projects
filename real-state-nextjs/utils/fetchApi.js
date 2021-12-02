import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key':
        '12371298b3msh7dcb338ea3e2443p1f111fjsn3d0433b2423b',
    },
  });

  return data;
};
