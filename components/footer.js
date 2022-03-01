import React from "react";
import Link from "next/link";
import styles from "../styles/footer.module.css";
function footer(props) {
  return (
    <div className={styles.footer}>
      <div className="container mx-auto text-white h-full">
        <div className="grid grid-cols-3 grid-flow-row gap-4 place-items-center h-full">
          <div className="w-full">
            <img src="images/icons/orange_logo.svg" />
            <p className="mt-2">© Copyright Finsweet 2022</p>
            <p className="mt-8 mb-4">(480) 555-0103</p>
            <p className=" mb-4">4517 Washington Ave. </p>
            <p className="  mb-4">finsweet@example.com</p>
          </div>
          <div className="grid grid-cols-2 grid-flow-row  gap-6  w-full">
            <div>
              <p className="   text-2xl">Quicklinks</p>
              <p className=" uppercase mt-6 mb-3">
                <Link href={"/about-us"}>About us </Link>
              </p>
              <p className="  uppercase mt-6 mb-3">
                <Link href={"/sermon"}>Sermons </Link>
              </p>
              <p className="  uppercase mt-6 mb-3">
                <Link href={"/blog"}>Events </Link>
              </p>
              <p className="  uppercase mt-6 mb-3">
                <Link href={"/blog"}>Blog </Link>
              </p>
            </div>
            <div>
              <p className="text-2xl">Connect</p>
              <div className="mt-4 flex  ">
                <img src="images/icons/facebook.svg" />
                <img src="images/icons/twitter.svg" className="mx-4" />
                <img src="images/icons/linkedin.svg" />
              </div>
            </div>
          </div>
          <div className=" w-full">
            <h2 className=" text-4xl uppercase font-bold">
              Subscribe to get Latest <br />
              Updates and News
            </h2>
            <div className="flex mt-16">
              <input
                type={"text"}
                placeholder="Yourmail@gmail.com"
                className={styles.input}
              />
              <button className="btn_primary uppercase">subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
