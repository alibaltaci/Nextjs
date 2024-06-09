import { notFound } from "next/navigation"

interface ReviewDetailProps{
    params:{
        productID: string
        reviewID: string
    }
}

const ReviewDetail = ({ params }:ReviewDetailProps ) => {

  if( parseInt(params.reviewID) > 1000){
    notFound()
  }

  return (
    <div>
        <h1>Review Detail</h1>
        <p>Review {params.reviewID} for product {params.productID} </p>
    </div>
  )
}

export default ReviewDetail