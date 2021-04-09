import React from 'react'
import * as s from './News.styling'
import { Button } from '../../globalStyles'


export const NewsItem = (props) => {

    let articleId = props.articleId;

    return (
        <s.ItemLink to={`news/id${articleId}`}>
            <s.NewsCartWrap>
                <s.NewsCartImage src={props.imageUrl} alt="News image" />
                <h4>{props.title}</h4>
                <Button fontBig orange>Read full article</Button>                       
            </s.NewsCartWrap>
        </s.ItemLink>
    )
};


