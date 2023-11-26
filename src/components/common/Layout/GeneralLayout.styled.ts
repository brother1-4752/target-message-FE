import styled from 'styled-components'
import { keyframes } from 'styled-components'

const animation1 = keyframes`
  from {
    width: 0;
  }
  to {
    width: 45px;
  }
`

const animation2 = keyframes`
  from {
    width: 45px;
  }
  to {
    width: 215px;
  }
`

const animation3 = keyframes`
  from {
    width: 215px;
  }
  to {
    width: 45px;
  }
`

const animation4 = keyframes`
  from {
    width: 45px;
  }
  to {
    width: 0;
  }
`

export const StyledGeneralLayout = styled.div`
  width: 100%;
  transition: width 0.3s ease-in-out;

  .generallayout__main {
    margin: 52px 0 0 215px;
    background-color: green;
    display: flex;
  }

  @media (max-width: 1200px) {
    .generallayout__main {
      margin: 52px 0 0 215px;
    }
    .generallayout__sidebar {
      width: 215px;
    }
  }
  @media (max-width: 992px) {
    .generallayout__header {
      margin-left: 45px;
      width: calc(100% - 45px);
    }

    .generallayout__main {
      margin: 52px 0 0 45px;
    }

    .generallayout__sidebar {
      width: 45px;
    }
  }

  @media (max-width: 768px) {
    font-size: var(--font-size13);
    svg,
    svg > path {
      width: var(--font-size13);
      height: var(--font-size13);
    }
    .generallayout__header {
      margin-left: 0;
      width: 100%;
      background-color: var(--color-black-2);
      color: var(--color-white-2);
      svg,
      svg > path {
        fill: var(--color-white-2);
      }
    }

    .generallayout__main {
      margin: 52px 0 0 0;
    }

    .generallayout__sidebar {
      width: 0;
      /* display: none; */
    }
  }

  @media (max-width: 576px) {
    .generallayout__main {
      margin: 52px 0 0 0;
    }
  }
`
