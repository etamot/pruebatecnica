import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Ciudad, Hotel } from '@hoteles/interfaces/hotel.interface';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

interface Options{

 ubicacion?: string;
}

const emptyHotel: Hotel = {
  id: 'new',
  nombre: '',
  ubicacion: '',
  estrellas: 0,
  habilitado: false,
  imagen: '',
  descripcion: ''
}

@Injectable({providedIn: 'root'})
export class HotelesService {
  private http = inject(HttpClient);

  getHoteles(options: Options): Observable <Hotel[]>{
    const { ubicacion = ''} = options;

    return this.http.get<Hotel[]>(`${baseUrl}/hoteles`,{
      params: {
        ubicacion,
      },
    }).pipe(tap(resp => console.log(resp)));
  }


  getHotelById(idHotel: string): Observable<Hotel>
  {
    if(idHotel=='new'){
      return of(emptyHotel);
    }

    return this.http.get<Hotel>(`${baseUrl}/hoteles/${idHotel}`);
  }

  getCiudades(): Observable <Ciudad[]>{

    return this.http.get<Ciudad[]>(`${baseUrl}/ciudades`);
  }

  getCiudadesById(idCiudad: string): Observable <Ciudad[]>{

    return this.http.get<Ciudad[]>(`${baseUrl}/ciudades?id=${idCiudad}`);
  }

  actualizarHotel(id:string ,hotelLike:Partial<Hotel>): Observable<Hotel>{
    console.log('actualizando hotel');
    return this.http.patch<Hotel>(`${ baseUrl }/hoteles/${Number(id)}`, hotelLike);
  }

  crearHotel(hotelLike:Partial<Hotel>): Observable<Hotel>{
    console.log('actualizando hotel');
    return this.http.post<Hotel>(`${ baseUrl }/hoteles`, hotelLike);
  }
}
