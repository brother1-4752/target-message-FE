/* eslint-disable no-constant-condition */
import styled from 'styled-components'
import { HomeIcon, NoImageIcon, SendingIcon } from '../../../components/common/Icons/Icons'
import { FormEvent, useState } from 'react'
import Modal, { ImageType, ImageTypeProps } from '../../../components/modal/Modal'

const MockImageCardList: ImageTypeProps = {
  general: [
    {
      id: 1,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지1',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 2,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지2',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 3,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지3',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 4,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지4',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 5,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지5',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 6,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지6',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 7,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지7',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 8,
      image_url: 'https://picsum.photos/50/50',
      image_name: '일반 이미지8',
      image_link: 'https://brandi.co.kr',
    },
  ],

  wide: [
    {
      id: 1,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지1',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 2,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지2',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 3,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지3',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 4,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지4',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 5,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지5',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 6,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지6',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 7,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지7',
      image_link: 'https://brandi.co.kr',
    },
    {
      id: 8,
      image_url: 'https://picsum.photos/80/50',
      image_name: '와이드 이미지8',
      image_link: 'https://brandi.co.kr',
    },
  ],
}

const BizMSeller = () => {
  //form-data input value
  const [btnUrl, setBtnUrl] = useState<string>('')
  const [btnName, setBtnName] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [msg, setMsg] = useState<string>('')

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [imageType, setImageType] = useState<ImageType>('general')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [test, setTest] = useState<string>('')

  console.log(imageUrl.length > 0 ? 'true' : 'false')

  const onChangeBtnUrlHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBtnUrl(event.target.value)
  }

  const onChangeBtnNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBtnName(event.target.value)
  }

  const onChangeMsg = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(event.target.value)
  }

  const onChangeDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  const openImageSelectionModal = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsModalOpen((prev) => !prev)
  }

  const onChangeImageTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageType(event.target.value as ImageType)
  }

  const onClickImageHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    //TODO: 이미지 아이템 중 src가 일치하는 것을 찾아서 해당 이미지를 미리보기에 띄워줘야 함
    console.log(imageUrl)
    console.log(imageType)
    setIsModalOpen(false)
  }

  const onCheckImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault()
    const image_data = event.currentTarget.dataset.imagedata ?? ''
    const [image_url, image_name] = image_data?.split('+') ?? ['', '', '']
    console.log(image_name)

    setImageUrl(image_url)
    setTest(image_data)
  }

  const onsendingClick = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    //버튼 데이터 리스트는 하나하나 onChange로 데이터 관리 X, 리스트째로 관리해야 함
    console.log(btnUrl)
    console.log(btnName)
    console.log(date)
    console.log(msg)
    console.log(imageUrl)
  }

  const onDeleteClick = (event: FormEvent<HTMLButtonElement>) => {
    console.dir(event.currentTarget.parentElement)
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
              {imageUrl.length === 0 ? <NoImageIcon /> : <PreviewImage image_url={imageUrl}></PreviewImage>}
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
                {/* TODO: 아래 버튼데이터리스트 null없이 모든 필드 필수값으로 채워지면, 
                각 객체마다 데이터 묶어서 전송 */}
                {[
                  { id: 1, type: 'text', name: '버튼1', url: 'http://example1' },
                  { id: 2, type: 'wl', name: '버튼2', url: 'http://example2' },
                  // { id: 3, type: null, name: null, url: null },
                ].map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>
                      <select defaultValue={item.type ?? ''} required>
                        <option value="">선택</option>
                        <option value="text">텍스트</option>
                        <option value="wl">웹링크</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="버튼명"
                        defaultValue={item.name}
                        onChange={onChangeBtnNameHandler}
                        required
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="버튼 url"
                        defaultValue={item.url}
                        onChange={onChangeBtnUrlHandler}
                        required
                      />
                    </td>
                    <td>
                      <button onClick={onDeleteClick}>-</button>
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

          <div className="message__container">
            <input type="text" placeholder="기본문구 입력..." onChange={onChangeMsg} />
          </div>

          <div className="sending__container">
            <div className="sending__title">발송일자 설정</div>
            <input type="date" onChange={onChangeDateHandler} />
          </div>

          <button onClick={onsendingClick}>발송 예약</button>
        </form>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen((prev) => !prev)}>
          <div className="modal__wrapper">
            <header className="modal__header">
              <h1>이미지 선택</h1>
              <button onClick={() => setIsModalOpen(false)}>X</button>
            </header>

            <input
              type="radio"
              name="image_type"
              id="general"
              value="general"
              defaultChecked
              onChange={onChangeImageTypeHandler}
            />
            <label htmlFor="general">일반</label>
            <input type="radio" name="image_type" id="wide" value="wide" onChange={onChangeImageTypeHandler} />
            <label htmlFor="wide">와이드</label>
            <IamgeCardWrapper>
              {MockImageCardList[imageType].map((item) => (
                <ImageCardBox key={item.id}>
                  <img src={item.image_url} alt={item.image_name} />
                  <p>
                    <input
                      type="checkbox"
                      checked={test === `${item.image_url}+${item.image_name}`}
                      data-imagedata={`${item.image_url}+${item.image_name}`}
                      onChange={onCheckImage}
                    />
                    {item.image_name}
                  </p>
                </ImageCardBox>
              ))}
            </IamgeCardWrapper>
          </div>
          <div>
            <button onClick={onClickImageHandler}>선택</button>
            <button onClick={() => setIsModalOpen(false)}>취소</button>
          </div>
        </Modal>
      )}
    </StyledBizMSeller>
  )
}

export default BizMSeller

const PreviewImage = styled.div<{ image_url: string }>`
  width: 100px;
  height: 100px;
  /* TODO: 초기 로딩시 No Image 렌더링 */
  background-image: url(${({ image_url }) => image_url});
  background-size: cover;
`

const IamgeCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`

const ImageCardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

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
