import { MouseEvent, useState } from 'react'
import { NoImageIcon } from '../../../components/common/Icons/Icons'
import { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { BizmInputs } from './BizMSeller'

type ImageSettingProps = {
  register: UseFormRegister<BizmInputs>
  watch: UseFormWatch<BizmInputs>
}

const ImageSetting = ({ register, watch }: ImageSettingProps) => {
  // 이미지 설정
  const onClickPreview = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    //TODO: previewUrl이 set되기 위해, 미리보기 2번 클릭이 필요?! 왜 그런지 트래킹하기
    watch('imageUrl') ? setPreviewUrl('../../../public/preview-sample.jpg') : setPreviewUrl(null)
    watch('imageUrl') ? setIsShowPreview(true) : setIsShowPreview(false)
  }

  const [isShowPreview, setIsShowPreview] = useState<boolean>(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  return (
    <div style={{ display: 'flex' }}>
      <div className="preview__area">
        <div className="preview__image">
          {isShowPreview && previewUrl && previewUrl.length > 0 ? (
            <img width={100} height={100} src={previewUrl} alt="미리보기 이미지" />
          ) : (
            <NoImageIcon />
          )}
        </div>
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <label className="image__url" htmlFor="imageUrl">
            이미지 URL
          </label>
          <input id="imageUrl" type="text" {...register('imageUrl', { required: true })} />
          <button onClick={onClickPreview}>미리보기</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="imageLink">랜딩페이지 링크 설정</label>
          <div>
            <select defaultValue="http://">
              <option value="http://">http://</option>
              <option value="https://">https://</option>
            </select>
            <input type="text" {...register('imageLink', { required: true })} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSetting
