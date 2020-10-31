import React from 'react';
import styled from 'styled-components';
import Header from '../header/header.jsx';
import Select from 'react-select';

const Container = styled.div`

`;

const Description = styled.h1`
  text-align: center;
`;

const SearchContainer = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const SearchBar = styled(Select)`
  color: black;
`;

const Button = styled.button`
  margin: 10% auto;
  display: block;
  color: #fff;
  background-color: #1db954;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  padding: 16px 48px 18px;
  border-width: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  transition-property: background-color;
  transition-duration: .3s;

  &:hover {
    background-color: #1ed760;
    cursor: pointer;
  }

  &:active {
    background-color: #1aa34a;
  }
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      artists: [
      { value: 'Ari', label: 'Ariana' },
      { value: 'strawberry', label: 'Kanye West' },
      { value: 'vanilla', label: 'Khalid' }]
    }
  }
  // componentDidMount() {
  //   // call api
  // }

  handleChange(value) {
    this.setState({value});
  }

  // redirect to carousel page
  handleLogin() {
    // handle api call to get a list of tracks from input.
    window.location = `http://localhost:3000/swipe`;
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Description>Build an awesome playlist!</Description>
          <SearchContainer>
            <SearchBar options={this.state.artists} placeholder={'Start with music similar to...'}/>
          </SearchContainer>
          <Button onClick={this.handleLogin}>Start Matching!</Button>
        </Container>
      </div>
    )
  }
}

export default Search;