import styled from 'styled-components'
import { HomeIcon, SendingIcon } from '../../../components/common/Icons/Icons'
import { useState } from 'react'

const BizMSeller = () => {
  const [btnUrl, setBtnUrl] = useState<string>('')
  const [btnName, setBtnName] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const onChangeBtnUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBtnUrl(event.target.value)
  }

  const onChangeBtnNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBtnName(event.target.value)
  }

  const onChangeDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const openImageSelectionModal = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log('openImageSelectionModal')
  }

  return (
    <StyledBizMSeller>
      <div className="bizm__wrapper">
        <header className="bizm__header">
          <span>
            <SendingIcon width={20} height={20} />
          </span>
          <span>발송 예약 | 비즈엠</span>
        </header>

        <form className="bizm__form">
          <div className="image__container">
            <label className="image__title">이미지 설정</label>
            <div className="image__description">
              <div className="preview__img"></div>
              <div className="image__settings">
                <div>
                  <button onClick={openImageSelectionModal}>
                    <span>
                      <HomeIcon />
                    </span>
                    이미지 선택
                  </button>
                  <button>
                    <span>
                      <HomeIcon />
                    </span>
                    이미지 삭제
                  </button>
                </div>
                <label htmlFor="image_url">URL 설정</label>
                <div>
                  <select name="image_url" id="image_url">
                    <option value="http://">http://</option>
                    <option value="https://">https://</option>
                  </select>
                  <input type="text" id="image_url" name="image_url" />
                  <button>URL 테스트</button>
                </div>
              </div>
            </div>
          </div>

          <div className="button__container">
            <div className="button__title">버튼 설정</div>
            <table>
              <thead>
                <tr>
                  {['순번', '버튼타입', '버튼명', '버튼URL', '제거'].map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, type: 'text', name: '버튼1', url: 'http://example1' },
                  { id: 2, type: 'wl', name: '버튼2', url: 'http://example2' },
                  { id: 3, type: null, name: null, url: null },
                ].map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <select>
                        <option value="">선택</option>
                        <option value="text" selected={item.type === 'text'}>
                          텍스트
                        </option>
                        <option value="wl" selected={item.type === 'wl'}>
                          웹링크
                        </option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="버튼명"
                        value={item.name ?? undefined}
                        onChange={onChangeBtnNameHandler}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="버튼 url"
                        value={item.url ?? undefined}
                        onChange={onChangeBtnUrlHandler}
                      />
                    </td>
                    <td>
                      <button>-</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <button>버튼 추가</button>
              <button>버튼 전체 삭제</button>
            </div>
          </div>

          <div className="sending__container">
            <div className="sending__title">발송일자 설정</div>
            <input type="date" onChange={onChangeDateHandler} />
          </div>

          <button>발송 예약</button>
        </form>
      </div>
    </StyledBizMSeller>
  )
}

export default BizMSeller

const StyledBizMSeller = styled.div`
  padding: 32px 0 0 32px;
  font-size: ${({ theme }) => theme.font.getSize(16)};
  width: 95%;

  .bizm__wrapper {
    background-color: white;
    border-radius: 4px;
    border: 1px solid rgb(233 236 239);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 5px;
  }

  .bizm__header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.white200};
    padding: ${({ theme }) => theme.spacing.margin100};
    gap: 4px;
  }

  .bizm__form {
    padding: ${({ theme }) => theme.spacing.margin100};

    .image__container {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.margin100};
      margin: ${({ theme }) => theme.spacing.margin100} 0;

      .image__title {
      }

      .image__description {
        display: flex;
        gap: 16px;
      }

      .preview__img {
        width: 100px;
        height: 100px;
        background-color: green;
      }

      .image__settings {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }

  .sending__container {
    display: flex;
  }
`
