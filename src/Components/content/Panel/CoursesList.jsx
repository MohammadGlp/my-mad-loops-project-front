import React, { useEffect, useState } from 'react';
import PanelHeader from './PanelHeader';
import PanelTable from './PanelTable';
import Pagination from '../../common/Pagination/Pagination';
import { paginate } from '../../../Core/utils/paginate';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './../../../store/auth/authSlice';
import { selectSessionCurrentUser } from './../../../store/auth/authSessionSlice';
import { toastifyToast } from './../../common/Toast/toast';
import {
  useAddStudentToCourseMutation,
  useGetCoursesQuery,
} from '../../../store/courses/coursesSlice';

const CoursesList = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const { data: allCourse, isLoading } = useGetCoursesQuery();
  const [
    addStudentToCourse,
    { isSuccess, isError, error, isLoading: isLoad, data },
  ] = useAddStudentToCourseMutation();

  const [coursesList, setCoursesList] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState();
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const getCourseByUserId = async () => {
      const studentInfo = currentUser || currentSessionUser;
      const response = await allCourse;

      const filteredData = response?.filter((row) => {
        const isInCourse = row.students.some(
          (student) => student._id === studentInfo._id
        );
        if (!isInCourse) return row;
      });
      setSearchList(filteredData);
      const paginateData = paginate(
        filteredData,
        currentPage,
        pageSize
      );
      const dataCount = filteredData?.length;
      setCount(dataCount);
      setCoursesList(paginateData);
    };
    getCourseByUserId();
  }, [currentPage, isLoading]);

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
    }

    if (isError) {
      toastifyToast.error(error.data.message[0].message);
    }
  }, [isLoad]);

  const addCourse = async (courseId) => {
    await addStudentToCourse({
      courseId: { courseId: courseId },
      obj: currentUser?._id || currentSessionUser?._id,
    });

    setCoursesList((old) => {
      let newData = [...old];
      let newCoursesData = newData;
      newCoursesData = newCoursesData.filter(
        (item) => item._id !== courseId
      );
      newData = newCoursesData;
      return newData;
    });
  };

  const handleSearch = (arr) => {
    setCurrentPage(1);
    setCoursesList(arr);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    const pagesCount = Math.ceil(coursesList.length / pageSize);
    currentPage !== pagesCount &&
      setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePrev = () => {
    currentPage !== 1 &&
      setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <div className="px-3 md:px-5">
      <PanelHeader data={searchList} onSearch={handleSearch} />
      <PanelTable data={coursesList} onAdd={addCourse} />
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default CoursesList;
