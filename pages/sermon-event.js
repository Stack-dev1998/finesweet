import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import image1 from "../public/images/image16.png";
import StylishDiv from "../components/utility/stylishTextDiv";
import StylishCard from "../components/utility/stylishCard";


function SemonEven(props) {
  return (
    <div style={{ background: "#F5F2F0" }}>
      <Head>
        <title>blog post</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className=" container mx-auto mt-24">
        <div className="grid grid-cols-5 grid-flow-row  gap-40">
          <div className=" col-span-3">
            <div className=" relative " style={{ height: "350px" }}>
              <Image src={image1} layout="fill" />
            </div>
            <p className="orange_text my-6"> Upcoming Event</p>
            <h2 className=" uppercase text-5xl font-bold">
              HOW TO TRULY TRUST SOMEONE
            </h2>
            <p className=" text-lg my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
              Pharetra sit amet aliquam id diam maecenas ultricies.
            </p>
            <StylishDiv>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
            </StylishDiv>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              faucibus in ornare quam viverra orci sagittis eu volutpat.
              Pharetra sit amet aliquam id diam maecenas ultricies.
            </p>
          </div>
          <div className=" col-span-2">
            <div className="  p-6 bg-white">
              <h3 className=" uppercase text-2xl font-bold mb-3">REGISTER nOW</h3>
              <div className="flex justify-between">
                <p className="mt-2 flex ">
                  <img src="images/icons/location.svg" className="mr-4" /> No
                  233 Main St. New York,
                  <br /> United States
                </p>
                <p className="mt-2 flex ">
                  <img src="images/icons/clock.svg" className="mr-4" /> Friday
                  23:39 IST <br />
                  Saturday 11:20 ISD
                </p>
              </div>
              <div className="my-5 flex flex-col">
                <label className="">Full Name</label>
                <input type={"text"} className="w-full border-b-2 pt-2 pr-2 pb-2 focus:border-none" placeholder="Hassan khan" />
              </div>
              <div className="my-5 flex flex-col">
                <label className="">Email</label>
                <input type={"email"} className="w-full border-b-2 pt-2 pr-2 pb-2 focus:border-none" placeholder="Hassan@gmail.com" />
              </div>
              <button className="btn_primary">REGISTER NOW</button>
            </div>
          </div>
        </div>
        <h2 className=" uppercase font-bold text-5xl text-center my-24">Upcoming Sermons</h2>
        <div className=" grid grid-flow-row grid-cols-4 gap-4">
        <StylishCard
            orangeText="Relationship"
            bg_color="bg-white"
            heading="100 RANDOM ACTS OF KINDNESS"
            date="20 july"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <p className="mt-2 flex ">
              <img src="images/icons/clock.svg" className="mr-4" /> Friday 23:39
              IST <br />
              Saturday 11:20 ISD
            </p>
            <p className="mt-2 flex ">
              <img src="images/icons/location.svg" className="mr-4" /> No 233
              Main St. New York,
              <br /> United States
            </p>
          </StylishCard>

          <StylishCard
            orangeText="Relationship"
            bg_color="bg-white"
            heading="FAITH IS A PROCESS, NOT A DESTINATION"
            date="20 july"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <p className="mt-2 flex ">
              <img src="images/icons/clock.svg" className="mr-4" /> Friday 23:39
              IST <br />
              Saturday 11:20 ISD
            </p>
            <p className="mt-2 flex ">
              <img src="images/icons/location.svg" className="mr-4" /> No 233
              Main St. New York,
              <br /> United States
            </p>
          </StylishCard>

          <StylishCard
            orangeText="Relationship"
            bg_color="bg-white"
            heading="THERE IS NOTHING IMPOSSIBLE"
            date="20 july"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <p className="mt-2 flex ">
              <img src="images/icons/clock.svg" className="mr-4" /> Friday 23:39
              IST <br />
              Saturday 11:20 ISD
            </p>
            <p className="mt-2 flex ">
              <img src="images/icons/location.svg" className="mr-4" /> No 233
              Main St. New York,
              <br /> United States
            </p>
          </StylishCard>

          <StylishCard
            orangeText="Relationship"
            bg_color="bg-white"
            heading=" Celebrating freedom and life"
            date="20 july"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <p className="mt-2 flex ">
              <img src="images/icons/clock.svg" className="mr-4" /> Friday 23:39
              IST <br />
              Saturday 11:20 ISD
            </p>
            <p className="mt-2 flex ">
              <img src="images/icons/location.svg" className="mr-4" /> No 233
              Main St. New York,
              <br /> United States
            </p>
          </StylishCard>
         
        </div>
         
      </div>
      <Footer />
    </div>
  );
}

export default SemonEven;
