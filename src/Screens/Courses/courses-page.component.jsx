import { BsDashLg, BsFilter, BsArrowLeftShort } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FieldName } from "./../../Components/common/field-name-component/field-name.component";
import { useState, useRef, useEffect, useCallback } from "react";
import { Typewriter } from "react-simple-typewriter";
import GroupButton from "./../../Components/common/GroupButton/GroupButton";
import { Button } from "./../../Components/common/button-component/button.component";
import Data from "../../Core/services/Fake Service/CoursesPage";
import CardGridListView from "../../Components/common/CardGridAndList-view.component";
import GridAndList from "./../../Components/common/gridAndList-item.component";
import Accordion from "./../../Components/common/Accordion/Accordion";
import {
  handleDateSortingDes,
  handleCostSorting,
  handleViewSorting,
} from "./../../Core/utils/sorting";
import Skeleton from "../../Components/common/coursesSkeleton.component";
import { useGetCoursesQuery } from "../../store/courses/coursesSlice";

const cardPerRow = 6;

const CoursesPage = () => {
  const { data, isLoading, isSuccess } = useGetCoursesQuery();

  const { filterList } = Data;
  const [showGrid, setShowGrid] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [groupBtnList] = useState([
    { id: 1, title: "همه", type: "all" },
    { id: 2, title: "جدیدترین ها", type: "new" },
    { id: 3, title: "گران ترین ها", type: "like" },
    { id: 4, title: "پربازدید ترین ها", type: "view" },
  ]);

  const [filterCourses, setFilterCourses] = useState([]);

  useEffect(() => {
    handleSorting("all");
  }, [isLoading]);

  const handleSorting = (type) => {
    switch (type) {
      case "all":
        setFilterCourses(data);
        break;
      case "view":
        setFilterCourses(handleViewSorting(data));
        break;
      case "new":
        setFilterCourses(handleDateSortingDes(data));
        break;
      case "like":
        setFilterCourses(handleCostSorting(data));
        break;
    }
  };

  const [nextCard, setNextCard] = useState(cardPerRow);
  const handleMoreCard = () => {
    setNextCard(nextCard + cardPerRow);
  };

  const handleToggle = (id) => {
    setFilteredItem(
      filteredItem.map((item) => {
        return item.id === id
          ? { ...item, active: !item.active }
          : { ...item, active: item.active };
      })
    );
  };

  const SideRightRef = useRef();

  const closeSideRight = (e) => {
    if (SideRightRef.current === e.target) {
      setOpenFilter(false);
    }
  };

  const [filteredItem, setFilteredItem] = useState(filterList);

  const handleFilter = () => {
    setOpenFilter(false);
  };

  const [filtered, setFiltered] = useState({
    products: data,
    filters: new Set(),
  });

  useEffect(() => {
    setFiltered({
      products: data,
      filters: new Set(),
    });
  }, [data]);

  const handleFilterChange = (event) => {
    setFiltered((previousState) => {
      let filters = new Set(previousState.filters);
      let products = previousState.products;

      if (event.target.checked) {
        setFilteredItem(
          filteredItem.map((service) => {
            return {
              ...service,
              filterServices: service.filterServices.map((item) =>
                item.title.toString().toLowerCase() ===
                event.target.value.toLowerCase()
                  ? { ...item, checked: true }
                  : item
              ),
            };
          })
        );
        filters.add(event.target.value);
      } else {
        setFilteredItem(
          filteredItem.map((service) => {
            return {
              ...service,
              filterServices: service.filterServices.map((item) =>
                item.title.toString().toLowerCase() ===
                event.target.value.toLowerCase()
                  ? { ...item, checked: false }
                  : item
              ),
            };
          })
        );
        filters.delete(event.target.value);
      }

      if (filters.size) {
        if (
          products.filter((item) => filters.has(item?.lesson.topics.toString()))
            .length &&
          products.filter((item) =>
            filters.has(
              (
                (new Date(item?.endDate) - new Date(item?.startDate)) /
                86400000
              ).toString()
            )
          ).length &&
          (filters.has("0") || filters.has("1"))
        ) {
          setFilterCourses(
            products?.filter((product) => {
              return (
                filters.has(
                  (
                    (new Date(product?.endDate) -
                      new Date(product?.startDate)) /
                    86400000
                  ).toString()
                ) &&
                filters.has(product?.lesson.topics.toString()) &&
                (filters.has("0") && filters.has("1")
                  ? products.filter((product) => product?.cost >= 0)
                  : filters.has("1")
                  ? products.filter((product) => product?.cost !== 0)
                  : filters.has("0")
                  ? products.filter((product) => product?.cost === 0)
                  : null)
              );
            })
          );
        } else if (
          products.filter((item) => filters.has(item?.lesson.topics.toString()))
            .length &&
          products.filter((item) =>
            filters.has(
              (
                (new Date(item?.endDate) - new Date(item?.startDate)) /
                86400000
              ).toString()
            )
          ).length
        ) {
          setFilterCourses(
            products?.filter((product) => {
              return (
                filters.has(
                  (
                    (new Date(product?.endDate) -
                      new Date(product?.startDate)) /
                    86400000
                  ).toString()
                ) && filters.has(product?.lesson.topics.toString())
              );
            })
          );
        } else if (
          products.filter((item) => filters.has(item?.lesson.topics.toString()))
            .length &&
          (filters.has("0") || filters.has("1"))
        ) {
          setFilterCourses(
            products?.filter((product) => {
              return (
                filters.has(product?.lesson.topics.toString()) &&
                (filters.has("0") && filters.has("1")
                  ? products.filter((product) => product?.cost >= 0)
                  : filters.has("1")
                  ? products.filter((product) => product?.cost !== 0)
                  : filters.has("0")
                  ? products.filter((product) => product?.cost === 0)
                  : null)
              );
            })
          );
        } else if (
          products.filter((item) =>
            filters.has(
              (
                (new Date(item?.endDate) - new Date(item?.startDate)) /
                86400000
              ).toString()
            )
          ).length &&
          (filters.has("0") || filters.has("1"))
        ) {
          setFilterCourses(
            products?.filter((product) => {
              return (
                filters.has(
                  (
                    (new Date(product?.endDate) -
                      new Date(product?.startDate)) /
                    86400000
                  ).toString()
                ) &&
                (filters.has("0") && filters.has("1")
                  ? products.filter((product) => product?.cost >= 0)
                  : filters.has("1")
                  ? products.filter((product) => product?.cost !== 0)
                  : filters.has("0")
                  ? products.filter((product) => product?.cost === 0)
                  : null)
              );
            })
          );
        } else if (
          products.filter((item) => filters.has(item?.lesson.topics.toString()))
            .length
        ) {
          setFilterCourses(
            products?.filter((product) => {
              return filters.has(product?.lesson.topics.toString());
            })
          );
        } else if (
          products.filter((item) =>
            filters.has(
              (
                (new Date(item?.endDate) - new Date(item?.startDate)) /
                86400000
              ).toString()
            )
          ).length
        ) {
          setFilterCourses(
            products?.filter((product) => {
              return filters.has(
                (
                  (new Date(product?.endDate) - new Date(product?.startDate)) /
                  86400000
                ).toString()
              );
            })
          );
        } else if (filters.has("0") || filters.has("1")) {
          setFilterCourses(
            filters.has("0") && filters.has("1")
              ? products.filter((product) => product?.cost >= 0)
              : filters.has("1")
              ? products.filter((product) => product?.cost !== 0)
              : filters.has("0")
              ? products.filter((product) => product?.cost === 0)
              : null
          );
        } else {
          setFilterCourses([]);
        }
      } else {
        setFilterCourses(data);
      }

      return {
        filters,
        products,
      };
    });
  };

  let content;
  if (isLoading) {
    content = <Skeleton items={nextCard} view={showGrid} />;
  } else if (isSuccess) {
    content =
      filterCourses?.length === 0 ? (
        <div className="relative sm:mt-10 sm:mb-32 sm:pb-0 pb-24">
          <div className="sm:text-5xl text-4xl w-96 absolute 2xl:-right-24 xl:right-[430px] lg:right-[270px] md:right-[160px] right-7 sm:right-[100px] text-deep-purple dark:text-lite-purple">
            <Typewriter
              words={["دوره ای یافت نشد"]}
              cursor
              cursorStyle=" | "
              typeSpeed={30}
              delaySpeed={1000}
            />
          </div>
          <div className="sm:text-xl text-lg w-96 absolute top-16 2xl:-right-20 xl:right-[445px] lg:right-[285px] md:right-[175px] right-6 sm:right-[115px] text-gray-500">
            <Typewriter
              words={["لطفا موضوع دیگری را انتخاب کنید 🙏"]}
              cursor
              cursorStyle=" | "
              typeSpeed={50}
              delaySpeed={5000}
            />
          </div>
        </div>
      ) : (
        filterCourses
          ?.slice(0, nextCard)
          .map((item) => (
            <CardGridListView view={showGrid} item={item} key={item._id} />
          ))
      );
  }

  return (
    <section className="dark:bg-dark-primary">
      <div className="container m-auto dark:bg-dark-primary">
        <div className="grid sm:grid-cols-2 2xl:h-500 xl:h-400 lg:h-400 md:h-250 sm:h-200 h-200">
          <div className="grid h-2/6" data-aos="fade-up">
            <div className="grid">
              <FieldName
                showH2
                title="دوره های آکادمی بحر"
                classH2Field="2xl:text-7xl 2xl:mb-6 xl:mb-6 xl:text-5xl xl:mr-10 lg:mb-6 lg:text-3xl lg:mr-6 lg:pt-28 mt-5
                md:text-2xl md:mr-4 m-auto md:pt-12 sm:mr-0 sm:pt-12 dark:text-dark-primary-title"
              />
            </div>
            <div
              className="text-base mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-3
             m-auto 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-xs text-gray-700 dark:text-dark-text"
            >
              <Typewriter
                words={[
                  "یک دوره آکادمی بحر برای هر مرحله از حرفه شما وجود دارد. از بوت‌کمپ‌های کدنویسی که افراد مبتدی مطلق را از صفر تا استخدام می‌کنند، تا دوره‌های پیشرفته‌ای که متخصصان با تجربه برای ارتقاء مهارت و پیشرفت شغلی خود از آنها استفاده می‌کنند",
                ]}
                cursor
                cursorStyle=" | "
                typeSpeed={40}
                delaySpeed={1000}
              />
            </div>
          </div>
          <div className="sm:block hidden">
            <div className="w-[50%] h-48 2xl:mx-80 xl:mx-64 lg:mx-56 lg:mt-5 md:mx-40 sm:mx-40 drop-shadow-xl shadow-black">
              <img
                data-aos="fade-left"
                src={require("../../Assets/Online learning-amico.svg").default}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-around sm:justify-evenly text-center lg:mt-0 sm:mt-5">
          <div
            className="bg-[#F6F6FB] w-80 h-40 rounded-sm dark:bg-dark-secondary"
            data-aos="flip-right"
          >
            <div className="text-[#C53F3F] text-4xl mt-6">
              {filterCourses?.reduce((a, b) => a + b.lessonNumber, 0)}+
            </div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl dark:text-dark-text">
              درس
            </div>
          </div>
          <div
            className="bg-[#F6F6FB] w-80 h-40 rounded-sm dark:bg-dark-secondary"
            data-aos="flip-down"
          >
            <div className="text-[#C53F3F] text-4xl mt-6">
              {filterCourses?.reduce((a, b) => a + b.hour, 0)}+
            </div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl dark:text-dark-text">
              ساعت
            </div>
          </div>
          <div
            className="bg-[#F6F6FB] w-80 h-40 rounded-sm dark:bg-dark-secondary"
            data-aos="flip-left"
          >
            <div className="text-[#C53F3F] text-4xl mt-6">
              {filterCourses?.length}+
            </div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl dark:text-dark-text">
              دوره
            </div>
          </div>
        </div>
        <div
          className="mt-32 relative"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          <h2
            className="text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base
           bg-white text-[#675F74] sm:w-2/6 w-3/6 absolute -top-4 right-[25%]
            md:-top-7 sm:-top-5 sm:right-[34%] dark:bg-dark-primary dark:text-gray-300"
          >
            در میان دوره ها کاوش کنید
          </h2>
          <div className="flex justify-around m-auto border-2 border-[#D9D9D9] dark:border-[#878383] 2xl:w-[88%] lg:w-[94%] md:w-[98%] sm:w-[100%] h-36 rounded-2xl">
            <div
              className="m-auto p-2 sm:rounded-lg rounded-[10px] flex border-2 border-[#5DC8B2] transition ease-in-out duration-200 cursor-pointer hover:bg-[#5DC8B2] group"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <h2 className="lg:text-xl md:text-2xl sm:text-base text-sm text-[#373F49] group-hover:text-white dark:text-dark-primary-title">
                فیلتر
              </h2>
              <BsFilter className="lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-[#373F49] group-hover:text-white dark:text-dark-primary-title" />
            </div>
            <div className="m-auto">
              <GroupButton
                onSorting={handleSorting}
                items={groupBtnList}
                width="sm:text-base sm:w-fit sm:p-fit"
              />
            </div>
            <GridAndList showGrid={showGrid} setShowGrid={setShowGrid} />
          </div>
        </div>
        <div
          className={
            !showGrid
              ? "sm:grid 2xl:grid-cols-3 2xl:gap-10 2xl:w-fit 2xl:mx-auto xl:grid-cols-3 xl:gap-x-20 xl:w-[90%] lg:grid-cols-2 lg:gap-20 lg:mx-auto md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:w-[80%] sm:grid-cols-1 sm:mx-auto sm:gap-20 mx-auto mt-10 pb-10 w-[80%]"
              : "sm:mt-20 pb-20 mx-auto sm:w-10/12 mt-10 w-[80%]"
          }
        >
          {content}
        </div>
        {nextCard < filterCourses?.length && (
          <div className="w-full py-20" data-aos="fade-up">
            <Button
              onClick={handleMoreCard}
              classButton="block p-3 w-40 mx-auto text-2xl text-[#815AE2] border-2 border-[#815AE2] outline rounded-xl hover:bg-[#815AE2] hover:text-white ease-in-out outline-0 duration-300"
            >
              بیشتر
            </Button>
          </div>
        )}
        <div
          ref={SideRightRef}
          onClick={closeSideRight}
          className="fixed top-0 right-0 w-full z-50 bg-gray-600 bg-opacity-80"
        >
          <div
            className={`${
              openFilter
                ? "bg-deep-purple dark:bg-dark-secondary h-screen pt-8 w-80 z-50 relative"
                : "w-0 z-0"
            } duration-300 ease-in-out relative top-0 right-0`}
          >
            {openFilter && (
              <div className="h-5/6 overflow-y-scroll fixed-container ml-2">
                {filteredItem.map((filter) => (
                  <Accordion
                    key={filter.id}
                    item={filter}
                    onToggle={handleToggle}
                    dir="rtl"
                    headerActiveStyle="border-b-0 rounded-bl-none rounded-br-none dark:border-dark-secondary"
                    headerInactiveStyle="border-b-2 rounded-bl-xl rounded-br-xl delay-[300ms] dark:border-dark-secondary"
                    headerMainStyle="m-auto p-4 bg-white dark:bg-dark-tertiary dark:text-gray-300 dark:border-dark-secondary border-t-2 border-r-2 border-l-2 border-gray-200 w-10/12
                    rounded-tl-xl rounded-tr-xl"
                    bodyMainStyle="mx-auto w-10/12 px-2 bg-white dark:bg-dark-tertiary dark:text-gray-300 rounded-bl-xl dark:border-dark-secondary rounded-br-xl border-r-2 border-l-2"
                    bodyActiveStyle="max-h-[100rem] overflow-hidden transition-[max-height] ease-in-out duration-300"
                    bodyInactiveStyle="max-h-[0rem] overflow-hidden transition-[max-height] ease-in-out duration-300"
                    activeIcon={<FaMinus />}
                    inactiveIcon={<FaPlus />}
                  >
                    {filter.filterServices?.map((item) => {
                      return (
                        <div className="m-auto" key={item.id}>
                          <label
                            className="flex flex-row-reverse justify-end py-1 leading-[25px] items-center cursor-pointer"
                            htmlFor="checkbox"
                          >
                            {item.topic}
                            <input
                              type="checkbox"
                              id="checkbox"
                              value={item.title}
                              checked={item.checked}
                              onChange={handleFilterChange}
                              className="inline-block w-10 h-5"
                            />
                          </label>
                        </div>
                      );
                    })}
                  </Accordion>
                ))}
                <div className="w-full bg-deep-purple dark:bg-dark-secondary p-4 absolute bottom-0">
                  <Button
                    onClick={handleFilter}
                    classButton="w-full text-black bg-white dark:bg-dark-tertiary dark:text-gray-300 p-4 rounded-xl text-2xl hover:opacity-75 transition duration-500"
                  >
                    ثبت
                  </Button>
                </div>
              </div>
            )}

            {openFilter && (
              <BsArrowLeftShort
                className={`bg-white text-deep-purple dark:bg-dark-secondary dark:text-gray-300 rounded-full border-2
              border-deep-purple dark:border-dark-tertiary text-4xl absolute p-1 -left-4 top-4 cursor-pointer rotate-180`}
                onClick={() => setOpenFilter(!openFilter)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
