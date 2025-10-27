import movieDetail from "../assets/movieDetailData.json";

const DetailPage = () => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";

  // genres가 없을 수도 있으므로 안전하게 처리
  const genres = movieDetail.genres || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 배경 이미지 or 포스터 */}
      <img
        src={`${baseUrl}${movieDetail.backdrop_path || movieDetail.poster_path}`}
        alt={movieDetail.title}
        className="w-full rounded-2xl shadow-lg mb-6"
      />

      {/* 제목 */}
      <h1 className="text-3xl font-bold mb-2">{movieDetail.title}</h1>

      {/* 평점 */}
      <p className="text-yellow-500 font-semibold mb-4">
        ⭐ {movieDetail.vote_average.toFixed(1)}
      </p>

      {/* 장르 목록 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {genres.map((genre) => (
          <span
            key={genre.id}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
          >
            {genre.name}
          </span>
        ))}
      </div>

      {/* 줄거리 */}
      <p className="text-gray-700 leading-relaxed">{movieDetail.overview}</p>
    </div>
  );
};

export default DetailPage;
