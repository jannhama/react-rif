import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {R} from '../src';

let visibilityFlag = true;
let childContent = 'A';

function MyComponent(): JSX.Element {
  return (
    <>
      <div>
        <R if={visibilityFlag}>{childContent}</R>
      </div>
    </>
  );
}

describe('Test react-rif', () => {

  describe('Test visible component', () => {
    it('it should be returned normally', () => {
      const testRenderer = TestRenderer.create(<MyComponent/>);
      expect(testRenderer.toJSON().children[0]).toBe('A');
    });
  });
  describe('Test invisible component', () => {
    it('it should be returned normally', () => {
      visibilityFlag = false;
      const testRenderer = TestRenderer.create(<MyComponent/>);
      expect(testRenderer.toJSON().children).toBe(null);
    });
  });
  describe('Test visible component with no children', () => {
    it('it should be returned normally with a warning.', () => {
      visibilityFlag = true;
      childContent = '';
      const testRenderer = TestRenderer.create(<MyComponent/>);
      expect(testRenderer.toJSON().children).toBe(null);
    });
  });

});
