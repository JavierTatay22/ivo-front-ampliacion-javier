import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-formulario-incidencias',
  templateUrl: './componente-formulario-incidencias.component.html',
  styleUrls: ['./componente-formulario-incidencias.component.css']
})
export class ComponenteFormularioIncidenciasComponent {
  formData: any = {};
  @Input() rutaDestino: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Form Data:', this.formData);
    
    if (this.rutaDestino) {
      setTimeout(() => {
        console.log('Formulario enviado exitosamente');
        this.router.navigate([this.rutaDestino], { queryParams: this.formData });
      }, 1000);
    } else {
      console.error('No se ha proporcionado una ruta de destino.');
    }
  }
}