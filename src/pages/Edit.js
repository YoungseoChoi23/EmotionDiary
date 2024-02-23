import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  console.log('id : ', id, 'mode : ', mode);
  return (
    <div>
      <h2>Edit</h2>
      <p>이곳은 일기 수정 페이지입니다.</p>
      <button
        onClick={() => {
          setSearchParams({ who: 'youngseo' });
        }}
      >
        QS수정
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        HOME으로 가기
      </button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
