// import React from 'react';
import { render,waitFor,fireEvent, } from '@testing-library/react';
import App from './App';
// import renderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer';
import { NavLink } from './component/NavLink';
import { Postlists } from './component/Postlists';
import { Users } from './component/Users';
import { MyForm } from './form';
import { UserDetail } from './component/UserDetail';


describe.only("Testing text details in the pages", () => {
    test('renders all link present in the Home page', () => {
        const { getByText } = render(<App />);
        const postlinkElement = getByText(/Posts/);
        const userslinkElement = getByText(/Users/);
        const userDetaillinkElement = getByText(/UserDetail/);
        const createUserlinkElement = getByText(/Create User/);
        expect(postlinkElement).toHaveAttribute('href', '/posts');
        expect(userslinkElement).toHaveAttribute('href', '/users');
        expect(userDetaillinkElement).toHaveAttribute('href', '/users/58');
        expect(createUserlinkElement).toHaveAttribute('href', '/users/create');        
    })
    test('Checking whether the link is working for Posts',async()=>{
    const component=render(<App />);
    await waitFor(() => component.getByText(/Posts/));
    fireEvent.click(component.getByText(/Posts/));
    })
    test.only('Checking whether the link is working for Users',async()=>{
        const component=render(<App />);
        await waitFor(() => component.getByText(/Users/));
        fireEvent.click(component.getByText(/Users/));
        })
    test('Checking whether the link is working for Users',async()=>{
            const component=render(<App />);
            await waitFor(() => component.getByText(/UserDetail/));
            fireEvent.click(component.getByText(/UserDetail/));
            })
    test('Checking whether the link is working for Users',async()=>{
                const component=render(<App />);
                await waitFor(() => component.getByText(/Create User/));
                fireEvent.click(component.getByText(/Create User/));
                })

    test('renders whether the link is working fine in the Home page', async() => {
        const component=render(<App />);
        await waitFor(() => component.getByText(/Posts/));
        fireEvent.click(component.getByText(/Posts/));
        const postsElement=component.getByText('Posts');
        expect(postsElement).toHaveClass('subtitle');  
        //For going back to Home Page 
        fireEvent.click(component.getByText(/HomePage/));
        //Clicking the Users link in Home page
        await waitFor(() => component.getByText(/Users/));
        fireEvent.click(component.getByText(/Users/));
        const usersElement=component.getByText('Users');
        expect(usersElement).toHaveClass('subtitle');  
       //For going back to Home Page 
       fireEvent.click(component.getByText(/HomePage/));     
    }) 
})
describe("Snapshot testing", () => {
     it("Should match snapshot ", async () => {
        const HomePage = renderer.create(<NavLink />).toJSON();
        console.log(HomePage);
        expect(HomePage).toMatchSnapshot();
    });
    it("Should match snapshot ", async () => {
        const postPage = renderer.create(<Postlists />).toJSON();
        console.log(postPage);
        expect(postPage).toMatchSnapshot();
    });
    it("Should match snapshot ", async () => {
        const userpage = renderer.create(<Users />).toJSON();
        console.log(userpage);
        expect(userpage).toMatchSnapshot();
    });
    it("Should match snapshot ", async () => {
        const createUserpage = renderer.create(<MyForm />).toJSON();
        console.log(createUserpage);
        expect(createUserpage).toMatchSnapshot();
    });
    it("Should match snapshot ", async () => {
        const userDetailPage = renderer.create(<UserDetail />).toJSON();
        console.log(userDetailPage);
        expect(userDetailPage).toMatchSnapshot();
    });


});





