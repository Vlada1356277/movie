
import React from 'react';
import {Col, Layout, Row} from 'antd'
import Movie from './Movie';

const MovieList = (props) => {
  const {movies = []} = props
  // принимает props со списком фильмов (movies) и отображает их с помощью другого компонента Movie

  return (
    <Layout.Content className='my-10'>
    {/* компонент Layout.Content из библиотеки Ant Design для создания контейнера */}
      <Row>
        <Col xs={24} sn={{ span:18, offset:3 }}>
          <Row className='px-10' gutter={[16, 16]}>
            {/*  Row и Col для создания сетки */}
            {/* gutter для задания расстояния между элементами */}
            {movies.length ? 
              movies.map((movies) => (
                // метод map проходит по списку фильмов и возвращает компонент Movie с свойствами Title, Type, Year и Poster. 
                <Movie 
                  key={movies.imdbID}
                  Title={movies.Title}
                  Type={movies.Type}
                  Year={movies.Year}
                  Poster={movies.Poster}
                />
              ))
              :
              <div>Фильмы не найдены</div>
            }
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
}

export default MovieList;









// import Movie from './Movie';

// const Movies = (props) => {
//   const { movies = [] } = props;
//   return (
//     <>
//       {
//         movies.length ?
//           movies.map(movie => <Movie key={movie.imdbID} {...movie} />)
//           : <h3>Nothing found</h3>
//       }
//     </>
//   );
// };

// export default Movies;