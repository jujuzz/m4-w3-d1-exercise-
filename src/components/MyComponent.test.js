import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

export default class MyComponent extends React.Component {
  render() {
    return <div><input 
      onChange={(event) => {this.setState({input: event.target.value})}}
      type="text" /></div>
  }
}

describe("MyComponent", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<MyComponent />);
  });
  it("should render initial layout", () => {
    //when
    const component = shallow(<MyComponent />);
    //then
    expect(component.getElements()).toMatchSnapshot();
  });
  it("should create an entry in component state", () => {
    //given
    const component = shallow(<MyComponent />);
    const form = component.find('input');
    //when
    form.props().onChange({target: {
      name: 'myName',
      value: 'myValue'
    }});
    //then
    expect(component.state('input')).toBeDefined();
  });
  it("should create an entry in component state with the event value", () => {
    //given
    const component = shallow(<MyComponent />);
    const form = component.find('input');
    //when
    form.props().onChange({target: {
      name: 'myName',
      value: 'myValue'
    }});
    //then
    expect(component.state('input')).toEqual('myValue');
  });
});