import { v4 as uuidv4 } from "uuid";
import {
  BsFillGridFill,
  BsFillPlayCircleFill,
  BsBookmarkHeartFill,
} from "react-icons/bs";
import {
  FaClipboardList,
  FaUserEdit,
  FaTimesCircle,
  FaEdit,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

const Data = [
  {
    id: uuidv4(),
    icon: <BsFillGridFill className="inline-block sm:text-2xl" />,
    title: "داشبورد",
    path: "",
  },
  {
    id: uuidv4(),
    icon: <BsFillPlayCircleFill className="inline-block sm:text-2xl" />,
    title: "دوره های من",
    path: "myCourses",
  },
  {
    id: uuidv4(),
    icon: <BsBookmarkHeartFill className="inline-block sm:text-2xl" />,
    title: "علاقه مندی ها",
    path: "bookmark",
  },
  {
    id: uuidv4(),
    icon: <FaClipboardList className="inline-block sm:text-2xl" />,
    title: "لیست دوره ها",
    path: "courseList",
  },
  // {
  //   id: uuidv4(),
  //   icon: <IoNotifications className="inline-block sm:text-2xl" />,
  //   title: "پیغام ها",
  //   path: "courseList",
  // },
  {
    id: uuidv4(),
    icon: <FaUserEdit className="inline-block sm:text-2xl" />,
    title: "ویرایش پروفایل",
    path: "editProfile",
  },
  {
    id: uuidv4(),
    icon: <FaEdit className="inline-block sm:text-2xl" />,
    title: "ویرایش پسورد",
    path: "editPassword",
  },
  {
    id: uuidv4(),
    icon: <FaTimesCircle className="inline-block sm:text-2xl" />,
    title: "خروج",
    path: "/",
  },
];

export default Data;
