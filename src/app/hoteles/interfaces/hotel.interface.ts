import { User } from "@auth/interfaces/user.interface";

export interface HotelResponse {
  hoteles:            Hotel[];
  habitaciones:       Habitacion[];
  reservas:           Reserva[];
  pasajeros:          Pasajero[];
  contactoemergencia: Contactoemergencia[];
  user:               User[];
}

export interface Contactoemergencia {
  id:       number;
  nombres:  string;
  telefono: string;
}

export interface Habitacion {
  id:         number;
  hotelId:    number;
  numero:     number;
  tipo:       string;
  precio:     number;
  impuesto:   number;
  ubicacion:  Ubicacion;
  habilitado: boolean;
}

export interface Ubicacion {
  piso:    number;
  seccion: string;
}

export interface Hotel {
  id:         string;
  nombre:     string;
  ubicacion:  string;
  estrellas:  number;
  habilitado: boolean;
  imagen:     string;
  descripcion:string;
}

export interface Pasajero {
  id:                 number;
  nombres:            string;
  apellidos:          string;
  FechaDeNacimiento:  Date;
  genero:             string;
  tipoDeDocumento:    string;
  numeroDocumento:    string;
  email:              string;
  telefonoDeContacto: number;
}

export interface Reserva {
  id:           number;
  habitacionid: number;
  fechaEntrada: Date;
  fechaSalida:  Date;
  idPasajeros:  number[];
  idviajero:    number;
  idemergencia: number;
}

export interface Ciudad {
  id:           number;
  nombre:       string;
}


