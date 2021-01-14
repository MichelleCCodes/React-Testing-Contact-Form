import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from './ContactForm';
import { act } from "react-dom/test-utils";

test("renders ContactForm without errors", ()=> {
    render(<ContactForm />);
});

test("user can fill out form", () => {
    //ARRANGE 
    render(<ContactForm/>);

    //ACT 
    const nameInput =screen.getByLabelText(/first name/i)
    const lastNameInput =screen.getByLabelText(/last name/i)
    const emailInput =screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    const button = screen.getByRole('button', {name: /submit/i})
    
    //type into our input fields 

act(()=> {
    userEvent.type(nameInput, 'Michelle')
    userEvent.type(lastNameInput, 'Chen')
    userEvent.type(emailInput, 'iam@here.com')
    userEvent.type(messageInput, 'hello there')
// });
// act(()=> {
    //push the button 
    userEvent.click(button)
});
    const newName = screen.findByText(/Michelle/i)
    const newLastName = screen.findByText(/Chen/i)
    const newEmail = screen.findByText(/iam@here.com/i)
    const newMessage = screen.findByText(/hello there/i)
    //ASSERT
    expect(newName).toMatchObject(/Michelle/i);
    expect(newLastName).toMatchObject(/Chen/i);
    expect(newEmail).toMatchObject(/iam@here.com/i);
    expect(newMessage).toMatchObject(/hello there/i);

})