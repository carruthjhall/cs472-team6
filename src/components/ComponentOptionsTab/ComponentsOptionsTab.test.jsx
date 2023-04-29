import renderer from 'react-test-renderer';
import { beforeEach, describe, expect, it } from 'vitest';
import ComponentOptionsTab from './ComponentOptionsTab';
import { registeredComponents } from '../../utils/registeredComponents';
import { PageState } from '../../state';
import PageComponent from '../../models/PageComponent';

let registeredBannerComponent = registeredComponents.get('Banner');

describe('ComponentOptionsTab Component', () => {

    // reset page state before each test
    beforeEach(() => {
        let initailComponentsList = [new PageComponent(registeredBannerComponent.name, {...registeredBannerComponent.defaultOptions})]
        let initialPageOptions = {
            title: 'Portfolio',
            icon: '',
            author: '',
            description: 'My Portfolio',
            language: 'en-US'
        }
        PageState.setState({...PageState.getState(), 
            componentsList: initailComponentsList,
            pageOptions: initialPageOptions
        })
    })

    it('Components Accordians render', () => {
        const component = renderer.create(
            <ComponentOptionsTab />
        )

        const componentOptionsTab = component.toJSON();

        const bannerOptionsAccordian = componentOptionsTab.children[0];

        const accordianTitle = bannerOptionsAccordian.children[0].children[0];

        // check that banner accordian title exists and matches the Banner component name
        expect(accordianTitle).eq(registeredBannerComponent.name);
    })

    it('Test null condition', () => {
        let pageState = PageState.getState();
        let newComponentsList = [{...pageState.componentsList[0], name: 'Test'}]
        PageState.setState({...pageState, componentsList: newComponentsList});
        const component = renderer.create(
            <ComponentOptionsTab />
        )

        // make sure that the componentOptionsTab has no children
        // even though there is an item in the componentsList it has a incorrect name and should not render anything
        const componentOptionsTab = component.toJSON();
        expect(componentOptionsTab.children).eq(null);
    })

    it('Test trash button', () => {
        // render component
        const component = renderer.create(
            <ComponentOptionsTab />
        )
        // get reference to rendered component
        const componentOptionsTab = component.toJSON();
        // get banner accordian
        const bannerOptionsAccordian = componentOptionsTab.children[0];
        const accordianSummary = bannerOptionsAccordian.children[0];
        const trashButton = accordianSummary.children.at(-3);

        // get number of components before trashButton is clicked
        let numOfComponentsBefore = PageState.getState().componentsList.length;
        
        // simulate pressing the trash button
        trashButton.props.onClick();

        // get number of components after trashButton is clicked
        let numOfComponentsAfter = PageState.getState().componentsList.length;
        // make sure that component was deleted
        expect(numOfComponentsAfter).eq(numOfComponentsBefore-1)
    })

    it('Test move up arrow', () => {
        // add a second banner component 
        PageState.getState().addComponent(new PageComponent(registeredBannerComponent.name, {...registeredBannerComponent.defaultOptions}))
        // render component
        const component = renderer.create(
            <ComponentOptionsTab />
        )
        // get reference to rendered component
        const componentOptionsTab = component.toJSON();
        // get second banner accordian
        const bannerOptionsAccordian = componentOptionsTab.children[1];
        const accordianSummary = bannerOptionsAccordian.children[0];
        const upArrowBtn = accordianSummary.children.at(-1);

        // get number of components before upArrowBtn is clicked
        let newComponentId = PageState.getState().componentsList[1].id;
        let newComponentIndexBefore = 1;
        // simulate pressing the up arrow
        upArrowBtn.props.onClick();

        // get number of components after upArrowBtn is clicked
        let newComponentIndexAfter = PageState.getState().componentsList.findIndex(comp => comp.id === newComponentId);
        // make sure that component was moved up in list
        expect(newComponentIndexAfter).eq(newComponentIndexBefore-1)
    })

    it('Test move down arrow', () => {
        // add a second banner component 
        PageState.getState().addComponent(new PageComponent(registeredBannerComponent.name, {...registeredBannerComponent.defaultOptions}))
        // render component
        const component = renderer.create(
            <ComponentOptionsTab />
        )
        // get reference to rendered component
        const componentOptionsTab = component.toJSON();
        // get second banner accordian
        const bannerOptionsAccordian = componentOptionsTab.children[0];
        const accordianSummary = bannerOptionsAccordian.children[0];
        const downArrowBtn = accordianSummary.children.at(-2);

        // get number of components before downArrowBtn is clicked
        let newComponentId = PageState.getState().componentsList[0].id;
        let newComponentIndexBefore = 0;
        // simulate pressing the up arrow
        downArrowBtn.props.onClick();

        // get number of components after downArrowBtn is clicked
        let newComponentIndexAfter = PageState.getState().componentsList.findIndex(comp => comp.id === newComponentId);
        // make sure that component was moved down in list
        expect(newComponentIndexAfter).eq(newComponentIndexBefore+1)
    })
})