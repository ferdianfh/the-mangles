/* eslint-disable @next/next/link-passhref */
import Header from "../../components/Header";
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
import styles from "../../styles/auth/Signup.module.css";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Header
        title="Login or Signup - The Mangl&eacute;s"
        description="Create new account and start exploring and writing now!"
      />

      <main className="main">
        <div
          className={`${styles.signupContainer} bg-slate-50 justify-center align-middle`}
        >
          <section className={styles.signupSection}>
            <div
              className={`${styles.formContainer} fontAvenir primaryTextColor primaryBgColor px-4`}
            >
              <h2 className="mx-1 mt-5 mb-2 text-3xl ">Sign Up</h2>
              <p className="text-center mt-4 mb-8 text-base">
                Hey, welcome to{" "}
                <strong className="cursor-pointer hover:underline">
                  <Link href="/">The Mangl&eacute;s!</Link>
                </strong>{" "}
                <br />
                Create an account to enjoy our full feautres!
              </p>

              <form className=" flex flex-col px-4">
                <label className="font-bold text-sm" htmlFor="fullname">
                  Full Name:{" "}
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md outline-none focus-within:border-[#bfa2db]"
                  id="fullname"
                />

                <label className="font-bold text-sm" htmlFor="email">
                  Email:{" "}
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md outline-none focus-within:border-[#bfa2db]"
                  id="email"
                />

                <label className="font-bold text-sm" htmlFor="password">
                  Password:{" "}
                </label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md outline-none focus-within:border-[#bfa2db]"
                  id="password"
                />

                <Button className="secondaryBgColor fontAvenir text-white text-base font-bold mt-7 px-8 py-3 rounded-md cursor-pointer hover:bg-purple-400 active:bg-purple-500">
                  Sign Up
                </Button>
              </form>

              <p className="text-center mt-6">
                Already have an account?{" "}
                <span className="secondaryTextColor font-semibold hover:underline hover:cursor-pointer">
                  <Link href="/auth/login">Login Here</Link>
                </span>{" "}
              </p>

              <Link href="/">
                <p className="uppercase text-purple-900 text-center font-bold underline cursor-pointer">
                  Back to Home
                </p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
