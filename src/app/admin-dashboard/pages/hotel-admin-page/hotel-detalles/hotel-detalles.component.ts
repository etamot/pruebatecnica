import { Component, inject, input, OnInit } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hotel } from '@hoteles/interfaces/hotel.interface';
import { HotelImagePipe } from '@hoteles/pipes/hotel-image.pipe';
import { HotelesService } from '@hoteles/services/hoteles.service';
import { FormUtils } from '@utils/formutils';

@Component({
  selector: 'hotel-detalles',
  imports: [HotelImagePipe, ReactiveFormsModule],
  templateUrl: './hotel-detalles.component.html',
})
export class HotelDetallesComponent implements OnInit{

  hotel = input.required<Hotel| undefined>();

  hotelesService = inject(HotelesService);
  fb = inject(FormBuilder);

  hotelForm = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: [''],
    estrellas: [''],
    id: ['',[Validators.required,Validators.pattern(FormUtils.slugPattern)]],
    ubicacion: [0],
    habilitado: [true],
  })

  ciudadesResource = rxResource({
            request: () => ({}),
            loader :({ request }) =>{

                return this.hotelesService.getCiudades();
            },
        });

        ngOnInit(): void {
            this.hotelForm.reset(this.hotel() as any)
        }

        onSubmit(){
          const isValid = this.hotelForm.valid;
          this.hotelForm.markAllAsTouched();
          if( !isValid ) return;

          const formValue = this.hotelForm.value;
          const hotelLike: Partial<Hotel>={
            ...(formValue as any)
          }


          this.hotelesService.actualizarHotel(this.hotel()?.id?? '',hotelLike).subscribe(

              hotel => {
                console.log("hotel actualizado");
              }
          );
        }
}
