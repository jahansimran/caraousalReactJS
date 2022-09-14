import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  renderActiveDetails = reviews => {
    const {imgUrl, username, companyName, description} = reviews

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="profile" />
        <p className="arrow-heading">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="company-name">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <div className="arrow-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            className="arrow-left-btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveDetails(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            className="arrow-right-btn"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
