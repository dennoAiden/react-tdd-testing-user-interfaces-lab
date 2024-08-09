import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
describe("App Component", () => {

 it("displays a top-level heading with the text `Hi, I'm DENNIS`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  it("renders an image with correct alt text", () => {
    render(<App/>);
    const imgElement = screen.getByRole('img', { name: /alt text describing the image/i });
    expect(imgElement).toBeInTheDocument();
  });

  it("renders a second-level heading with 'About Me'", () => {
    render(<App/>);
    const headingElement = screen.getByRole('heading', { level: 2 });
    expect(headingElement).toHaveTextContent(/About Me/i);
  });

  it("renders a paragraph with biography text", () => {
    render(<App/>);
    const paragraphElement = screen.getByText(/your biography/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("renders a link to GitHub with correct href", () => {
    render(<App/>);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
  });

  it("renders a link to LinkedIn with correct href", () => {
    render(<App/>);
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/yourusername');
  });

});