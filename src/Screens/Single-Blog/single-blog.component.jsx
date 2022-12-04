import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FieldName } from '../../Components/common/field-name-component/field-name.component';
import { FiClock } from 'react-icons/fi';
import { Button } from '../../Components/common/button-component/button.component';
import BlogTab from '../../Components/common/tabs/BlogTab';
import commentData from '../../Core/services/Fake Service/CourseComments';
import { handleDateSortingDes } from '../../Core/utils/sorting';
import Like from '../../Components/common/Like/Like';
import { useGetAllNewsQuery } from '../../store/news/newsApiSlice';

const SingleBlog = () => {
  const { id } = useParams();
  const { blogs, blogItem, isLoading, isSuccess, isError, error } =
    useGetAllNewsQuery('getAllNews', {
      selectFromResult: ({
        data,
        isLoading,
        isSuccess,
        isError,
        error,
      }) => ({
        blogItem: data?.find((item) => item._id === id),
        isLoading,
        isSuccess,
        isError,
        error,
        blogs: data,
      }),
    });

  const [sortedBlogs, setSortedBlogs] = useState([]);

  useEffect(() => {
    const offerNews = async () => {
      const blogss = await handleDateSortingDes(blogs, 5);
      setSortedBlogs(blogss);
    };
    offerNews();
  }, [isLoading]);

  const navigate = useNavigate();

  const handleLeadP = (value) => {
    const trimmedLead =
      value
        .substring(0, 40)
        .substring(0, value.substring(0, 40).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };
  const handleLeadH = (value) => {
    const trimmedLead =
      value
        .substring(0, 42)
        .substring(0, value.substring(0, 40).lastIndexOf(' ')) +
      '...';
    return trimmedLead;
  };

  let body;
  if (isLoading) {
    body = <h2>Loading...</h2>;
  } else if (isSuccess) {
    body = (
      <>
        <div className="sm:h-96 h-64">
          <img
            className="rounded-t-lg w-full sm:h-400 h-64"
            src={blogItem?.image}
            alt="react-hooks"
          />
        </div>
        <div className="h-16 sm:mt-8 mt-4 sm:mb-8 mb-1">
          <div className="flex justify-center">
            <FieldName
              showH2
              title={blogItem?.title}
              classH2Field="sm:text-3xl text-xl mr-5 px-10 dark:text-dark-primary-title"
            />
          </div>
        </div>
        <div className="h-full">
          <div className="w-10/12 m-auto">
            <FieldName
              showP
              field={blogItem?.text}
              classPfield="m-auto sm:text-xl text-md pt-3 text-gray-400 dark:text-dark-text"
            />
          </div>
        </div>
      </>
    );
  } else if (isError) {
    body = <h2>{error?.data.message[0].message}.</h2>;
  }

  return (
    <div className="dark:bg-dark-primary">
      <div className="container m-auto">
        <div className="grid 2xl:grid-cols-8 xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 pt-5">
          <div
            className="2xl:col-span-5 xl:col-span-8 lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12"
            data-aos="fade-up"
          >
            <div className="2xl:w-10/12 xl:w-11/12 lg:w-10/12 md:w-full sm:w-full w-full lg:float-left ml-5 rounded-lg bg-lite-white custom-shadow mb-10 dark:shadow-none dark:bg-dark-secondary">
              {body}
              <div className="my-10 pb-5">
                <BlogTab blogId={id} />
              </div>
            </div>
          </div>
          <div
            className="2xl:col-span-3 xl:col-span-4 lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 mb-10"
            data-aos="fade-left"
          >
            <div
              className="2xl:w-9/12 xl:w-11/12 lg:w-8/12 md:w-10/12 sm:w-11/12 w-full h-800 xl:mr-0 lg:mr-40 md:mr-16 sm:mr-6 mr-0
           bg-lite-white custom-shadow rounded-lg dark:bg-dark-secondary dark:shadow-none"
            >
              <div className="h-16 flex justify-center">
                <h2 className="text-3xl mt-5 dark:text-dark-primary-title">
                  اخبار پیشنهادی
                </h2>
              </div>
              <div className="overflow-y-scroll ml-1 p-1 pr-0 faq-container h-650">
                {sortedBlogs?.map((item) => {
                  return (
                    <div
                      onClick={() => navigate(`/blogs/${item._id}`)}
                      key={item._id}
                      className="sm:h-44 h-40 w-11/12 mb-5 grid grid-cols-5 rounded-lg hover:cursor-pointer hover:-translate-x-4 hover:custom-shadow dark:hover:custom-dark-shadow duration-300 group"
                    >
                      <div className="col-span-2 overflow-hidden">
                        <img
                          className="w-full sm:h-44 h-40 duration-300 rounded-l-lg group-hover:rounded-r-lg group-hover:rounded-l-none"
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="col-span-3">
                        <FieldName
                          showH2
                          showP
                          title={handleLeadH(item.title)}
                          classH2Field="sm:text-2xl text-xl pt-3 mr-5 text-gray-700 dark:text-dark-secondary-title"
                        />

                        <p className="mr-3 sm:text-lg text-md sm:w-48 md:w-72 lg:w-80 xl:w-48 w-44 text-gray-400 dark:text-dark-text">
                          {handleLeadP(item.text)}
                        </p>
                        <div className="col-span-2 sm:w-40 w-44 flex justify-between">
                          <FiClock className="mt-3 mr-5 sm:text-lg text-md text-gray-600 dark:text-dark-secondary-title" />
                          <span className="mt-2 sm:ml-4 ml-8 text-gray-600 sm:text-lg text-md dark:text-dark-secondary-title">
                            {item?.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="h-20 flex justify-center">
                <Link to="/blogs">
                  <Button
                    classButton="btn w-50 border-b-0 rounded-b-none border-deep-purple dark:border-lite-purple duration-300 ease-in-out 
                    text-deep-purple dark:text-lite-purple pt-1 pb-3 px-10 text-xl hover:-translate-y-1 mt-10"
                  >
                    مشاهده عناوین بیشتر
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
