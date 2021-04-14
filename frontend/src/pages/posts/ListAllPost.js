import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Alert from '../../components/Alert';
import moment from 'moment';

function ListAllPost() {
    const cookies = new Cookies();
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
      onLoadPost()
    }, [])

    var setHeader = {
      headers: {
          Authorization: 'Bearer ' + cookies.get('ppe-training-fe-token')
      }
    }

    function GetUserName(id)
    {
      var name = "";
      /* users.map((user,key) => {
        if (id == (user.id)) {
          name = user.name;
        }
      }
      ) */
      var x;
      for (x in users) {
        if (id == (users[x].id)) {
          name = users[x].name;
          break;
        }
      }
      return name
    }

    const onLoadPost = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/all-posts`, {headers:setHeader.headers})
        .then(function (response) {
          // console.log('response',response)
          setPosts(response?.data?.data?.posts)
          setUsers(response?.data?.data?.users)

        })
        .catch(function (error) {
          console.log('error',error)
        });
    }

    const onDelete = (post) => {
      if (window.confirm("Are you sure, want delete it?")){
        axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post.id}`, setHeader)
        .then(function (response) {
          if (response.data.status) {
            onLoadPost()
            // Alert({t: `success`, c: [`Delete post success`]});
          } else {
            Alert({t: `error`, c: [response.data.message]});
          }
          //console.log(response);
        })
        .catch(function (error) {
        });
      }
    }

    return (
        <div className="mx-auto max-w-sm">
            <nav className="uppercase flex space-x-4 justify-center py-3">
                <Link to={'/ListPost?me'}>My posts</Link>
                <Link to={'/ListAllPost'} className="text-blue-700">All posts</Link>
                <Link to={'/CreatePost'}>Create</Link>
            </nav>
            <ul className="">
                
                {posts.map((post,key) => 
                    <li className="py-2 my-2 border-t">
                        <Link className="" to={`/EditPost/${post.id}`}>
                            <h3 className="font-semibold">{post.title}</h3>
                            <p className="break-words">{post.description}</p>
                            <p className="text-gray-400 mt-1">Created by: {GetUserName(post.user_id)}</p>
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
export default ListAllPost