import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;

  beforeEach(() => {
    component = new HomePage();
  });

  it('calculates the general average across the entire course', () => {
    expect(component.promedioGeneral).toBeCloseTo(3.58);
  });

  it('filters grades inclusively within the selected range', () => {
    component.notaMinima = 2.8;
    component.notaMaxima = 3;

    expect(component.estudiantesFiltrados.map(({ nota }) => nota)).toEqual([2.8, 3, 2.9]);
  });

  it('saves an observation temporarily for the selected student', () => {
    const estudiante = component.estudiantes[0];
    component.abrirModal(estudiante);
    component.observacionBorrador = '  Excelente participación.  ';

    component.guardarObservacion();

    expect(estudiante.observacion).toBe('Excelente participación.');
    expect(component.modalAbierto).toBe(false);
    expect(component.estudianteSeleccionado).toBeNull();
  });

  it('does not save a draft when the modal is closed', () => {
    const estudiante = component.estudiantes[0];
    component.abrirModal(estudiante);
    component.observacionBorrador = 'Borrador';

    component.cerrarModal();

    expect(estudiante.observacion).toBe('');
  });
});
