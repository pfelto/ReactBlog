// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import App from '../src/components/App';
 
 describe('App', () => {
     describe('Render', () => {
        it('renders a button', () => {
            render(<App />)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })
    })
    describe('Events', () => {
        it('Should have correct count', ()=> {
            render(<App />)
            const button = screen.getByRole('button')
            expect(button).toHaveTextContent('0');
        })
        it('increment count by 1 on click', ()=> {
            render(<App />)
            const button = screen.getByRole('button')
            expect(button).toHaveTextContent('0');
            fireEvent.click(button);
            expect(button).toHaveTextContent('1');
            fireEvent.click(button);
            expect(button).toHaveTextContent('2');
        })
    })
 })