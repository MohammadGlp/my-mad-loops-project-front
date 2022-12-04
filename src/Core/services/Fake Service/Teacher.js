const Data = {
  teachers: [
    {
      id: 1,
      teacher: "محمد حسین بحر العلوم",
      title: "متخصص سی شارپ",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/bahr.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 110,
      hour: 12,
    },
    {
      id: 2,
      teacher: "مهدی اصغری",
      title: "استاد عمومی و تخصصی ری اکت",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/img/mehdiii.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 10,
      hour: 150,
    },
    {
      id: 3,
      teacher: "سالار عقیلی",
      title: "متخصص تراشکاری بدون دستگاه نامنظم",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/aghil.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 120,
      hour: 90,
    },
    {
      id: 4,
      teacher: "محسن",
      title: "متخصص ری اکت",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/mohsen.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 116,
      hour: 192,
    },
    {
      id: 5,
      teacher: "حامد نظری",
      title: "متخصص فرانت و UI/UX",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/nazari.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 190,
      hour: 12,
    },
    {
      id: 6,
      teacher: "میکائیل محسنی",
      title: "متخصص ندومبه",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/img/mic.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 150,
      hour: 392,
    },
    {
      id: 7,
      teacher: "میکائیل محسنی",
      title: "متخصص ندومبه",
      description:
        "یکی از بهترین و معروف ترین استاد های نمونه خاور میانه که توانسته نقش بسایر مفیدی در توسعه تکنولوژی در حوزه وبسایت و اپلیکیشن و وب اپلیکیشن و تمام پلتفرم های موجود در دنیا داشته باشد",
      img: require("../../../Assets/img/mic.jpg"),
      gmail: "bahr.academy@gmail.com",
      lesson: 510,
      hour: 290,
    },
  ],
};

export default Data;

export const getTeacher = (id) => {
  return Data.teachers.find((item) => item.id === id);
};
