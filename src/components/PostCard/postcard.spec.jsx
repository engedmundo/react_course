import { render, screen } from '@testing-library/react';
import { Postcard } from '.';
import { postCardPropsMock } from './mock';
// import userEvent from '@testing-library/user-event';

const props = postCardPropsMock;


describe("<Postcard />", () => {
  test("render info successfully", () => {
    // const { debug } = render(<Postcard { ...props }/>);
    // debug();
    // expect.assertions(1);
    
    render(<Postcard { ...props }/>);
    
    const img = screen.getByRole("img", { name: "Some title"});
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "img/img.jpg");

    const heading = screen.getByRole("heading", { name: "Some title"});
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText("Some body");
    expect(paragraph).toBeInTheDocument();
  });
  
  test("to match snapshot", () => {
    const { container } = render (<Postcard { ...props } />);
    expect(container.firstChild).toMatchSnapshot();
  });
});