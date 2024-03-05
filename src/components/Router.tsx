import { Route, Routes, Navigate } from 'react-router-dom';
import Home from 'pages/home';
import PostList from 'pages/posts';
import PostDetail from 'pages/posts/detail';
import PostNew from 'pages/posts/new';
import PostEdit from 'pages/posts/edit';
import ProfilePage from 'pages/profile';
import LoginPage from 'pages/login';
import SignupPage from 'pages/signup';

interface RouterProps {
  isAuthenticated: boolean;
}
export default function Router({ isAuthenticated }: RouterProps) {
  // firebase Auth가 인증되면 true로 변경해주는 로직
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            {/* id값을 주어 상세페이지 이동 */}
            <Route path="/posts/:id" element={<PostDetail />} />
            {/* 게시글 작성 */}
            <Route path="/posts/new" element={<PostNew />} />
            {/* 게시글 수정 */}
            <Route path="/posts/edit/:id" element={<PostEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* "*" 디폴트 값, 위에서 정의하지않은 path를 타고들어올 경우 Nav~를 사용해 replace to  */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<LoginPage />} /> {/* 기본값 */}
          </>
        )}
      </Routes>
    </>
  );
}


