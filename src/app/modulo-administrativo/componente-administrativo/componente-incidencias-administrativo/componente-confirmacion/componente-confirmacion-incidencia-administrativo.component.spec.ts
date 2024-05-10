import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionIncidenciaAdministrativoComponent } from './componente-confirmacion-incidencia-administrativo.component';

describe('ComponenteConfirmacionIncidenciaAdministrativoComponent', () => {
  let component: ComponenteConfirmacionIncidenciaAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionIncidenciaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionIncidenciaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionIncidenciaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
