import { buildFeedbackPath, extractFeedback } from "./feedback"

export default function handler( req, res ){
    const feedbackId = req.query.feedbackId
    const filePath = buildFeedbackPath();
    const feedbackData = extractFeedback( filePath )
    const selectedFeedback = feedbackData.find( 
        el => el.id === feedbackId 
    )
    res.status(200).json({ feedback: selectedFeedback })

}