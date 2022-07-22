import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RepositoryForm from './Repository-form';
import '@testing-library/jest-dom';
import axios from 'axios';


jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
let errorResponse:object = {
    "message": "Not Found",
    "documentation_url": "https://docs.github.com/rest/reference/repos#get-a-repository"
} 
test('renders repository form', () => {
  render(<RepositoryForm searchFunc={function (...args: any[]) {
    throw new Error('Function not implemented.');
  } }/>);
  const input = screen.getByPlaceholderText("Username");
  fireEvent.change(input,{ target: { value: '123' } });
  const mockedError = mockedAxios.get.mockRejectedValueOnce(errorResponse);
  expect(input).toBeInTheDocument;
});
