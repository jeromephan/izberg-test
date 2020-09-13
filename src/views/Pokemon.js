import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardsList from '../components/CardsList/CardsList';
import { getList } from '../store/modules/list/list.actions';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  pokemon: state.list.list,
  previous: state.list.previous,
  next: state.list.next,
  isLoading: state.list.isLoading,
  error: state.list.error,
});

const Pokemon = ({
  pokemon,
  previous,
  next,
  location,
  dispatch,
  isLoading,
  error,
}) => {
  const getPage = () =>
    Number((queryString.parse(location.search) || {}).page) || 0;

  useEffect(() => {
    dispatch(getList(getPage()));

    return () => {};
  }, [location.search]);

  return (
    <div className='pokemon'>
      <CardsList is-loading={isLoading} pokemon={pokemon} />
      <div className='cards-list__pagination'>
        <Link
          to={{
            pathname: '/',
            search: previous ? `?page=${getPage() - 1}` : '?page=0',
          }}
          className='cards-list__link'
        >
          {'<'} Previous
        </Link>
        <Link
          to={{
            pathname: '/',
            search: next ? `?page=${getPage() + 1}` : `?page=${getPage()}`,
          }}
          className='cards-list__link'
        >
          Next {'>'}
        </Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(withRouter(Pokemon));
