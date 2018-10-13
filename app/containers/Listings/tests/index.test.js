import React from 'react';
import { shallow } from 'enzyme';

import { Listings } from '../index';
import Teaser from '../../../components/Teaser/index';

describe('Listings Page', () => {
  it('should have a title', () => {
    const renderedComponent = shallow(<Listings />);
    expect(renderedComponent.find('h1').exists()).toBe(true);
  });

  // it('Should show a series of listings', () => {
  //   const renderedComponent = shallow(<Listings />);
  //   expect(renderedComponent.containsMatchingElement(<Teaser />)).toBe(true);
  // });

  it("Should show a series of listings which link to a listing page or 'No Listings' text", () => {
    const renderedComponent = shallow(<Listings />);
    expect(
      (renderedComponent.containsMatchingElement(<Teaser />) &&
        renderedComponent.find('[to^="/listing/"]').exists()) ||
        renderedComponent.text().to.equal('No Listings'),
    ).toBe(true);
  });
});
