import clientAxios from '../config/axios';

const addGuards = async (newGuard?: string) => {
  const options = {
    headers: {
      AuthToken:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwb3N0dWxhbnRlIiwiYXV0aG9yaXRpZXMiOlsiMTIiLCIxMl9FUVVJUE9fNTUiLCIxMl9QUk9ZRUNUT18xNyIsIjEyX1VOXzIiXSwiaWF0IjoxNjk5MjI0NDgwLCJleHAiOjE2OTkyNjA0ODB9.5g_rYx321YT6423dD77IPGV0TGr5jnnxEqD1XEzJ_a02JWNMxpJgdDSFoLfPYUgldCGr8pv7lzTaOPKDpH8vKg', // put token
    },
  };

  try {
    const result = await clientAxios.post(
      `/admin/guardias/equipo/55/agente/postulante?tipo_guardia=1&fecha_guardia=${newGuard}`,
      {},
      options
    );
    return result.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
};

export default addGuards;
