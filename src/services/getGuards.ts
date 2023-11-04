const getGuards = async (startDate = '2023-11-01', endDate = '2023-11-03') => {
  try {
    return await fetch(
      `https://opembpo.emeal.nttdata.com/admin/guardias/equipo/55?fecha_ini=${startDate}&fecha_fin=${endDate}`,
      {
        headers: {
          AuthToken: 'Bearer ', // put token
        },
      }
    )
      .then(async (res) => {
        if (!res.ok) throw new Error('Error en la petición');
        return await res.json();
      })
      .then((res) => res);
  } catch (error) {}
};

export default getGuards;
