import React, { useState } from 'react'
import * as s from './News.styling'
import { getArticles } from '../../Requests/posts'
import { NewsItem } from './NewsItem'


export const News = () => {

    const [posts, setPosts] = useState([]);

    console.log(posts);

    React.useEffect( () => {
      // This makes a get request according to the link when the component is mounted
      getArticles()
        .then((response) => {
          console.log("response:", response);
          setPosts(response.data)
      })
        .catch((error) => console.log("error:", error))
        
    }, []);
    
    return (
        <>
            <s.NewsSection>
                <s.NewsFlexGrid>
                    {
                        posts.map(item => (
                            <NewsItem imageUrl={item.imageUrl} title={item.title} articleId={item.id} key={item.id} />
                        ))
                    }
                </s.NewsFlexGrid>
           </s.NewsSection>
        </>
    )
}


