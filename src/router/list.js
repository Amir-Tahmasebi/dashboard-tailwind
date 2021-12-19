import AboutUs from "../page/AboutUs";
import Blog from "../page/Blog";
import Contact from "../page/Contact";
import Home from "../page/Dashboard";
import Services from "../page/Services";

export const routeList = [
  {
    id: 0,
    route: "/",
    component: Home,
  },
  {
    id: 1,
    route: "/blog",
    component: Blog,
  },
  {
    id: 2,
    route: "/sevices",
    component: Services,
  },
  {
    id: 3,
    route: "/about",
    component: AboutUs,
  },
  {
    id: 4,
    route: "/contact",
    component: Contact,
  },
];
