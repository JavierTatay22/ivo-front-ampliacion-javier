import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente-resumen-datos-incidencias',
  templateUrl: './componente-resumen-datos-incidencias.component.html',
  styleUrls: ['./componente-resumen-datos-incidencias.component.css']
})
export class ComponenteResumenDatosIncidenciasComponent implements OnInit{

  incidencia: any = {};
  @Input() siguienteRuta='';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.incidencia = params;
    });
  }

  redireccion() {
    this.router.navigate([this.siguienteRuta]);
  }
}
