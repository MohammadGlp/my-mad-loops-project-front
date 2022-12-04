import { v4 as uuidv4 } from "uuid";
const Data = {
  filterList: [
    {
      id: 1,
      title: "موضوع",
      active: true,
      filterServices: [
        {
          id: 101,
          title: "javascript",
          topic: "Javascript",
          checked: false,
        },
        { id: 102, title: "php", topic: "Php", checked: false },
        {
          id: 103,
          title: "laravel",
          topic: "Laravel",
          checked: false,
        },
        { id: 104, title: "spring", topic: "Spring", checked: false },
        { id: 105, title: "java", topic: "Java", checked: false },
        { id: 106, title: "#c", topic: "#C", checked: false },
        { id: 107, title: "react", topic: "React", checked: false },
        {
          id: 108,
          title: "node js",
          topic: "Node js",
          checked: false,
        },
        { id: 109, title: "django", topic: "Django", checked: false },
        { id: 110, title: "python", topic: "Python", checked: false },
        { id: 111, title: "html", topic: "HTML", checked: false },
        { id: 112, title: "css", topic: "CSS", checked: false },
        {
          id: 113,
          title: "wordpress",
          topic: "WordPress",
          checked: false,
        },
        {
          id: 114,
          title: "angular",
          topic: "Angular",
          checked: false,
        },
        { id: 115, title: "vue", topic: "Vue", checked: false },
      ],
    },
    {
      id: 2,
      title: "مدت زمان دوره",
      active: false,
      filterServices: [
        {
          id: uuidv4(),
          title: 30,
          topic: "1 ماه",
          checked: false,
        },
        {
          id: uuidv4(),
          title: 90,
          topic: "3 ماه",
          checked: false,
        },
        {
          id: uuidv4(),
          title: 181,
          topic: "6 ماه",
          checked: false,
        },
        {
          id: uuidv4(),
          title: 272,
          topic: "9 ماه",
          checked: false,
        },
      ],
    },
    {
      id: 3,
      title: "حدود قیمت",
      active: false,
      filterServices: [
        { id: uuidv4(), title: "0", topic: "رایگان", checked: false },
        {
          id: uuidv4(),
          title: "1",
          topic: "غیر رایگان",
          checked: false,
        },
      ],
    },
  ],
};

export default Data;

// export const getCourse = (id) => {
//   return Data.courses.find((item) => item.id === id);
// };
