import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export const UpdatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setBody(data.body);
      });
  }, [params.id]);

  const onUpdatePost = () => {
    setLoading(true);
    console.log({ title, body });
    fetch(`https://dummyjson.com/posts/add/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => {
        if (res.status !== 200) {
          console.log('error');
          setLoading(false);
          return;
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log('Updated post:', data);
        navigate('/posts');
      });
  };

  return (
    <div>
      <h1>Update Post</h1>
      <p>Title</p>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <p>Body</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        row="20"
      />
      <div>
        <button disabled={!title || !body || loading} onClick={onUpdatePost}>
          Update Post
        </button>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};
