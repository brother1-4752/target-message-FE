export type ImageType = 'general' | 'wide'

interface ImageCardProps {
  id: number
  image_url: string
  image_name: string
  image_link: string
  checked?: boolean
}

export type ImageTypeProps = {
  [key in ImageType]: ImageCardProps[]
}

export const mockImageCardList: ImageTypeProps = {
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
