import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../Requests/articleId'
import * as s from './Article.styling'



export const Article = () => {
    let newsId = useParams();

    let idValue = Object.values(newsId).shift();
    console.log(idValue);
    const [post, setPost] = useState({});

    console.log(post);

    React.useEffect( () => {
     
        getArticleById(idValue)
        .then((response) => {
          console.log("response:", response);
          setPost(response.data)
      })
        .catch((error) => console.log("error:", error))
        
    }, [idValue]);

    return (
        <s.ArticleSection>
            <s.ArticleContainer>
                <s.ArticleTitle>{post.title}</s.ArticleTitle>
                <s.ArticleImage src={post.imageUrl} alt="Image Of the News"/>                
                <s.ArticleSummary>{post.summary}</s.ArticleSummary>
                <p>You can follow the link to read the full article on the source page: <a href={post.url}>{post.url}</a></p>
                
            </s.ArticleContainer>
        </s.ArticleSection>
    )
};

 
