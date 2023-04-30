import renderer from 'react-test-renderer';
import { beforeEach, describe, expect, it } from 'vitest';
import { PageState } from '../../state';
import PageOptionsTab from './PageOptionsTab';
import PageOptions from '../../models/PageOptions';

describe('PageOptionsTab Component', () => {

    // reset page state before each test
    beforeEach(() => {
        PageState.setState({...PageState.getState(), 
            componentsList: [],
            pageOptions: new PageOptions({})
        })
    })

    it('Test that options render correctly', () => {
        const component = renderer.create(
            <PageOptionsTab />
        )

        const pageOptionsTab = component.toJSON();

        // get the page title value from the title input
        const pageTitleValue = pageOptionsTab.children[1].props.value;

        // make sure that the rendered title matches the default title
        expect(pageTitleValue).eq(new PageOptions({}).title)
        
    })

    it('Test handleChange function', () => {
        const component = renderer.create(
            <PageOptionsTab />
        )

        const pageOptionsTab = component.toJSON();
        // get reference to page title input
        const pageTitleInput = pageOptionsTab.children[1];
        const newTitle = 'Test';
        // simulate title change event
        pageTitleInput.props.onChange({
            target: {
                name: 'title',
                value: newTitle
            }
        })

        // make sure that the title from state equals the new title
        expect(PageState.getState().pageOptions.title).eq(newTitle)
        
    })
})