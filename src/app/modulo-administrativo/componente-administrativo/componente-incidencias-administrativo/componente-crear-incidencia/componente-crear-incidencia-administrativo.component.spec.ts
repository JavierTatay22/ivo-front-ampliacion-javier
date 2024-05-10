import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearIncidenciaAdministrativoComponent } from './componente-crear-incidencia-administrativo.component';

describe('ComponenteCrearIncidenciaAdministrativoComponent', () => {
  let component: ComponenteCrearIncidenciaAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteCrearIncidenciaAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearIncidenciaAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearIncidenciaAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
