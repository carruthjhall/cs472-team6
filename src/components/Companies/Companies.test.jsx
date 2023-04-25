import { Gradients } from '../../utils/utils';
import { describe, expect, it} from 'vitest';
import Companies from './Companies';
import CompaniesOptions from './CompaniesOptions';
import React from 'react';
import renderer from 'react-test-renderer';

//default test options
let options = {
    gradient: Gradients.default,
        noOfLogos: 12,
        logoList: [
            {url: "/src/components/Companies/Logos/Logo1.svg", darkURL: "/src/components/Companies/Logos/DarkLogo1.svg"},
            {url: "/src/components/Companies/Logos/Logo2.svg", darkURL: "/src/components/Companies/Logos/DarkLogo2.svg"},
            {url: "/src/components/Companies/Logos/Logo3.svg", darkURL: "/src/components/Companies/Logos/DarkLogo3.svg"},
            {url: "/src/components/Companies/Logos/Logo4.svg", darkURL: "/src/components/Companies/Logos/DarkLogo4.svg"},
            {url: "/src/components/Companies/Logos/Logo5.svg", darkURL: "/src/components/Companies/Logos/DarkLogo5.svg"},
            {url: "/src/components/Companies/Logos/Logo6.svg", darkURL: "/src/components/Companies/Logos/DarkLogo6.svg"},
            {url: "/src/components/Companies/Logos/Logo7.svg", darkURL: "/src/components/Companies/Logos/DarkLogo7.svg"},
            {url: "/src/components/Companies/Logos/Logo8.svg", darkURL: "/src/components/Companies/Logos/DarkLogo8.svg"},
            {url: "/src/components/Companies/Logos/Logo9.svg", darkURL: "/src/components/Companies/Logos/DarkLogo9.svg"},
            {url: "/src/components/Companies/Logos/Logo10.svg", darkURL: "/src/components/Companies/Logos/DarkLogo10.svg"},
            {url: "/src/components/Companies/Logos/Logo11.svg", darkURL: "/src/components/Companies/Logos/DarkLogo11.svg"},
            {url: "/src/components/Companies/Logos/Logo12.svg", darkURL: "/src/components/Companies/Logos/DarkLogo12.svg"},
        ]
}



describe('Companies Component', () => {
    it('Company logo images render properly', ()=> {
        const testCompanies = renderer.create(
            <Companies options={options}/>
        )

        let companiesJSON = testCompanies.toJSON();

        for(let i = 0; i < options.noOfLogos; i++){
            
            //Accesses rendered url for each logo in JSON
            const URLRendered = companiesJSON.children[1].children[i < 4 ? 0 : (i < 8 ? 1 : 2)].children[(i) % 4].children[1].props.src;
            
            //Does the expected URL match the rendered URL?
            expect(URLRendered).eq(options.logoList[i].url);
        }
        testCompanies.unmount();
    })

    it('Logos change position on resize', ()=> {
        window.innerWidth = 500;
        window.dispatchEvent(new Event('resize'));
        const testCompanies = renderer.create(
            <Companies options={options}/>
        )
            //JSON representation of component
            let companiesJSON = testCompanies.toJSON();

            //Shows the rows of logos in logo wrapper div
            let companyRows = companiesJSON.children[1].children;
            
            //Does the logo wrapper div have 4 rows of logos?
            expect(companyRows).to.have.lengthOf(4);

            testCompanies.unmount();
    })

    it('CompaniesOptions default options render correctly', ()=> {
        const testCompaniesOptions = renderer.create(
            <CompaniesOptions options={options}/>
        )
            //JSON representation of component
            let companiesOptionsJSON = testCompaniesOptions.toJSON();

            //Accesses rendered number of logos in input box
            let defaultNoOfLogos = companiesOptionsJSON.children[1].props.value;
            
            //Does the input box render the default number of logos (12)?
            expect(defaultNoOfLogos).eq(options.noOfLogos);

            testCompaniesOptions.unmount();

    })

    it('CompaniesOptions handle', ()=> {
        const testCompaniesOptions = renderer.create(
            <CompaniesOptions options={options}/>
        )
            //JSON representation of component
            let companiesOptionsJSON = testCompaniesOptions.toJSON();

            //Accesses rendered number of logos in input box
            let defaultNoOfLogos = companiesOptionsJSON.children[1].props.value;
            
            //Does the input box render the default number of logos (12)?
            expect(defaultNoOfLogos).eq(options.noOfLogos);

            testCompaniesOptions.unmount();

    })
})