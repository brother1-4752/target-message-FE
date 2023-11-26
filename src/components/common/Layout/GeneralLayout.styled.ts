import styled from 'styled-components'

//TODO: 215, 52 margin관련 값들 반응형으로 변경
// 데스크탑 우선 : max-width 사용 ( 최대 ~까지 적용 )
// desktop = 크다 = max, 데스크탑은 해상도가 크기 때문에 큰게 먼저 조건에 부합
// 큰 가로폭부터 작은 가로폭 순서로 만드는 것
// 1200px : 사이드바 노출(데스크탑 : 가로 해상도가 1200px보다 작은 화면에 적용)
// 992px : 아이콘만 노출 (테스트탑 : 가로 해상도가 992px보다 작은 화면에 적용
// 768px : 사이드바 hide(테블릿 : 가로 해상도가 768px보다 작은 화면에 적용)
// 576px : font size 작아지고(타이틀), 레이아웃 배치 바뀔 수 있음. 가로모드 모바일 디바이스(모바일 : 가로 해상도가 576px보다 작은 화면에 적용)

export const StyledGeneralLayout = styled.div`
  width: 100%;

  .generallayout__main {
    margin: 52px 0 0 215px;
    background-color: green;
    display: flex;
  }

  @media (max-width: 1200px) {
    .generallayout__main {
      margin: 52px 0 0 215px;
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
      display: none;
    }
  }

  @media (max-width: 576px) {
    .generallayout__main {
      margin: 52px 0 0 0;
    }
  }
`
