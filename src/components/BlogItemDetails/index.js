import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogInfo: {}, isLoading: false}

  componentDidMount() {
    this.getBlogsInfoBro()
  }

  getBlogsInfoBro = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const outputInfo = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const dataInfo = await outputInfo.json()

    const updatedData = {
      title: dataInfo.title,
      imageUrl: dataInfo.image_url,
      content: dataInfo.content,
      avatarUrl: dataInfo.avatar_url,
      author: dataInfo.author,
    }
    this.setState({blogInfo: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogInfo} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogInfo

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
