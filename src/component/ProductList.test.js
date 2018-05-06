import React from 'react';
import ProductList from './ProductList';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {shallow} from 'enzyme';

Enzyme.configure({ adapter: new Adapter()})
test('should render a list of products as an unorderd list', () => {
    const mockupProducts = [
        {id: 1 , name: 'Mock Product 1', brand: 'MockBrand A'},
        {id: 2 , name: 'Mock Product 2', brand: 'MockBrand B'},
        {id: 3 , name: 'Mock Product 3', brand: 'MockBrand C'}
    ];
    const wrapper = shallow(<ProductList products={mockupProducts}/>)
    expect(wrapper.find('li').length).toEqual(mockupProducts.length);
});

test('should display the brand name in the first `<li>` element', () => {
    const mockupProducts = [
        {id: 1 , name: 'Mock Product 1', brand: 'MockBrand A'},
        {id: 2 , name: 'Mock Product 2', brand: 'MockBrand B'},
        {id: 3 , name: 'Mock Product 3', brand: 'MockBrand C'}   
    ];
    const wrapper = shallow(<ProductList products={mockupProducts}/>);
    const firstproduct = wrapper.find('li').first();
    expect(firstproduct.contains(mockupProducts[0].brand)).toEqual(true);
});

/*test('should display the brand name in all `<li>` elements', () => {
    const mockupProducts = [
        {id: 1 , name: 'Mock Product 1', brand: 'MockBrand A'},
        {id: 2 , name: 'Mock Product 2', brand: 'MockBrand B'},
        {id: 3 , name: 'Mock Product 3', brand: 'MockBrand C'}   
    ];
    const wrapper = shallow(<ProductList products={mockupProducts}/>);
    wrapper.find('li').forEach((item) => {
        expect(item.text()).contains(mockupProducts[mockupProducts.indexOf(item)].brand);
    })
});*/