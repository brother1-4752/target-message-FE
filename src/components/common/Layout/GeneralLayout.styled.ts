import styled from 'styled-components'

export const StyledGeneralLayout = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.font.getSize(14)};

  .generallayout__header,
  .generallayout__main {
    background-color: ${({ theme }) => theme.color.white400};
  }

  .generallayout__main {
    min-height: 100%;
  }

  /* 스몰 디바이스 (작은 스마트폰 등) */
  @media only screen and (max-width: 768px) {
    /* 여기에 768px 미만일 때의 스타일을 작성하세요 */
    zoom: 0.75;

    .generallayout__header {
      margin-left: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.color.black200};
      color: ${({ theme }) => theme.color.white200};
      svg,
      svg > path {
        fill: ${({ theme }) => theme.color.white200};
      }
    }

    .generallayout__main {
      margin: 52px 0 0 0;
    }

    .generallayout__sidebar {
      width: 0;
    }
  }

  /* 중간 디바이스 (타블렛 등) */
  @media only screen and (min-width: 768.1px) and (max-width: 992px) {
    /* 여기에 768px 이상, 992px 미만일 때의 스타일을 작성하세요 */
    .generallayout__header {
      margin-left: ${({ theme }) => theme.spacing.sidebarDesktop.left};
      width: calc(100% - ${({ theme }) => theme.spacing.sidebarDesktop.left});
    }
    .generallayout__main {
      margin: ${({ theme }) => theme.spacing.sidebarDesktop.margin};
      width: calc(100% - ${({ theme }) => theme.spacing.sidebarDesktop.left});
    }
    .generallayout__sidebar {
      width: ${({ theme }) => theme.spacing.sidebarDesktop.left};
    }
  }

  /* 라지 디바이스 (데스크탑 등) */
  @media only screen and (min-width: 992.1px) {
    /* 여기에 992px 이상, 1200px 미만일 때의 스타일을 작성하세요 */

    .generallayout__header {
      margin-left: ${({ theme }) => theme.spacing.sidebarLargeDesktop.left};
      width: calc(100% - ${({ theme }) => theme.spacing.sidebarLargeDesktop.left});
    }
    .generallayout__main {
      margin: ${({ theme }) => theme.spacing.sidebarLargeDesktop.margin};
    }
    .generallayout__sidebar {
      width: ${({ theme }) => theme.spacing.sidebarLargeDesktop.left};
    }
  }
`
