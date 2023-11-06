import clientAxios from '../config/axios';

const addGuards = async (newGuard?: string) => {
  const auth = JSON.parse(localStorage.getItem('auth') || '{}');

  if (!auth.token) {
    return;
  }

  const options = {
    headers: {
      AuthToken: auth.token,
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
