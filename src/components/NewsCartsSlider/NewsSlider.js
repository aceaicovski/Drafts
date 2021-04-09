import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';
import * as s from './NewsSlider.styling'


import { getArticles } from '../../Requests/posts'


export const NewsSlider = () => {
    const breakPoints = [
        { width: 200, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 1100, itemsToShow: 3 },

    ];

    const [posts, setPosts] = useState([]);

    React.useEffect( () => {
      
      getArticles()
        .then((response) => {
          console.log("response:", response);
          setPosts(response.data)
      })
        .catch((error) => console.log("error:", error))
        
    }, []);

    console.log(posts);

    return (
      <s.SliderWrap>
        <s.SliderHeader>Breaking News of the hour</s.SliderHeader>  
        <Carousel breakPoints={breakPoints}
                  transitionMs={700}
                  > 
            
                {posts.map((slide, index) => {
                    return (
                        <s.NewsContainer key={slide.id}>                            
                              <s.SliderTitle key={slide.title}>{slide.title}</s.SliderTitle>
                              <s.TextContainer key={slide.summary}>{slide.summary}</s.TextContainer>
                        </s.NewsContainer>
                    )
                })}

        </Carousel> 

     </s.SliderWrap>   
    )
}

