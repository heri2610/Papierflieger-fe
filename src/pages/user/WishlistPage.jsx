import React from "react";
import Wishlist from "../../components/User/Wishlist/Wishlist";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/Navbar/NavigationBar";

const WishlistPage = () => {
  return (
    <>
      <NavigationBar />
      <Wishlist />
      <Footer />
    </>
  );
};
export default WishlistPage;
