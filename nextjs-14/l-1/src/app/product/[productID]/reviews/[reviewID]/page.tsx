
interface ReviewDetailProps{
    params:{
        productID: string
        reviewID: string
    }
}
const ReviewDetail = ({ params }:ReviewDetailProps ) => {
  return (
    <div>
        <h1>Review Detail</h1>
        <p>Review {params.reviewID} for product {params.productID} </p>
    </div>
  )
}

export default ReviewDetail