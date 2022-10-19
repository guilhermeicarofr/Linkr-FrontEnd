import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Post from '../Post.js';
import PublishPost from "../publishPost";

function Timeline() {

    const posts = [
        {
            "userId": 1,
            "name": "andre",
            "picture": "https://i.pinimg.com/736x/c5/a9/68/c5a968eb0a92b427ca26646cf55526bb.jpg",
            "postId": 1,
            "url": "https://www.google.com/",
            "description": "teste teste teste"
        },
        {
            "userId": 1,
            "name": "andre",
            "picture": "https://i.pinimg.com/736x/c5/a9/68/c5a968eb0a92b427ca26646cf55526bb.jpg",
            "postId": 4,
            "url": "https://www.google.com/",
            "description": "teste4 teste4 teste4"
        }    
    ];


    return (
        <Page>
            <PublishPost />
            {posts.map((p,index) => 
                <Post 
                    key={index}
                    postId={p.postId}
                    url={p.url}
                    description={p.description}
                    name={p.name}
                    userId={p.userId}
                    picture={p.picture}
                />
            )}
        </Page>
    );
}

export default Timeline;

const Page = styled.div`
  background-color: #333333;
  padding-top: 20px;
`;
