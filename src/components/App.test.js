import { render, screen } from '@testing-library/react';
import App from './App';

test("renders without crashing", () => {
    render(<App />);
});

test('renders App component with provided name', () => {
    render(<App name='Test football game name'/>);
    const linkElement = screen.getByText(/Test football game name/);
    screen.debug(linkElement);
    expect(linkElement).toBeInTheDocument();
});

