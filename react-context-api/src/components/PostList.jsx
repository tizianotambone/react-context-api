import { useContext } from 'react';
import PostContext from '../context/postContext';
import PostCard from './PostCard';

function PostsList() {

    const context = useContext(PostContext);

    return (
        <div className='row'>
            {context.listPost.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostsList