import { notFound } from "next/navigation"

interface ReviewDetailProps{
    params:{
        productID: string
        reviewID: string
    }
}

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count)
}

const ReviewDetail = ({ params }:ReviewDetailProps ) => {

  const random = getRandomInt(2)

  if( random === 1){
    throw new Error("Error loading review")
  }

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