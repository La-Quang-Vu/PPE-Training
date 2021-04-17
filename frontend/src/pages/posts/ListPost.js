import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import {listPost, postsSelector, deletePost} from "../../slices/posts";

function ListPost() {
    const {lPosts} = useSelector(postsSelector)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listPost())
    }, [])

    const onDelete = (post) => dispatch(deletePost(post))

    return (
        <div className="mx-auto max-w-sm">
            <nav className="uppercase flex space-x-4 justify-center py-3">
                {/* <Link to={'/ListPost?me'} className="text-blue-700">My posts</Link>
                <Link to={'/ListPost?all'}>All posts</Link> */}
                <Link to={'/ListPost?me'} className="text-blue-700">My posts</Link>
                <Link to={'/ListAllPost'}>All posts</Link>
                <Link to={'/CreatePost'}>Create</Link>
            </nav>
            <ul className="">
                
                {lPosts.map((post,key) => 
                    <li className="py-2 my-2 border-t">
                        <Link className="" to={`/EditPost/${post.id}`}>
                            <h3 className="font-semibold">{post.title}</h3>
                            <p className="break-words">{post.description}</p>
                            <p className="text-gray-400">{moment(post.created_at).fromNow()}</p>
                        </Link>
                        <button 
                        onClick={()=>onDelete(post)}
                        className="btn mt-3">Delete</button>
                    </li>
                )}
                
                
            </ul>
        </div>
    )
}
export default ListPost