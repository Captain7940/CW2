import React from 'react';
import articles from './articles.json';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const onClick = (event: any) => {
 
}

const DetailArticle = () => {
  const { aid } = useParams();
  const navigate= useNavigate();
  for(var article of articles) { 
    console.log('article ', article)
    console.log('aid ', aid)
    console.log('article.id ',  article.id)
    if(article.id === parseFloat(aid!)) {
      return (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={article.imageurl}
              alt="Article Image"
              style={{ maxWidth: '100%', height: 'auto', marginRight: 10 }}
            />
            <div>
              <p>Title:<br></br>{article.title}</p>
              <p>Variety:<br></br>{article.variety}</p>
              <p>Gender:<br></br>{article.gender}</p>
              <p>Ages:<br></br>{article.age}</p>
              <p>Other Information:<br></br>{article.info}</p>
            </div>
          </div>
          
          <Button type="primary" onClick={()=>navigate(-1)}>Back</Button>
          <Button type="primary" onClick={onClick}>Adopt</Button>
        </>
      );    
    }        
  }
  return (
    <>
    <p>No details found </p>
     <Button type="primary" onClick={()=>navigate(-1)} >Back</Button>
      </>
  )
}

export default DetailArticle;