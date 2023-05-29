import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  Admin,
  PageNotFound,
  ContactEu,
  ContactPh,
  ContactUs,
  ContactGlobal,
} from '../pages';

export const AllRoutes = () => {
  const user = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/:id" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route path="ph" element={<ContactPh />}></Route>
          <Route path="eu" element={<ContactEu />}></Route>
          <Route path="us" element={<ContactUs />}></Route>
          <Route path="*" element={<ContactGlobal />}></Route>
        </Route>

        <Route
          path="/admin"
          element={user ? <Admin /> : <PageNotFound />}
        ></Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
