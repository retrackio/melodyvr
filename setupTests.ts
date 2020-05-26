import EnzymeAdapter from 'enzyme-adapter-react-16';
import enzyme from 'enzyme';
import 'jest-styled-components';

const adapter = new EnzymeAdapter();

enzyme.configure({
  adapter,
});
