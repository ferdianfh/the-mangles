/* eslint-disable @next/next/link-passhref */
import Input from "../../components/base/Input";
import Header from "../../components/Header";
import styles from "../../styles/auth/Login.module.css";
import Link from "next/link";
import Button from "../../components/base/Button";

export default function ResetPassword() {
  return (
    <>
      <Header
        title="Create New Password - The Mangl&eacute;s"
        description="Create and Confirm new password to reset old password"
      />

      <main className="main">
        <div
          className={`${styles.loginContainer} bg-slate-50 justify-center align-middle`}
        >
          <section className={styles.loginSection}>
            <div
              className={`${styles.formContainer} fontAvenir primaryTextColor primaryBgColor px-4`}
            >
              <h2 className="mx-1 mt-5 mb-2 text-3xl ">Create New Password</h2>
              <p className="text-center mt-4 mb-8 text-base">
                Create and confirm your new password to continue reset your old
                password.
              </p>

              <form className=" flex flex-col px-4">
                <label className="font-bold text-sm" htmlFor="password">
                  Password:{" "}
                </label>
                <Input
                  type="password"
                  placeholder="Enter your new password"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md outline-none focus-within:border-[#bfa2db]"
                  id="email"
                />

                <label className="font-bold text-sm" htmlFor="confirmPassword">
                  Confirm Password:{" "}
                </label>
                <Input
                  type="password"
                  placeholder="Confirm your new password"
                  className="fontAvenir text-base py-2 px-5 mt-1 mb-6 placeholder:text-[#7f7c82] border border-[#0d253c] rounded-md outline-none focus-within:border-[#bfa2db]"
                  id="confirmPassword"
                />

                <Button className="secondaryBgColor fontAvenir text-white text-base font-bold mt-24 px-8 py-3 rounded-md cursor-pointer hover:bg-purple-400 active:bg-purple-500">
                  Create New Password
                </Button>
              </form>

              <Link href="/">
                <p className="uppercase text-purple-900 text-center font-bold underline cursor-pointer mt-12">
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
