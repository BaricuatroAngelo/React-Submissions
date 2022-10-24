/* eslint-disable no-unused-expressions */
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './App';

describe('Login UI', () => {
    afterEach(cleanup)

    it('has an input for email',()=>{

      render(<Login />)
      const email = screen.getByTestId("email")
      expect(email).toBeInTheDocument();

    })

    it('has an input for password', ()=>{

      render(<Login />)
      const pass = screen.getByTestId("password")
      expect(pass).toBeInTheDocument();

    })

    it('has a button to submit credentials', ()=>{

      render(<Login />)
      const btn = screen.getByTestId("send-user-login")
      expect(btn).toBeInTheDocument();

    })
});


describe('Checks if the user has submitted their credentials', ()=>{
  afterEach(cleanup)

  const submit = jest.fn();
  render(<Login submit={submit}/>)

  const email = screen.getByTestId("email")
  const pass = screen.getByTestId("password")
  const btn = screen.getByTestId("send-user-login")

  userEvent.type(email, "example@mail.com")
  userEvent.type(pass, "samplepass")
  userEvent.click(btn)

  expect(submit).toHaveBeenCalled({
    username:"example@mail.com",
    pass:"samplepass"
  });
  
})
