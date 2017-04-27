import React from 'react';
import { shallow, mount, render } from 'enzyme';

// jest.dontMock('./App');

import App from '../App';


describe('A suite for App component', () => {
   /*it('contains spec with an expectation' , () => {
        expect(shallow(<App />).containes(
        <div className="root">
        </div>
    )).toBe(true);
   });*/

   it('should be selectable by class "root"', function() {
    expect(shallow(<App />).is('.root')).toBe(true);
  });
});