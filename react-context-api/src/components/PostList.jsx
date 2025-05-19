import { useContext } from 'react';
import PostCard from './PostCard';

function PostsList() {
    return (
        <div className='row'>
            {listPosts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsList