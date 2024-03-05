import { Link } from "react-router-dom";

export default function PostDetail() {
  return <>
    <div className="post__detail">
      <div className="post__box">
        <div className="post__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="post__profile-box">
          <div className="post__profile" />
          <div className="post__author-name">패스트캠퍼스</div>
          <div className="post__date">2024.02.15 목요일</div>
        </div>
        <div className="post__title"></div>
        <div className="post__utils-box">
          <div className="post__delete">삭제</div>
          <div className="post__edit">
            <Link to={`/posts/edit/1`}>수정</Link>
          </div>
        </div>
        <div className="post__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  </>
}