import serviceHome from '../serviceHome'
import Card from '../../models/Card';

const cardComponent = {
  id: 'contact',
  text: '600112233',
  title: 'John doe'
}
const cardComponentAna = {
  id: 'contact_ana',
  text: '600112233',
  title: 'John doe'
}
const cardComponentDiego = {
  id: 'contact_diego',
  text: '600112233',
  title: 'John doe'
}
const emptyResponse = {contactAna: '', contactDiego: ''}

describe('Home content service emties', () => {
  it('retrieves the data empty if there is nocontent', () => {
    const homeContent = serviceHome.getHome()

    expect(homeContent).toStrictEqual(emptyResponse);
  });

  it('retrieves the data empty if content is empty', () => {
    const homeContent = serviceHome.getHome([])

    expect(homeContent).toStrictEqual(emptyResponse);
  });

  it('retrieves the data empty if content is not well defined', () => {
    const homeContent = serviceHome.getHome([cardComponent, cardComponent])

    expect(homeContent).toStrictEqual(emptyResponse);
  });
});

describe('Home content service', () => {
  it('retrieves the data for all components', () => {
    const homeContent = serviceHome.getHome([cardComponentAna, cardComponentDiego])

    expect(homeContent).toStrictEqual({
      contactAna: new Card(cardComponentAna), 
      contactDiego: new Card(cardComponentDiego)
    });
  });
});
