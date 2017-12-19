import raf from './tempPolyfills'
import { configure } from 'enzyme';
// import {configure, shallow, render, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// global.toJson = toJson;


// Fail tests on any warning
// console.error = message => {
//   throw new Error(message);
// };