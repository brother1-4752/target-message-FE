import { ImageType, mockImageCardList } from '../../constants/mockDatas/mockImageCardList'

interface ImageCardListProps {
  type: ImageType
}

const ImageCardList = ({ type }: ImageCardListProps) => {
  return (
    <div>
      {mockImageCardList[type].map((item) => (
        <div key={item.id}>
          <img src={item.image_url} alt={item.image_name} />
          <p>
            <input type="checkbox" data-imagedata={`${item.image_url}+${item.image_link}`} />
          </p>
        </div>
      ))}
    </div>
  )
}
