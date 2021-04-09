import React, { useState } from 'react'
import * as s from './Blog.styling'
import { getBlogPosts } from '../../Requests/blog'
import { BlogItem } from './BlogItem'


export const Blog = () => {

    const [ blogPosts, setBlogPosts ] = useState([]);

    console.log(blogPosts);

    React.useEffect( () => {
      // This makes a get request according to the link when the component is mounted
      getBlogPosts()
        .then((response) => {
          console.log("response:", response);
          setBlogPosts(response.data)
      })
        .catch((error) => console.log("error:", error))
        
    }, []);
    
    return (
        <>
            <s.BlogSection>
                <s.BlogFlexGrid>
                    {
                        blogPosts.map(item => (
                            <BlogItem imageUrl={item.imageUrl} title={item.title} key={item.id} />
                        ))
                    }
                </s.BlogFlexGrid>
           </s.BlogSection>
        </>
    )
}


