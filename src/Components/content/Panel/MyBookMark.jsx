import React, { useState } from 'react';
import PanelTable from './PanelTable';
import PanelHeader from './PanelHeader';
import Pagination from '../../common/Pagination/Pagination';
import { paginate } from '../../../Core/utils/paginate';
import { useDispatch, useSelector } from 'react-redux';
import { toastifyToast } from '../../common/Toast/toast';
import { selectBookMarkItems } from '../../../store/bookmark/bookmarkSlice';
import { removeBookMark } from '../../../store/bookmark/bookmarkSlice';

const MyBookMark = () => {
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const FavCourses = useSelector(selectBookMarkItems);
  const [myCourse, setMyCourse] = useState(FavCourses);

  const dispatch = useDispatch();

  const paginateData = paginate(myCourse, currentPage, pageSize);

  const handleSearch = (arr) => {
    setCurrentPage(1);
    setMyCourse(arr);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    const pagesCount = Math.ceil(myCourse.length / pageSize);
    currentPage !== pagesCount &&
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrev = () => {
    currentPage !== 1 &&
      setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleDelete = (id) => {
    dispatch(removeBookMark(id));
    const newFavs = myCourse.filter((course) => course._id !== id);
    setMyCourse(newFavs);
  };

  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={FavCourses} onSearch={handleSearch} />
      <PanelTable data={paginateData} onDelete={handleDelete} />
      <Pagination
        itemsCount={FavCourses.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default MyBookMark;
