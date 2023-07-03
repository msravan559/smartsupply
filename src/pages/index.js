import LazyLoading from "../HOC/LazyLoading";

//FirstPage
export const Page1 = LazyLoading(() => import("./Page1/Page1"));

//proudct
export const Signup = LazyLoading(() => import("./Product/Product"));

//Signup Client
export const Signupclient = LazyLoading(() =>
  import("./Signupclient/Signupclient")
);

// Login
export const Login = LazyLoading(() => import("./Login/Login"));

// Jar Entry
export const Dashboard = LazyLoading(() => import("./Dashboard/Dashboard"));

// Add Customer
export const Customer = LazyLoading(() => import("./Customer/Customer"));

// Payment
export const Payment = LazyLoading(() => import("./Payment/Payment"));

// Groups
export const Groups = LazyLoading(() => import("./Groups/Groups"));

// Reports
export const Reports = LazyLoading(() => import("./Reports/Reports"));

// Invetory
export const Inventory = LazyLoading(() => import("./Inventory/Inventory"));

// About
// export const About = LazyLoading(() => import("./About/About"));

//Product
export const Product = LazyLoading(() => import("./Product/Product"));

//Businessapp
export const BusinessApp = LazyLoading(() =>
  import("../pages/Page1/Components/BusinessApp")
);

//CustomerApp
export const CustomerApp = LazyLoading(() =>
  import("../pages/Page1/Components/CustomerApp")
);

//Blog
export const Blog = LazyLoading(() => import("../pages/Page1/Components/Blog"));

//EventApp
export const EventApp = LazyLoading(() =>
  import("../pages/Page1/Components/EventApp")
);

//Orders
export const Orders = LazyLoading(() => import("../pages/Orders/Orders"));

//signup register
export const StoreRegistration = LazyLoading(() =>
  import("../pages/StoreRegistration/StoreRegistration")
);
