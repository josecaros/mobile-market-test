import ProductListPage, { evaluarOcurrenciasIgnoreCase } from '../pages/ProductListPage';
import { screen, render } from '@testing-library/react'
/**
 * @jest-environment jsdom
 */
describe('Pruebas unitaria de funciones para el componente ProductListPage', () => {
  describe('evaluarOcurrenciasIgnoreCase', () => {
    test('Debe retornar un valor booleano', () => {
      const resultado = evaluarOcurrenciasIgnoreCase("Primera cadena", "Segunda cadena", "Cadena de comparación");
      expect(typeof resultado).toBe('boolean');
    });

    test('Debe retornar true si la cadena de comparación es subcadena del primer patron', () => {
      expect(evaluarOcurrenciasIgnoreCase("Primera cadena", "Segunda", "cadena")).
        toBe(true);
    });

    test('Debe retornar true si la cadena de comparación es subcadena del segundo patron', () => {
      expect(evaluarOcurrenciasIgnoreCase("Primera", "Segunda cadena", "cadena")).
        toBe(true);
    });
    test('Debe retornar false si la cadena de comparación no es subcadena de ninguno de los dos patrones', () => {
      expect(evaluarOcurrenciasIgnoreCase("Primera", "Segunda cadena", "col")).
        toBe(false);
    });
  });
});