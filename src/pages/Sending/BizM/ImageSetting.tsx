import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { MouseEvent, useState } from 'react'
import styled from 'styled-components'

import { buttonHoverAnimation, inputTextFocusAnimation } from '../../../styles/GlobalStyle'
import { NoImageIcon } from '../../../components/common/Icons/Icons'
import Asterisk from '../../../components/common/Asterisk'
import { BizmInputs } from './BizMSeller'

type ImageSettingProps = {
  register: UseFormRegister<BizmInputs>
  watch: UseFormWatch<BizmInputs>
}

const ImageSetting = ({ register, watch }: ImageSettingProps) => {
  // states
  const [isShowPreview, setIsShowPreview] = useState<boolean>(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  // handlers
  const onClickPreview = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    watch('imageUrl') ? setPreviewUrl('../../../public/preview-sample.jpg') : setPreviewUrl(null)
    watch('imageUrl') ? setIsShowPreview(true) : setIsShowPreview(false)
  }

  return (
    <StyledImageSetting>
      <h1 className="imagesetting__title">이미지 설정</h1>
      <div className="imagesetting__wrapper">
        <div className="preview__area">
          {isShowPreview && previewUrl && previewUrl.length > 0 ? (
            <img width={80} height={80} src={previewUrl} alt="미리보기 이미지" style={{ borderRadius: '8px' }} />
          ) : (
            <NoImageIcon width={80} height={80} color="yellow" />
          )}
        </div>

        <div className="imagesetting__container">
          <div className="imageUrl__container">
            <label className="imageUrl__label" htmlFor="imageUrl">
              이미지 URL
              <Asterisk />
            </label>
            <input
              className="imageUrl__input general__input"
              id="imageUrl"
              type="text"
              {...register('imageUrl', { required: true })}
            />
            <button className="preview--btn" onClick={onClickPreview}>
              미리보기
            </button>
          </div>
          <div className="imageLink__container">
            <label htmlFor="imageLink" className="imageLink__label">
              이미지 링크
              <Asterisk />
            </label>
            <select defaultValue="http://" className="imageLink__select">
              <option value="http://">http://</option>
              <option value="https://">https://</option>
            </select>
            <input
              className="imageLink__input general__input"
              type="text"
              {...register('imageLink', { required: true })}
            />
          </div>
        </div>
      </div>
    </StyledImageSetting>
  )
}

export default ImageSetting

const StyledImageSetting = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.margin100};

  .imagesetting__title {
    margin-bottom: ${({ theme }) => theme.spacing.margin000};
    font-size: ${({ theme }) => theme.font.getSize(16)};
    font-family: 'SpoqaHanSansM';
  }

  .imagesetting__wrapper {
    display: flex;
    align-items: center;

    .general__input {
      ${inputTextFocusAnimation}
    }

    .preview__area {
      margin-right: ${({ theme }) => theme.spacing.margin100};
    }

    .imagesetting__container {
      .imageUrl__container {
        display: flex;
        margin-bottom: ${({ theme }) => theme.spacing.margin000};

        .imageUrl__label {
          display: flex;
          align-items: center;
        }

        .preview--btn {
          ${buttonHoverAnimation}
        }
      }

      .imageLink__container {
        .imageLink__label {
          margin-right: 8px;
        }

        .imageLink__select {
          margin-right: 8px;
          text-align: center;
          width: 80px;
          opacity: 0.7;
        }
      }
    }
  }
`
