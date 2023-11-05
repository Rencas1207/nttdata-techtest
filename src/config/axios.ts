import axios from 'axios';

const clientAxios = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BACKENDURL,
  baseURL: 'https://opembpo.emeal.nttdata.com',
});

export default clientAxios;
