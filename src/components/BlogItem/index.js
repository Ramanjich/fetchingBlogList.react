import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {id, title, avatarUrl, imageUrl, topic, author} = eachList
  return (
    <Link to={`/blogs/${id}`} className="items-link">
      <div className="items-container">
        <img src={imageUrl} alt={`item${id}`} className="items-image" />
        <div className="container-1">
          <p className="topic-para">{topic}</p>
          <h1 className="title-heading">{title}</h1>
          <div className="container-2">
            <img src={avatarUrl} alt={`avatar${id}`} className="image-avatar" />
            <p className="author-para">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
