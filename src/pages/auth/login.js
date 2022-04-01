import Input from "../../components/base/Input";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/auth/Login.module.css";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from "next/link";
import Button from "../../components/base/Button";

export default function Login() {
  return (
    <>
      <Header
        title="Login or Signup - The Mangl&eacute;s"
        description="Login into your existing account"
      />

      <main className="main">
        <div
          className={`${styles.loginContainer} bg-slate-50 justify-center align-middle`}
        >
          <section className={styles.loginSection}>
            <div
              className={`${styles.formContainer} fontAvenir primaryTextColor primaryBgColor px-4`}
            >
              <h2 className="mx-1 mt-5 mb-2 text-3xl ">Login</h2>
              <p className="text-center mt-4 mb-8 text-base">
                Hello, welcome back to{" "}
                <strong className="cursor-pointer hover:underline">
                  <Link href="/">The Mangl&eacute;s!</Link>
                </strong>
              </p>

              <form className=" flex flex-col px-4">
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

                <p className="text-right hover:underline hover:cursor-help">
                  Forgot Password?
                </p>

                <Button className="secondaryBgColor fontAvenir text-white text-base font-bold mt-7 px-8 py-3 rounded-md cursor-pointer hover:bg-purple-400 active:bg-purple-500">
                  Login
                </Button>
              </form>

              <p className="text-center mt-8">
                Not have an account yet?{" "}
                <span className="secondaryTextColor font-semibold hover:underline hover:cursor-pointer">
                  <Link href="/auth/signup">Sign Up Here</Link>
                </span>{" "}
              </p>

              <p className="uppercase text-center underline cursor-pointer mt-12">
                <Link href="/">Back to Home</Link>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
