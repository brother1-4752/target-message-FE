import styled from 'styled-components'

export const StyledSignIn = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-white-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  box-sizing: border-box;

  //헤더
  .signin__header {
    display: flex;
    flex-direction: column;
    width: 700px;
    align-items: center;
    zoom: 1.2;

    .signin__header--title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;

      .signin__header--typography {
        margin-top: 14px;
      }
    }

    .signin__header--description {
      font-size: var(--font-size12);
      color: var(--color-black-2);
      display: flex;
      justify-content: center;
      width: 120px;
      font-family: 'SpoqaHanSansL';
      letter-spacing: 3px;
      margin-top: -5px;
    }
  }

  //메인
  .signin__main {
    display: flex;
    width: 700px;
    height: 550px;
    margin-top: var(--ml-2);

    .signin__form--container {
      width: 380px;
      height: 518px;
      background-color: var(--color-white-1);
      margin: var(--ml-1);
      box-sizing: border-box;
      border-radius: 16px;
      padding: 0 24px;

      .signin__form {
        margin-top: 64px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .signin__form--title {
          font-size: var(--font-size24);
          font-family: 'SpoqaHanSansB';
          margin-bottom: 16px;
        }

        .signin__form--input {
          width: 100%;
          display: flex;
          flex-direction: column;
          margin: var(--ml-1) 0 0 0;
          input {
            height: 36px;
            border-radius: 8px;
            margin-bottom: 12px;
            border: 1px solid #e5e5e5;
          }

          input::placeholder {
            font-size: var(--font-size12);
            color: #d7d7d7;
            padding-left: 16px;
          }
        }

        .signin__form--button {
          width: 100%;
          margin-bottom: var(--ml-2);
          button {
            width: 100%;
            height: 45px;
            background-color: black;
            color: var(--color-white-1);
            border-radius: 8px;
            border: none;
          }
        }

        .signin__additionals {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: var(--font-size12);

          .signin__additionals--left {
            display: flex;
            align-items: center;
          }

          .signin__additionals--right {
            display: flex;
            gap: 8px;
            align-items: center;
            cursor: pointer;
            color: #929292;
          }
        }
      }

      .signin__hr {
        margin: var(--ml-2) 0;
      }

      .signin__etc {
        width: 100%;
        margin-top: var(--ml-2);

        button {
          width: 100%;
          height: 45px;
          background-color: white;
          color: black;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
        }
      }
    }

    .signin__banners {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .signin__main--right-top,
      .signin__main--right-bottom {
        width: 100%;
        height: 45%;
        margin-top: 10px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .signin__main--right-top:hover,
      .signin__main--right-bottom:hover {
        opacity: 0.9;
      }
    }
  }

  //푸터
  .signin__footer--container {
    position: fixed;
    display: flex;
    justify-content: center;
    padding-top: var(--ml-2);
    box-sizing: border-box;
    bottom: 0;
    height: 110px;
    width: 100%;
    background-color: var(--color-black-2);
    color: var(--color-white-2);

    .signin__footer {
      width: 700px;

      .signin__footer--top {
        color: gray;
        font-size: 11px;
      }
      .signin__footer--bottom {
        padding-top: var(--ml-1);
        font-size: 11px;
        text-decoration: underline;
      }
    }
  }
`
