import styled from 'styled-components'

export const HomeDiv = styled.div`

.link {
  font-weight: 400;
  text-transform: uppercase;
}

.colorChoice {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  padding: 0.1em
}

.header {
  text-align: left;
}

h1 {
  margin: 0.5em 0 0 0 ;
  padding: 0;
  font-size: 2.5em;
}

h2, h3 {

  margin: 0px;
}

.colorChoice {
  margin: 5px 0 0 0; 
}

#listColor {
  margin: 1em;
}

.topSpan {
  display: flex;
  justify-content: space-between;
  align-items: baseline
}

.names-list {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 10px;
  max-width: 800px;
}

.name {
  font-weight: 400;
  border-radius: .5em;
  padding: 5%;
  text-align: center;
  /* background-color:lightsteelblue */
}
`;
