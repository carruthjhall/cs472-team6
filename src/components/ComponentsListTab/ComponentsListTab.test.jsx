import renderer from 'react-test-renderer';
import { beforeEach, describe, expect, it } from 'vitest';
import { PageState } from '../../state';
import ComponentsListTab from './ComponentsListTab';
import PageOptions from '../../models/PageOptions';
import { registeredComponents } from '../../utils/registeredComponents';

describe('ComponentsListTab Component', () => {

    // reset page state before each test
    beforeEach(() => {
        PageState.setState({...PageState.getState(), 
            componentsList: [],
            pageOptions: new PageOptions({})
        })
    })

    it('Test that component previews render properly', () => {
        const component = renderer.create(
            <ComponentsListTab />
        )

        const componentsListTab = component.toJSON();
        const componentPreview = componentsListTab.children[0];
        const componentName = componentPreview.children[1].children[0].children[0];
        // make sure that name matches the value of the name of the first component in the registeredComponents Map
        expect(componentName).eq(registeredComponents.values().next().value.name)
    })

    it('Test that Add button works properly', () => {
        const component = renderer.create(
            <ComponentsListTab />
        )

        const componentsListTab = component.toJSON();
        const componentPreview = componentsListTab.children[0];
        const addButton = componentPreview.children[1].children[1];

        // get number of components before clicking add button
        const numOfComponentsBefore = PageState.getState().componentsList.length;
        // simulate click of add button
        addButton.props.onClick();

        // get number of components after clicking add button
        const numOfComponentsAfter = PageState.getState().componentsList.length;
        // make sure that component was added to list
        expect(numOfComponentsAfter).eq(numOfComponentsBefore+1)
    })
})