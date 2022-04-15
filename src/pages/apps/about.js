import Link from "next/link";
import React from "react";
import Button from "../../components/base/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import styles from "../../styles/apps/About.module.css";
import logo from "../../assets/logo.png";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <Header
        title="A Story About The Mangl&eacute;s"
        description="A Brief Story About The Mangl&eacute;s and Why you should start exploring it!"
        keywords="The Mangles, News Web Apps, news, articles, about us, what is the mangl&eacute;s?, why is the mangl&eacute;s"
      />

      <Navbar heroColor="about" activePage="about" />

      <main className="main">
        <section className="heroSection bg-white">
          <p className="fontGeorgia text-black text-8xl text-center sml:text-4xl ">
            Be <strong className="font-extrabold">Bold</strong>. Be{" "}
            <em>Unique</em>. <br />
            Be <span className="uppercase underline">you</span>.{" "}
          </p>
        </section>

        <section
          className={`${styles.visiMisiSection} h-3/6 w-full flex flex-row sml:flex-col `}
        >
          <div
            className={`${styles.description} flex-1 bg-amber-100 text-veryDarkBlue text-2xl text-justify fontGeorgia pl-16 pr-6 py-10 sml:px-5 sml:py-8 sml:text-base `}
          >
            <p className="m-0 first-letter:text-9xl first-letter:font-bold first-letter:float-left first-letter:mr-8 sml:first-letter:text-5xl ">
              The Mangl&eacute;s was created for one special mission, to help
              people expressing their complicated yet wonderful thoughts,
              imagination and ideas into words by creating a safe and fun
              platform.
            </p>

            <p>
              In the making of <strong>The Mangl&eacute;s</strong> (de mang:
              glz), i was inspired by a lot of masterpieces with the same
              purpose. The first one is{" "}
              <strong className="hover:cursor-pointer underline">
                <Link href="https://id.wikipedia.org/wiki/Mangl%C3%A9">
                  Mangl&eacute;
                </Link>
              </strong>{" "}
              (ma:ng l&aelig;), it is a Sundanese traditional magazine that
              contains a lot of stuff from articles to carpon (short story). And
              the other one is one of the greatest platform for reading,
              writing, and publishing cool stuff and ideas in this century, none
              of the other is{" "}
              <strong className="hover:cursor-pointer underline">
                <Link href="https://medium.com">Medium.</Link>
              </strong>
            </p>
          </div>

          <div
            className={`${styles.quotes} flex-1 bg-amber-50 p-4 flex justify-center align-middle `}
          >
            <blockquote className="fontGeorgia text-6xl text-veryDarkBlue self-center sml:text-3xl ">
              &quot;Creativity is Intelligence Having Fun&quot; <br /> &#8212;
              Albert Einstein
            </blockquote>
          </div>
        </section>

        <section className="h-full w-full bg-veryDarkBlue fontGeorgia text-white flex flex-col ">
          <div
            className={`${styles.whyIsTheMangles} text-6xl flex justify-center align-middle p-6 sml:px-5 sml:py-7 sml:text-center sml:text-4xl `}
          >
            <p className="">
              Why is <strong>The Mangl&eacute;s</strong>?
            </p>
          </div>

          <div className={`${styles.reasons} flex flex-row sml:flex-col  `}>
            <div
              className={`${styles.left} flex-1 text-3xl pl-16 pr-1 py-8 sml:px-5 sml:text-xl  `}
            >
              <p className="first-letter:text-8xl first-letter:mr-3 my-1 sml:first-letter:text-5xl ">
                1. A classic, familiar, and fun user interface designed to make
                you feel comfortable spend time reading and writing with us.
              </p>
            </div>

            <div
              className={`${styles.right} flex-1 flex flex-col text-3xl sml:text-xl `}
            >
              <div className={`${styles.rightTop} flex-1 py-4 pl-5 pr-16`}>
                <p className="first-letter:text-8xl first-letter:mr-3 sml:first-letter:text-5xl ">
                  2. Interesting topics to satisfy your curious mind.
                </p>
              </div>
              <div className={`${styles.rightBot} flex-1 py-4 pl-5 pr-16`}>
                <p className="first-letter:text-8xl first-letter:mr-3  sml:first-letter:text-5xl ">
                  3. All features are free to use without any limitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={" h-3/6 w-full bg-white"}>
          <div
            className={`${styles.borderBottomDark} px-16 py-20 fontGeorgia text-center sml:px-5 sml:py-10  `}
          >
            <p className="m-0 text-8xl mt-10 sml:text-4xl ">
              Start Writing Right Now.
            </p>
            <p className="text-2xl sml:text-base ">
              Be an author and start expressing your thoughts, feelings,
              imagination, and ideas.
            </p>

            <Button className="bg-gloomyPurple text-white text-xl px-8 py-4 mt-12 rounded-md shadow-md cursor-pointer hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors sml:text-base sml:px-6 sml:py-2 sml:mb-5 ">
              Request to be an Author
            </Button>
          </div>

          <div className="flex flex-row fontGeorgia sml:flex-col ">
            <div
              className={`${styles.borderRightDark} flex-1 pl-16 pr-9 py-12 sml:px-5 sml:py-7 `}
            >
              <p className="m-0 text-5xl sml:text-2xl ">Join Our Community.</p>
              <p className="text-xl cursor-pointer hover:underline sml:text-base ">
                Blog
              </p>
              <p className="text-xl cursor-pointer hover:underline sml:text-base ">
                Twitter
              </p>

              <p className="m-0 mt-10 text-5xl sml:text-2xl ">Resources.</p>
              <p className="text-xl cursor-pointer sml:text-base ">
                Illustration:{" "}
                <span className="underline">
                  <Link href="https://opendoodles.com/">Open Doodles</Link>
                </span>
              </p>
              <p className="text-xl cursor-pointer sml:text-base ">
                Images:{" "}
                <span className="underline">
                  <Link href="https://unsplash.com/">Unsplash</Link>
                </span>
              </p>
            </div>

            <div className="flex-1 pl-8 py-12 flex m-auto sml:pl-5 ">
              <div className="flex flex-row justify-start align-middle ">
                <Image src={logo} alt="logo" width={120} height={120} />
                <div className="flex flex-col ml-2">
                  <h1 className=" mb-0 text-5xl sml:text-3xl ">
                    The Mangl&eacute;s
                  </h1>
                  <p className="m-0 text-lg sml:text-base ">
                    &copy; Copyright 2022. All Right Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          className={`${styles.faqSection} text-white fontGeorgia bg-black py-16 px-16`}
        >
          <p className="m-0 text-6xl ">Frequently Asked Question.</p>

          <Accordion />
        </section> */}
      </main>

      <Footer />
    </>
  );
}
