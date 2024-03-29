import { useNavigate } from 'react-router-dom'

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles'

export default function DirectoryItem({
  category: { imageUrl, title, route },
}) {
  const navigate = useNavigate()
  const onNavigateHandler = () => {
    navigate(route)
  }
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}
