import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from './ContactForm';

test("renders ContactForm without errors", ()=> {
    render(<ContactForm />);
});

test("user can fill out form", () => {
    //ARRANGE 
    //ACT 
    //ASSERT
})