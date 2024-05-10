import { Component } from '@angular/core';
@Component({
  selector: 'app-componente-tabla-incidencias',
  templateUrl: './componente-tabla-incidencias.component.html',
  styleUrls: ['./componente-tabla-incidencias.component.css']
})
export class ComponenteTablaIncidenciasComponent {
  dataTable: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.dataTable = $('#dataTable').DataTable({
      columns: [
        { title: 'Id', data: 'id' },
        { title: 'Asunto', data: 'asunto' },
        { title: 'nombre_completo', data: 'nombre_completo' },
        { title: 'Nivel de prioridad', data: 'nivel_prioridad' },
        { title: 'Puesto de trabajo', data: 'puesto_trabajo' },
        { title: 'Estado', data: 'estado' },
        { title: 'Fecha', data: 'fecha' },
        { title: 'Acciones', data: 'acciones' },
      ],
      data: [
        { id: 'John Doe', asunto: 30, nombre_completo: 'USA', nivel_prioridad: 'ALTA', puesto_trabajo: 'Medico', estado: 'EN_CURSO', fecha: '', acciones: 'ds'  },
        { id: 'Jane Smith', asunto: 25, nombre_completo: 'Canada', nivel_prioridad: 'ALTA', puesto_trabajo: 'Medico', estado: 'EN_CURSO', fecha: '', acciones: 'ds' }
        // Puedes agregar más datos aquí según sea necesario
      ]
    });
  }
}