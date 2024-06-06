import images from "../../assets/images";

export const menuItems = [
  {
    route: "top-dishes",
    title: "Top Dishes",
    icon: images.utility.sidebar[0],
  },
  {
    route: "thai-courses",
    title: "Thai Courses",
    icon: images.utility.sidebar[1],
  },
  {
    route: "filipino-courses",
    title: "Filipino Courses",
    icon: images.utility.sidebar[2],
  },
  {
    route: "myanmar-courses",
    title: "Myanmar Courses",
    icon: images.utility.sidebar[3],
  },
  {
    route: "beverages",
    title: "Beverages",
    icon: images.utility.sidebar[4],
  },
  {
    route: "appetizers",
    title: "Appetizers",
    icon: images.utility.sidebar[5],
  },
  {
    route: "dessert",
    title: "Dessert",
    icon: images.utility.sidebar[0],
  },
];

export const menuData = {
  topDishes: {
    title: "Top Dishes",
    route: "top-dishes",
    items: [
      images.menu.graPow,
      images.menu.padThai,
      images.menu.redCurry,
      images.menu.tomYum,
      images.menu.greenCurry,
    ],
  },
  thaiCourses: {
    title: "Thai Courses",
    route: "thai-courses",
    items: [],
  },
  filipinoCourses: {
    title: "Filipino Courses",
    route: "filipino-courses",
    items: [],
  },
  myanmarCourses: {
    title: "Myanmar Courses",
    route: "myanmar-courses",
    items: [],
  },
  beverages: {
    title: "Beverages",
    route: "beverages",
    items: [],
  },
  appetizers: {
    title: "Appetizers",
    route: "appetizers",
    items: [],
  },
  desserts: {
    title: "Desserts",
    route: "desserts",
    items: [],
  },
};
