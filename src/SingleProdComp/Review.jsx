import React from 'react';
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io'
const Review = () => {
 
    return (
        <ReviewContainer>
            <Heading>Customer Reviews</Heading>
            <StarConatiner>
                <Stars><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></Stars>
                <Rating>3.5/5 <span>(Based on 87 ratings)</span></Rating>
            </StarConatiner>
            <Reviews>
                <ReviewSingle>
                    <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwc21pbGV8ZW58MHx8MHx8&w=1000&q=80" alt="UserImg" />
                    <Name>John Ceana <span>Nov 12, 2022</span> <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></span>
                        <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quam dignissimos repudiandae, veritatis numquam magnam voluptates. Necessitatibus, dicta quas! Perferendis.</Comment>
                        <Buttons>
                            <span><IoMdThumbsUp /> 45</span> <span><IoMdThumbsDown /> 10</span>
                        </Buttons>
                    </Name>
                </ReviewSingle>
                <ReviewSingle>
                    <img src="https://i.pinimg.com/236x/79/e3/f5/79e3f5c3d2757b5010ad55dce7d32d7d.jpg" alt="UserImg" />
                    <Name>John Ceana <span>Nov 12, 2022</span> <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></span>
                        <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quam dignissimos repudiandae, veritatis numquam magnam voluptates. Necessitatibus, dicta quas! Perferendis.</Comment>
                        <Buttons>
                            <span><IoMdThumbsUp /> 45</span> <span><IoMdThumbsDown /> 10</span>
                        </Buttons>
                    </Name>
                </ReviewSingle>
                <ReviewSingle>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk1vMhgyvgU5EIcaZKZdXew7MOfJVPubHOQKgRid2W_b6UR6Nq5iDMha5d5x6i4bpl1VI&usqp=CAU" alt="UserImg" />
                    <Name>John Ceana <span>Nov 12, 2022</span> <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></span>
                        <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quam dignissimos repudiandae, veritatis numquam magnam voluptates. Necessitatibus, dicta quas! Perferendis.</Comment>
                        <Buttons>
                            <span><IoMdThumbsUp /> 45</span> <span><IoMdThumbsDown /> 10</span>
                        </Buttons>
                    </Name>
                </ReviewSingle>
                <ReviewSingle>
                    <img src="https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg?w=2000" alt="UserImg" />
                    <Name>John Ceana <span>Nov 12, 2022</span> <span><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /></span>
                        <Comment>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quam dignissimos repudiandae, veritatis numquam magnam voluptates. Necessitatibus, dicta quas! Perferendis.</Comment>
                        <Buttons>
                            <span><IoMdThumbsUp /> 45</span> <span><IoMdThumbsDown /> 10</span>
                        </Buttons>
                    </Name>
                </ReviewSingle>
            </Reviews>
            <PostReview>
                <Heading>Write a review</Heading>
                <form>
                    <label htmlFor="rating">Rating:</label>
                    <select name="rating">
                        <option value="0.5">
                            0.5 star
                        </option>
                        <option value="1">
                            1 star
                        </option>
                        <option value="1.5">
                            1.5 stars
                        </option>
                        <option value="2">
                            2 stars
                        </option>
                        <option value="2.5">
                            2.5 stars
                        </option>
                        <option value="3">
                            3 stars
                        </option>
                        <option value="3.5">
                            3.5 stars
                        </option>
                        <option value="4">
                            4 stars
                        </option>
                        <option value="4.5">
                            4.5 stars
                        </option>
                        <option value="5">
                            5 stars
                        </option>
                    </select>
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" name="comment" rows="5" cols="40" placeholder='Share your experience' required></textarea>
                    <button type="submit">Submit Review</button>
                </form>
            </PostReview>

        </ReviewContainer>
    )
}
const ReviewContainer = styled.div`
    flex: 3;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px;
    background-color: #fff;
    margin-right: 16px;
    border-radius: 4px;
    @media screen  and (max-width:700px) {
      order: 2;
      margin: 20px 0 0 0;
    }
`
const Heading = styled.div`
    font-size: 1.4rem;
    margin-bottom: 18px;
`
const StarConatiner = styled.div``
const Stars = styled.div`
    color: var(--primary-color);
    svg{
        margin-right: 3px;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }
`
const Rating = styled.div`
  font-weight: 500;
`
const Reviews = styled.div``
const ReviewSingle = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 7px;
    img{
            height: 45px;
            width: 45px;
            border-radius: 50%;
            object-fit: cover;
        }
`

const Name = styled.div`
    width: 93%;
    flex-grow: 1;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 500;
    @media screen  and (max-width:1020px) {
        width: 8%;
    }
    span {
        :nth-child(2){
            float: right;
            color: var(--primary-color);
          svg{
            margin-right: 3px;
          } 
          @media screen  and (max-width:460px) {
                width: 100%;
                margin: 5px 0;
            }
        }
    }
`
const Comment = styled.div`
    font-size: 13px;
    font-weight: 400;
    margin-top: 5px;
`
const Buttons = styled.div`
    margin-top: 10px;
    display: flex;
    span{
        display: flex;
        align-items: center;
        margin-right: 20px;
        cursor: pointer;
        font-size: 13px;
        :nth-child(1){color: green;}
        :nth-child(2){color: #700000;}
        svg{font-size: 20px;margin-right: 4px;}
    }
`
const PostReview = styled.div`
    margin-top: 20px;
    form{
        display: flex;
        flex-direction: column;
        label{font-size:14px;}
        select , textarea{
            border-radius: 0.3rem;
            margin: 8px 0 16px 0;
            padding: 10px;
            border: none;
            background-color: #f3f3f3;
            resize: none;
        }
        button{
            width: fit-content;
            cursor: pointer;
            background-color: var(--primary-color);
            color: #fff;
            padding: 7px 15px;
            font-size: 16px;
            border: none;
            border-radius: 0.2rem;
            box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
        }
    }
`
export default Review