import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenDatosIncidenciaAdministrativoComponent } from './componente-resumen-datos-incidencia-administrativo.component';

describe('ComponenteResumenDatosIncidenciaAdministrativoComponent', () => {
  let component: ComponenteResumenDatosIncidenciaAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteResumenDatosIncidenciaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenDatosIncidenciaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenDatosIncidenciaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
