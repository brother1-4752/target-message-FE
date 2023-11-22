import styled from 'styled-components'

export const StyledGeneralLayout = styled.div`
  width: 100%;

  .generallayout__header {
    position: fixed;
    margin-left: 215px;
    top: 0;
    width: 100%;
    height: 52px;
    background-color: blue;
  }

  .generallayout__main {
    margin: 52px 0 0 215px;
    background-color: green;
  }

  .generallayout__sidebar {
    width: 215px;
    height: 100vh;
    background-color: black;
    position: fixed;
    left: 0;
    top: 0;
  }
`
