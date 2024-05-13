import React from 'react'

function NewsDetailsPage( {params}) {
    const newsId = params.id;

  return (
    <>
    
        <div>News Details Page</div>
        <p>News Id: {newsId}</p>

    </>
    

  )
}

export default NewsDetailsPage