import React, { useState } from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import logo from "../assets/zomatoWhite.png";
import {
  IoMdArrowDropright,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { MdKeyboardArrowRight, MdGpsFixed } from "react-icons/md";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-bgImage text-white pb-24 max-[500px]:pb-12">
        <SecondaryHeader />
        <img src={logo} alt="zomato logo" className="w-96 max-[500px]:w-44" />
        <p className="text-4xl pb-6 max-[500px]:text-2xl text-center max-[500px]:px-7 max-[500px]:font-semibold">
          Discover the best food & drinks in Delhi NCR
        </p>
        <div className="w-[65%] max-[500px]:w-[90%]">
          <SearchBar />
        </div>
      </div>

      <div className="flex max-[500px]:flex-wrap items-center justify-center max-[500px]:justify-start gap-5 px-20 pt-10 pb-24 max-[500px]:pb-12 max-[500px]:px-7">
        <Link
          to="/explore/order/delivery"
          className="custom-div h-56 max-[500px]:h-60 max-[500px]:w-[47%] flex flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300"
        >
          <img
            src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="decoration"
            className="h-[65%] max-[500px]:h-auto object-cover w-96 max-[500px]:w-full"
          />
          <div className="px-6 py-3 max-[500px]:px-3">
            <h3 className="text-xl max-[500px]:text-base max-[500px]:font-semibold">
              Order Online
            </h3>
            <p className="max-[500px]:text-xs">
              Stay home and order to your doorstep
            </p>
          </div>
        </Link>

        <Link
          to="/explore/order/dining"
          className="custom-div h-56 max-[500px]:h-60 max-[500px]:w-[47%] flex flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300"
        >
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="decoration"
            className="h-[65%] max-[500px]:h-auto object-cover w-96 max-[500px]:w-full"
          />
          <div className="px-6 py-3 max-[500px]:px-3">
            <h3 className="text-xl max-[500px]:text-base max-[500px]:font-semibold">
              Dining
            </h3>
            <p className="max-[500px]:text-xs">
              View the city's favorite dining venues
            </p>
          </div>
        </Link>

        <Link
          to="/explore/order/night-life"
          className="custom-div h-56 max-[500px]:h-60 max-[500px]:w-[47%] flex flex-col rounded-xl overflow-hidden border-[0.5px] border-gray-300"
        >
          <img
            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
            alt="decoration"
            className="h-[65%] max-[500px]:h-auto object-cover w-96 max-[500px]:w-full"
          />
          <div className="px-6 py-3 max-[500px]:px-3">
            <h3 className="text-xl max-[500px]:text-base max-[500px]:font-semibold">
              Nightlife and Clubs
            </h3>
            <p className="max-[500px]:text-xs">
              Explore the city's top nightlife outlets
            </p>
          </div>
        </Link>
      </div>

      <div className="px-20 max-[500px]:px-7">
        <h2 className="text-4xl max-[500px]:text-2xl font-medium">
          Collections
        </h2>
        <div className="flex items-center justify-between py-3 max-[500px]:pt-1">
          <p className="text-xl max-[500px]:text-sm">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </p>
          <span className="text-lg text-primary flex items-center gap-1 max-[500px]:hidden">
            All collections in Delhi NCR{" "}
            <IoMdArrowDropright className="text-xl" />
          </span>
        </div>

        <div className="text-white flex max-[500px]:flex-wrap gap-3 w-full pt-6 pb-24 max-[500px]:pb-12">
          <div className="relative h-80 rounded-lg overflow-hidden w-1/4 max-[500px]:w-[48%] max-[500px]:h-60">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg max-[500px]:text-sm">
                Unique Dining Experiences
              </h3>
              <span className="flex items-center max-[500px]:text-sm">
                11 places <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden w-1/4 max-[500px]:w-[48%] max-[500px]:h-60">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/0a4f52d9dc95cf3a5d3cf05f2299c1bf_1704348957.png?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg max-[500px]:text-sm">
                Hot Chocolate Havens
              </h3>
              <span className="flex items-center max-[500px]:text-sm">
                22 places <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden w-1/4 max-[500px]:w-[48%] max-[500px]:h-60">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/ae71f4c72fda8a608a3650b15a994fdb_1696838475.jpg?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg max-[500px]:text-sm">
                Best Insta-worthy Places
              </h3>
              <span className="flex items-center max-[500px]:text-sm">
                21 places <IoMdArrowDropright />
              </span>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden w-1/4 max-[500px]:w-[48%] max-[500px]:h-60">
            <div>
              <img
                src="https://b.zmtcdn.com/data/collections/2022843bd23fe6c24f67cbea79836a4f_1704970294.png?output-format=webp"
                alt="decoration"
                className="h-80 object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-lg max-[500px]:text-sm">
                Cozy Heated Outdoors
              </h3>
              <span className="flex items-center max-[500px]:text-sm">
                20 places <IoMdArrowDropright />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full mb-28 max-[500px]:mb-12">
          <h3 className="text-4xl mb-10 max-[500px]:mb-6 max-[500px]:text-2xl">
            Popular localities in and around{" "}
            <span className="font-medium">Delhi NCR</span>
          </h3>
          <LocalityCard />
        </div>

        <div className="mb-16 max-[500px]:mb-12">
          <h3 className="text-3xl mb-6 max-[500px]:text-2xl">
            Explore options near me
          </h3>
          <DropdownComponent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;

function LocalityCard() {
  const localityArr = [
    { name: "Connaught Place", places: 263 },
    { name: "Sector 29", places: 146 },
    { name: "Sector 18, Noida", places: 222 },
    { name: "Rajouri Garden", places: 355 },
    { name: "Saket", places: 333 },
    { name: "DLF Cyber City", places: 179 },
    { name: "Golf Course Road", places: 156 },
    { name: "DLF Phase 4", places: 223 },
    { name: "Rohini", places: 1216 },
  ];

  const renderedItems = localityArr.map((item, index) => {
    return (
      <div
        key={index}
        className="flex items-center justify-between p-3 border rounded-md w-[32%] max-[500px]:w-full shadow hover:shadow-lg cursor-pointer"
      >
        <div>
          <h3 className="text-xl max-[500px]:text-base">{item.name}</h3>
          <p>{item.places} places</p>
        </div>
        <MdKeyboardArrowRight className="text-xl" />
      </div>
    );
  });

  return <div className="flex flex-wrap gap-4">{renderedItems}</div>;
}

function DropdownComponent() {
  const [firstDropDown, setFirstDropDown] = useState(false);
  const [secondDropDown, setSecondDropDown] = useState(false);
  const [thirdDropDown, setThirdDropDown] = useState(false);
  const [fourthDropDown, setFourthDropdown] = useState(false);

  return (
    <>
      <div className="border rounded mb-5">
        <div
          className="flex items-center justify-between  cursor-pointer p-4"
          onClick={() => setFirstDropDown(!firstDropDown)}
        >
          <p className="text-xl max-[500px]:text-base">
            Popular cuisines near me
          </p>
          {firstDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {firstDropDown && (
          <p className="text-gray-400 p-4">
            Bakery food near me | Beverages food near me | Biryani food near me
            | Burger food near me | Chinese food near me | Coffee food near me |
            Continental food near me | Desserts food near me | Italian food near
            me | Mithai food near me | Momos food near me | Mughlai food near me
            | North Indian food near me
          </p>
        )}
      </div>

      <div className="border rounded mb-5">
        <div
          className="p-4 flex items-center justify-between  cursor-pointer"
          onClick={() => setSecondDropDown(!secondDropDown)}
        >
          <p className="text-xl max-[500px]:text-base">
            Popular restaurant types near me
          </p>
          {secondDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {secondDropDown && (
          <p className="text-gray-400 p-4">
            Bakeries near me | Bars near me | Beverage shops near me | Bhojnalya
            near me | Cafes near me | Casual Dining near me | Clubs near me |
            Cocktail Bars near me | Confectioneries near me | Dessert Parlors
            near me | Dhabas near me | Fine Dining near me | Food Courts near me
            | Food Trucks near me | Irani Cafes near me | Kiosks near me |
            Lounges near me | Meat Shops near me | Microbreweries near me | Paan
            shop near me | Pubs near me | Quick bites near me | Sweet shops near
            me
          </p>
        )}
      </div>

      <div className="border rounded-lg mb-5">
        <div
          className="p-4 flex items-center justify-between  cursor-pointer"
          onClick={() => setThirdDropDown(!thirdDropDown)}
        >
          <p className="text-xl max-[500px]:text-base">Top Restaurant Chains</p>
          {thirdDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {thirdDropDown && (
          <div className="mt-2 text-gray-400 flex gap-20 max-[500px]:gap-10 flex-wrap p-4">
            <div className="flex flex-col gap-2">
              <p>Bikanerwala</p>
              <p>Domino's</p>
              <p>McDonald's</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Biryani Blues</p>
              <p>Dunkin' Donuts</p>
              <p>Moti Mahal Delux</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>BTW</p>
              <p>Haldiram's</p>
              <p>Om Sweets & Snacks</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Burger King</p>
              <p>KFC</p>
              <p>Pizza Hut</p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Burger Singh</p>
              <p>Krispy Kreme</p>
              <p>Sagar Ratna</p>
            </div>
          </div>
        )}
      </div>

      {/* <div className="border rounded mb-5">
        <div
          className="p-4 flex items-center justify-between  cursor-pointer"
          onClick={() => setFourthDropdown(!fourthDropDown)}
        >
          <p className="text-xl">Cities We Deliver To</p>
          {fourthDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {fourthDropDown && (
          <p className="text-gray-400 p-4">
            Bakery food near me | Beverages food near me | Biryani food near me
            | Burger food near me | Chinese food near me | Coffee food near me |
            Continental food near me | Desserts food near me | Italian food near
            me | Mithai food near me | Momos food near me | Mughlai food near me
            | North Indian food near me
          </p>
        )}
      </div> */}
    </>
  );
}
