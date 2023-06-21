import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similarProductItem">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similarProductImg"
      />
      <p className="similarProductTitle">{title}</p>
      <p className="similarProductBrand">{brand}</p>
      <div className="similarProductPriceRatingContainer">
        <p className="similarProductPrice">Rs {price}</p>
        <div className="similarProductRatingContainer">
          <p className="similarProductRating">{rating}</p>
          <img
            className="similarProductStar"
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
