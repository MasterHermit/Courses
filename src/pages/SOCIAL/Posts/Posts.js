import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component"
import { useFetchAllPostQuery } from "../../../store";
import { loadAllPosts } from '../../../store/apis/postApis/axiosPosts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error"
import Post from "../Post/Post"

const Posts = () => {
    const [postContent, setPostContent] = useState({
        content: [],
        totalPages: '',
        totalElements: '',
        pageSize: '',
        lastPage: false,
        pageNumber: ''

    })
    const [currentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        console.log("loading posts")
        console.log(currentPage)
        changePage(currentPage)

    }, [currentPage]);



    const changePage = (pageNumber = 0, pageSize = 5) => {
        if (pageNumber > postContent.pageNumber && postContent.lastPage) {
            return
        }
        if (pageNumber < postContent.pageNumber && postContent.pageNumber == 0) {
            return
        }
        loadAllPosts(pageNumber, pageSize).then(data => {
            setPostContent({
                content: [...postContent.content, ...data.content],
                totalPages: data.totalPages,
                totalElements: data.totalElements,
                pageSize: data.pageSize,
                lastPage: data.lastPage,
                pageNumber: data.pageNumber
            })

            console.log(data);

        }).catch(error => {
            toast.error("Error in loading posts")

        })
    }
    const changePageInfinite = () => {
        setCurrentPage(currentPage + 1)

    }

    return (
        <div>
            <InfiniteScroll
                dataLength={postContent.content.length}
                next={changePageInfinite}
                hasMore={!postContent.lastPage}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {
                    postContent.content.map((post) => (
                        <Post post={post} key={post.id} />
                    ))
                }

            </InfiniteScroll>
            <ToastContainer />
        </div>
    );
};

export default Posts;