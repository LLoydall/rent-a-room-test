import React from 'react';
import { shallow } from 'enzyme';

import Teaser from '../index';

// describe('<Teaser />', () => {
//   it('Expect to have unit tests specified', () => {
//     expect(true).toEqual(false);
//   });
// });

describe('the teaser element', () => {
  it('should display an image as its background', () => {
    const url = 'https://source.unsplash.com/random';
    const renderedComponent = shallow(<Teaser background={url} />);
    expect(renderedComponent.prop('background')).toEqual(url);
  });

  it('should have shadow on hover', () => {
    const renderedComponent = shallow(<Teaser />);
    const { style } = renderedComponent.get(0);
    renderedComponent.simulate('mouseover');
    expect(style).toHaveProperty('box-shadow');
  });

  it('should contain a row of profile pictures for each housemate', () => {});

  it('they should spread out on mouseover', () => {});

  it('the row of profile photos should show the overlay on click', () => {});

  it('the overlay should contain the profile photos with first names', () => {});

  it('the text should turn red on hover', () => {});

  it('the overlay should have a button at the bottom left which retracts the overlay', () => {});

  it('should show the price', () => {});

  it('should show the title', () => {});

  it('should show the Area', () => {});

  it('should show the time it takes to walk to the nearest tube station', () => {});

  it('should show the the nearest tube station', () => {});
});
