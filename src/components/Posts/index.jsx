import "./styles.css";

import { Postcard } from '../PostCard';

export const Posts = ({posts}) => {
    return (
      <div className="posts">
        {posts.map(post => (
          <Postcard 
            key={post.id}
            title={post.title}
            cover={post.cover}
            body={post.body}
          />
        ))}
      </div>
    )   
  }