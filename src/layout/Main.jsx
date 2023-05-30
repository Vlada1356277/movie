import React, { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import Search from '../components/Search';

const Main = () => {

  const [movies, setMovies] = useState([]);
  // хранит список фильмов
  const [value, setValue] = useState("");
  // хранит текущее значение поисковой строки

  useEffect(() => {
    // вызывается каждый раз, когда изменяется значение переменной value
    fetch(`http://www.omdbapi.com/?apikey=7f05d1b7&s=${value}`)
    // отправка запроса на сервер для получения списка фильмов с помощью функции fetch и API 
      .then(res => res.json())
      .then(data => setMovies(data.Search))
      // преобразуется в формат JSON и сохраняется в состоянии movies
  }, [value])

  return (
    // отображает компоненты Search и Movies
    <>
      <Search value={value} setValue={setValue}></Search>
      {/*  принимает значения value и setValue для управления значением поисковой строки */}
      <Movies movies={movies} />
      {/* отображает список фильмов из состояния movies */}
    </>
  );
}

export default Main;
















// import React, { useState, useEffect } from 'react';
// import { Layout, Col, Row, Spin } from 'antd';
// import MovieList from '../components/Movies';
// import _Search from '../components/Search';
// import Movie from '../components/Movie';

// const { Content } = Layout;

// const Main = () => {
// 	const [movies, setMovies] = useState([]);
//   const [searchValue, setSearchValue] = useState('');


// 	const getMovieRequest = async () => {
// 		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7f05d1b7`;

// 		const response = await fetch(url);
// 		const responseJson = await response.json();

// 		if (responseJson.Search) {
// 			setMovies(responseJson.Search);
// 		}
// 	};

// 	useEffect(() => {
// 		getMovieRequest();
// 	}, []);

//   return (
// 		<div className='container-fluid movie-app'>
// 			<div className='row d-flex align-items-center mt-4 mb-4'>
// 				<Movie heading='Movies' />
// 				<_Search searchValue={searchValue} setSearchValue={setSearchValue} />
// 			</div>
// 			<div className='row'>
// 				<MovieList movies={movies} />
// 			</div>
// 		</div>
// 	);
// };

// export default Main;































  // const [movies, setMovies] = useState([]);
  // const [value, setValue] = useState("");

  // useEffect(() => {
  //   // http://www.omdbapi.com/?i=tt3896198&apikey=7f05d1b7
  //   fetch('http://www.omdbapi.com/?apikey=7f05d1b7=&page=1')
  //     .then(res => res.json())
  //     .then(data => setMovies(data.Search));
  // }, []);
  
  // const searchMovies = (str) => {
  //   fetch(`http://www.omdbapi.com/?apikey=7f05d1b7=${str}&page=1`)
  //     .then(res => res.json())
  //     .then(data => setMovies(data.Search));
 


//   return (
//     <>
//       <Content className='p-5'>
//         <Row>
//           <Col xs={24} sm={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }} xl={{ span: 14, offset: 5 }}>
//             <Search searchMovies={searchMovies} />
//             <Row className='justify-center' gutter={[32, 32]}>
//               {
//                 movies.length ?
//                   <Movies movies={movies} />
//                   : <Spin size="large" tip="Loading..." />
//               }
//             </Row>
//           </Col>
//         </Row>
//       </Content>
//     </>
//   );
// };

// export default Main;

// return (
//   <>
//     <_Search value={value} setValue={setValue}></_Search>
//     <MovieList movies={movies} />
//   </>
// );
// }

//   return (
//     <>
//       <Content className='p-5'>
//         <Row>
//           <Col xs={24} sm={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }} xl={{ span: 14, offset: 5 }}>
//             <_Search searchMovies={searchMovies} />
//             <Row className='justify-center' gutter={[32, 32]}>
//               {
//                 movies?.length ?
//                   <MovieList movies={movies} />
//                   : <Spin size="large" tip="Loading..." />
//               }
//             </Row>
//           </Col>
//         </Row>
//       </Content>
//     </>
//   );
// };
