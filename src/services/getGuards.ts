import clientAxios from '../config/axios';

interface Props {
  startDate: string;
  endDate: string;
}

const getGuards = async (filterDate: Props) => {
  const { startDate, endDate } = filterDate;

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
