export type UserAuth = {
  token: string;
  authenticated: boolean;
  user: string;
};

export type UserData = {
  usuario: string;
  password: string;
};

export interface Guard {
  id_guardia: number;
  estado_guardia: string;
  fecha_guardia: string;
  agente: Agente;
}

export interface Agente {
  nom_agente: string;
  estado_agente: string;
  proyecto: Proyecto;
  rol: Rol;
}

export interface Proyecto {
  nom_proy: string;
}

export interface Rol {
  nom_rol: string;
}

export interface FilterDate {
  startDate: string;
  endDate: string;
}

export interface FormatOptions {
  year: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  day: 'numeric' | '2-digit';
}
