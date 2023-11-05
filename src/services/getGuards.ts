import clientAxios from '../config/axios';

const getGuards = async (filterDate: any) => {
  const { startDate, endDate } = filterDate;

  const options = {
    headers: {
      AuthToken:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwb3N0dWxhbnRlIiwiYXV0aG9yaXRpZXMiOlsiMTIiLCIxMl9FUVVJUE9fNTUiLCIxMl9QUk9ZRUNUT18xNyIsIjEyX1VOXzIiXSwiaWF0IjoxNjk5MjI0NDgwLCJleHAiOjE2OTkyNjA0ODB9.5g_rYx321YT6423dD77IPGV0TGr5jnnxEqD1XEzJ_a02JWNMxpJgdDSFoLfPYUgldCGr8pv7lzTaOPKDpH8vKg', // put token
    },
  };

  try {
    const result = await clientAxios.get(
      `/admin/guardias/equipo/55?fecha_ini=${startDate}&fecha_fin=${endDate}`,
      options
    );
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export default getGuards;
