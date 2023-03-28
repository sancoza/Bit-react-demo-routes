import { Route, Routes, Navigate } from 'react-router';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './App.css';
import { NotFoundPage } from './components/NotFoundPage';
import { Layout } from './components/Layout';
import { Posts } from './components/Posts';
import { SinglePost } from './components/SinglePost';
import { CreatePostPage } from './components/CreatePostPage';
import { UpdatePostPage } from './components/UpdatePostPage';

function App() {
  return (
    <Routes>
    <Route path={"/"} element={<Layout/>} > 
    <Route path={'not-found-page'} element={<NotFoundPage />} />
      <Route path={'/home'} element={<Home />} />
      <Route path={'/about'} element={<About />} /> 
      <Route path={'/contact'} element={<Contact />} />
      <Route path={'/posts'} element={<Posts/>} />
       <Route path={'/posts/:id'} element={<SinglePost/>} />
       <Route path={'/posts/:id/update'} element={<UpdatePostPage/>} />
      <Route path={'/posts/create'} element={<CreatePostPage />} />
     
    </Route>
      <Route path="*" element={<Navigate replace to={'/not-found-page'} />} />
    </Routes>
  );
}

export default App;
