import React from 'react'
import * as s from './Blog.styling'
import { Button } from '../../globalStyles'



export const BlogItem = (props) => {
    return (
        <s.BlogCartWrap>
            <s.BlogCartImage src={props.imageUrl} alt="News image" />
            <h4>{props.title}</h4>
            <Button to="/" fontBig>Read full post</Button>
        </s.BlogCartWrap>
    )
}


