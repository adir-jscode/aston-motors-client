import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Login from "./Register/Login";
import Header from "./Shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./Parts/Purchase";
import RequireAuth from "./Register/RequireAuth";
import Dashboard from "./Dashboard/Dashboard";
import MyPurchase from "./Dashboard/MyPurchase";
import Profile from "./Dashboard/Profile";
import AddReview from "./Dashboard/AddReview";
import Users from "./Dashboard/Users";
import AllOrders from "./Dashboard/AllOrders";
import AddProduct from "./Dashboard/AddProduct";
import ManageProducts from "./Dashboard/ManageProducts";
import NotFound from "./Shared/NotFound";
import RequireAdmin from "./Register/RequireAdmin";
import Payment from "./Dashboard/Payment";
import MyPortfolio from "./My Portfolio/MyPortfolio";
import Blogs from "./Blogs/Blogs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route path="purchase" element={<MyPurchase />} />
          <Route index path="profile" element={<Profile />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="review" element={<AddReview />} />
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route
            path="order"
            element={
              <RequireAdmin>
                <AllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="inventory"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
