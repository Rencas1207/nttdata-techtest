import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'https://opembpo.emeal.nttdata.com',
});

export default clientAxios;
