import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'

import Header from "../components/header";
import Footer from "../components/footer";
import image12 from "../public/images/image12.png";
import Image5 from "../public/images/image5.png";

 
import styles from "../styles/aboutus.module.css";
import StylishCard from "../components/utility/stylishCard";

function sermon() {
  return (
    <div>
      <Head>
        <title>Sermon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={"  relative "} style={{height:"75vh"}}>
        <Image src={image12} layout="fill" className=" absolute" />
        <div
          className={
            "container h-full  mx-auto flex flex-col  justify-center relative " +
            styles.heroText
          }
        >
          <p className=" uppercase font-semibold">SERMON</p>
          <h2 className=" uppercase text-5xl font-bold">
            take part in OUR SERMON
          </h2>
        </div>
      </div>
      <div className={"container text-center mx-auto   mt-12"}>
        <p className=" uppercase my-5"> Upcoming SERMONS</p>
        <h1 className="text-5xl font-bold uppercase mb-12">
          join us and become part <br />
          of something great
        </h1>
        <div
          className={"grid grid-cols-3 grid-flow-row gap-0 " + styles.register}
        >
          <div className="bg_light_orange p-4 text-left flex flex-col   justify-center">
            <p className="flex justify-between uppercase ">
              <span></span>
              <span>
                <span className="font-bold">20</span>
                <br />
                July
              </span>
            </p>
            <div className="ml-10 w-80 ">
              <p className=" uppercase clear-both text-sm orange_text">
                Upcoming Event
              </p>
              <h4 className=" uppercase font-bold text-2xl mb-3">
                WATCH AND LISTEN TO OUR SERMONS
              </h4>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <p className="mt-4 flex ">
                <img src="images/icons/clock.svg" className="mr-4" /> Friday
                23:39 IST <br />
                Saturday 11:20 ISD
              </p>
              <p className="mt-4 flex ">
                <img src="images/icons/location.svg" className="mr-4" /> No 233
                Main St. New York,
                <br /> United States
              </p>
               <Link href={'/sermon-event'}><button className=" uppercase btn_secondry mt-3">Register</button></Link>
            </div>
          </div>
          <div className="col-span-2">
            <div className="  relative  h-full">
              <Image src={Image5} layout="fill" />
            </div>
          </div>
        </div>
        <p className=" float-right my-4">View all Sermons &#8594;</p>
      </div>
      <div className=" container mx-auto mt-32">
          <h2 className=" uppercase font-bold text-5xl text-center mb-12">View All Events</h2>
        <div className=" grid grid-cols-4 grid-flow-col gap-4 ">

        <StylishCard
            orangeText="Relationship"
            bg_color="bg_light_orange"
            heading=" THE BIBLICAL PURPOSE OF MONEY"
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
            bg_color="bg_light_orange"
            heading=" THE BIBLICAL PURPOSE OF MONEY"
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
            bg_color="bg_light_orange"
            heading=" THE BIBLICAL PURPOSE OF MONEY"
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
            bg_color="bg_light_orange"
            heading=" THE BIBLICAL PURPOSE OF MONEY"
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
          {/* <div className=" p-5 pb-10 w-full bg_light_orange">
            <p className="float-right uppercase ">
              <span>
                <span className="font-bold">20</span>
                <br />
                July
              </span>
            </p>
            <p className=" uppercase clear-both text-sm orange_text my-5">
              Upcoming Event
            </p>
            <h4 className=" uppercase font-bold text-2xl mb-3">
              WATCH AND LISTEN TO OUR SERMONS
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
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
          </div>

          <div className=" p-5 pb-10 w-full bg_light_orange">
            <p className="float-right uppercase ">
              <span>
                <span className="font-bold">20</span>
                <br />
                July
              </span>
            </p>
            <p className=" uppercase clear-both text-sm orange_text my-5">
              Upcoming Event
            </p>
            <h4 className=" uppercase font-bold text-2xl mb-3">
            Faith is a process, not a destination
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
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
          </div>

          <div className=" p-5 pb-10 w-full bg_light_orange">
            <p className="float-right uppercase ">
              <span>
                <span className="font-bold">20</span>
                <br />
                July
              </span>
            </p>
            <p className=" uppercase clear-both text-sm orange_text my-5">
              Upcoming Event
            </p>
            <h4 className=" uppercase font-bold text-2xl mb-3">
            there is nothing impossible
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
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
          </div>

          <div className=" p-5 pb-10 w-full bg_light_orange">
            <p className="float-right uppercase ">
              <span>
                <span className="font-bold">20</span>
                <br />
                July
              </span>
            </p>
            <p className=" uppercase clear-both text-sm orange_text my-5">
              Upcoming Event
            </p>
            <h4 className=" uppercase font-bold text-2xl mb-3">
              WATCH AND LISTEN TO OUR SERMONS
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <p className="mt-2 flex ">
              <img src="images/icons/clock.svg" className="mr-4" /> Friday 23:39
              IST <br />
              Saturday 11:20 ISD
            </p>
            <p className="mt-2 flex my-5">
              <img src="images/icons/location.svg" className="mr-4" /> No 233
              Main St. New York,
              <br /> United States
            </p>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default sermon;
