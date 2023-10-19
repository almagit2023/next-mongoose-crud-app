import React from 'react'
import EditTopicForm from '../components/EditTopicForm'
import { useParams } from 'next/navigation'
import ErrorComponent from '../components/ErrorComponent'

export default function EachPost() {
  const params = useParams()
  if (params && params.id) {
    console.log("Params : ", params)
  }
  return (
    <div>
      {
        params && params.id ? <EditTopicForm postId={params.id} /> : <ErrorComponent/>
      }
    </div>
  )
}