import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const SinglePost = () => {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [params.id]);

  if (!post) return null;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      TAGS:{' '}
      {post.tags.map((tag) => (
        <span style={{ marginRight: '4px' }} key={tag}>
          {tag}
        </span>
      ))}
      <div>REACTIONS: {post.reactions}</div>
    </div>
  );
};
