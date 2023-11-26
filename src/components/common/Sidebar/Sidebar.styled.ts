import styled from 'styled-components'

export const StyledSidebar = styled.div`
  font-family: SpoqaHanSansT;
  width: 215px;
  min-height: 100vh;
  background-color: var(--color-black-1);
  color: var(--color-white-2);
  fill: var(--color-white-2);
  font-size: var(--font-size14);
  position: fixed;
  left: 0;
  top: 0;
  overflow: scroll;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* 인터넷익스플로러 */
  user-select: none; /* 표준브라우저 */

  .sidebar__header {
    display: flex;
    height: 52px;
    align-items: center;
    padding: var(--padding-1);
    box-sizing: border-box;
    border-bottom: 1px solid var(--color-white-3);
  }
`
