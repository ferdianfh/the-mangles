import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/base/Button";
import CardAuthor from "../components/CardAuthor";
import CardCategory from "../components/CardCategory";
import CardArticleLg from "../components/CardArticleLg";
import CardArticleSm from "../components/CardArticleSm";
import styles from "../styles/Home.module.css";
import illustration1 from "../assets/FloatDoodle.png";
import meong from "../assets/articleCats.jpg";
import author from "../assets/profile.jpg";
import { authors } from "../helpers/arrayAuthor";
import { articles } from "../helpers/arrayArticles";
import { categories } from "../helpers/arrayCategories";

import { BsBookmark } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import CardArticleMobile from "../components/CardArticleMobile";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header
        title="The Mangl&eacute;s | Share Information and Educate People"
        description="Share Information and Educate People"
        keywords="The Mangles, News Web Apps, news, articles"
      />

      <Navbar heroColor="quinary" activePage="home" />

      <main className="main">
        <section className="heroSection quinaryBgColor">
          <div className="heroTitleWrapper">
            <h1 className="title fontGeorgia text-black text-7xl sml:text-4xl sml:mb-8 ">
              Share Information <br /> and Educate People.
            </h1>
            <p className="subtitle text-xl text-black sml:hidden">
              Everyone has their own point of view, stories, <br /> opinions,
              and ideas. Share your unique perspective <br /> to the world and
              help other people write their own stories.
            </p>

            {/* text for mobile layout */}
            <p className="subtitle text-sm text-black sml:block sm:hidden">
              Share your unique perspective to the world and help other people
              write their own stories.
            </p>

            <Button
              onClick={() => router.push("/apps/articles")}
              className="btnHero secondaryBgColor whiteTextColor fontAvenir text-xl px-10 py-4 mt-4 shadow-md hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors sml:text-base sml:px-6 sml:py-2  "
            >
              Start Exploring
            </Button>
          </div>
          <div className="illustration sml:hidden">
            <Image
              src={illustration1}
              alt="Illustration1"
              width={560}
              height={550}
            />
          </div>
        </section>

        <section className={styles.categorySection}>
          <div className={styles.textWrapper}>
            <h2 className="primaryTextColor fontGeorgia sml:text-xl ">
              Category
            </h2>
            <p
              className={`${styles.link} primaryTextColor fontAvenir sml:hidden lg:block sml:text-sm sml:underline `}
            >
              <Link href="/apps/categories">More Like This</Link>
            </p>
          </div>
          <div className={styles.categoryWrapper}>
            {categories.map((category, index) => {
              if (category.id <= 6)
                return (
                  <CardCategory
                    action={() =>
                      router.push(`/apps/categories/${category.codeCategory}`)
                    }
                    key={index}
                    imageCategory={category.imageCategory}
                    nameCategory={category.nameCategory}
                  />
                );
            })}
          </div>
        </section>

        <section className={styles.recommendSection}>
          <div className={styles.recommend}>
            <h2 className="primaryTextColor fontGeorgia sml:text-xl ">
              Recommended For You
            </h2>

            <div className={styles.recommendArticlesWrapper}>
              {articles.map((article) => {
                return (
                  <CardArticleSm
                    action={() =>
                      router.push(`/apps/articles/${article.titleArticle}`)
                    }
                    action2={() =>
                      router.push(`/apps/authors/${article.authorUsername}`)
                    }
                    key={article.id}
                    imageArticle={article.imageArticle}
                    titleArticle={article.titleArticle}
                    descriptionArticle={article.descriptionArticle}
                    authorPicture={article.authorPicture}
                    author={article.author}
                    createdAt={article.createdAt}
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.tags}>
            <h2 className="primaryTextColor fontGeorgia sml:text-xl ">
              Popular Tags
            </h2>
            <p className="blackTextColor sml:text-sm ">
              Explore new topics and satisfy your mind
            </p>

            <div className={styles.tagsWrapper}>
              <span className="secondaryBgColor whiteTextColor hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
                #cats
              </span>
              <span className="secondaryBgColor whiteTextColor">#seblak</span>
              <span className="secondaryBgColor whiteTextColor">#foodie</span>
              <span className="secondaryBgColor whiteTextColor">
                #programming
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #relationships
              </span>
              <span className="secondaryBgColor whiteTextColor">#health</span>
              <span className="secondaryBgColor whiteTextColor">#anime</span>
              <span className="secondaryBgColor whiteTextColor">#japan</span>
              <span className="secondaryBgColor whiteTextColor">#husky</span>
              <span className="secondaryBgColor whiteTextColor">
                #turningred
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #reforestation
              </span>
            </div>
          </div>
        </section>

        <section className={`${styles.videoSection} quinaryBgColor  `}>
          <div className={styles.videoDescWrapper}>
            <h2 className="primaryTextColor fontGeorgia text-3xl">
              A Wakanda Civilian Declaring A War <br /> Throughout The Internet
              Multiverse
            </h2>
            <p className="primaryTextColor text-lg">
              See how brave this young man declaring a war to <br /> the entire
              internet citizen and read the full story below.
            </p>
            <Button className="btnHero secondaryBgColor whiteTextColor fontAvenir px-7 py-3 text-lg shadow-md hover:bg-gloomyPurpleHover active:bg-gloomyPurpleActive transition-colors">
              Read Full Article
            </Button>
          </div>

          <video
            className={styles.video}
            src={"/wantProblemAlways.mp4"}
            width={443}
            height={250}
            controls
          />
        </section>

        <section className={styles.latestArticlesSection}>
          <div className={`${styles.latestNews}  `}>
            <h2 className="primaryTextColor fontGeorgia sml:text-xl ">
              Latest News
            </h2>

            <div className={`${styles.latestNewsWrapper} sml:hidden `}>
              {articles.map((article) => {
                if (article.id === 3 || article.id === 5 || article.id === 6)
                  return (
                    <CardArticleLg
                      action={() =>
                        router.push(`/apps/articles/${article.titleArticle}`)
                      }
                      action2={() =>
                        router.push(`/apps/authors/${article.authorUsername}`)
                      }
                      key={article.id}
                      imageArticle={article.imageArticle}
                      titleArticle={article.titleArticle}
                      descriptionArticle={article.descriptionArticle}
                      authorPicture={article.authorPicture}
                      author={article.author}
                      createdAt={article.createdAt}
                    />
                  );
              })}
            </div>

            <div className={`${styles.latestNewsWrapper} sm:hidden sml:block `}>
              {articles.map((article) => {
                if (article.id === 3 || article.id === 5 || article.id === 6)
                  return (
                    <CardArticleMobile
                      action={() =>
                        router.push(`/apps/articles/${article.titleArticle}`)
                      }
                      action2={() =>
                        router.push(`/apps/authors/${article.authorUsername}`)
                      }
                      key={article.id}
                      imageArticle={article.imageArticle}
                      titleArticle={article.titleArticle}
                      authorPicture={article.authorPicture}
                      author={article.author}
                      createdAt={article.createdAt}
                    />
                  );
              })}
            </div>
          </div>

          <div className={`${styles.topAuthor} px-6 py-8 sml:p-0 `}>
            <h2 className="primaryTextColor fontGeorgia  sml:text-xl  ">
              Who To Follow
            </h2>

            <div className={`${styles.topAuthorsWrapper} `}>
              {authors.map((author) => {
                return (
                  <CardAuthor
                    key={author.authorId}
                    action={() =>
                      router.push(`/apps/authors/${author.authorUsername}`)
                    }
                    authorName={author.authorName}
                    authorPic={author.authorPic}
                    bio={author.bio}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
