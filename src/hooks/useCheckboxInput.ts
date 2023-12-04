import { ChangeEvent, useState } from 'react'

interface ImageCardProps {}

const useCheckboxInput = () => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const image_data = event.currentTarget.dataset.imagedata ?? ''
    const [image_url, image_link] = image_data?.split('+') ?? ['', '']
  }
}
