import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogslist: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const camelCaseData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      topic: eachItem.topic,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
    }))
    this.setState({blogslist: camelCaseData, isLoading: false})
  }

  render() {
    const {blogslist, isLoading} = this.state
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogslist.map(eachList => (
            <BlogItem eachList={eachList} key={eachList.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
