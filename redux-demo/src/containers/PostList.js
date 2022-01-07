import React from 'react'
import { connect } from 'react-redux'
import Posts from '../components/Posts'

function PostList(newPosts) {
 return (
   <div>
     {newPosts.map(post => {
       return (
         <Posts post={ post } key={ post.id } />
       );
     })}
   </div>
 );
}
function mapStateToProps(state){
 return {
   newPosts: state.posts
 };
};

export default connect(
 mapStateToProps,
 null,
)(PostList);
