import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/base/Button";
import CardCategory from "../components/CardCategory";
import styles from "../styles/Home.module.css";
import illustration1 from "../assets/FloatDoodle.png";
import { categories } from "../helpers/arrayCategories";
import { articles } from "../helpers/arrayArticles";
import CardArticleLg from "../components/CardArticleLg";
import CardArticleSm from "../components/CardArticleSm";
import author from "../assets/profile.jpg";
import { useRouter } from "next/router";

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
            <h1 className="title fontGeorgia primaryTextColor">
              Share Information <br /> and Educate People
            </h1>
            <p className="subtitle primaryTextColor">
              Everyone has their point of view of something, but just <br />{" "}
              don’t be afraid to express the facts. Be an author and <br />{" "}
              share you prespective of something to the world.
            </p>
            <Button
              onClick={() => router.push("/apps/articles")}
              className="btnHero secondaryBgColor whiteTextColor fontAvenir shadow-md hover:bg-purple-400 active:bg-purple-500 transition-colors"
            >
              Start Exploring
            </Button>
          </div>
          <Image
            className="illustration"
            src={illustration1}
            alt="Illustration1"
            width={560}
            height={550}
          />
        </section>

        <section className={styles.categorySection}>
          <div className={styles.textWrapper}>
            <h2 className="primaryTextColor fontGeorgia">Category</h2>
            <p className={`${styles.link} primaryTextColor fontAvenir`}>
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
            <h2 className="primaryTextColor fontGeorgia">Recommendation</h2>

            <div className={styles.recommendArticlesWrapper}>
              {articles.map((article) => {
                return (
                  <CardArticleSm
                    action={() => router.push(`/apps/articles/${article.id}`)}
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
            <h2 className="primaryTextColor fontGeorgia">Popular Tags</h2>
            <p className="blackTextColor">
              Explore new topics and satisfy your mind
            </p>

            <div className={styles.tagsWrapper}>
              <span className="secondaryBgColor whiteTextColor">#cats</span>
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

        <section className={`${styles.videoSection} quinaryBgColor`}>
          <div className={styles.videoDescWrapper}>
            <h2 className="primaryTextColor fontGeorgia">
              A Wakanda Civilian Declaring A War <br /> Throughout The Internet
              Multiverse
            </h2>
            <p className="primaryTextColor">
              See how brave this young man declaring a war to <br /> the entire
              internet citizen and read the full story below.
            </p>
            <Button className="btnHero secondaryBgColor whiteTextColor fontAvenir">
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
          <div className={styles.latestNews}>
            <h2 className="primaryTextColor fontGeorgia">Latest News</h2>

            <div className="">
              {articles.map((article) => {
                if (article.id === 3 || article.id === 5 || article.id === 6)
                  return (
                    <CardArticleLg
                      action={() => router.push(`/apps/articles/${article.id}`)}
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
          <div className={styles.topAuthor}>
            <h2 className="primaryTextColor fontGeorgia">
              Top Authors This Month
            </h2>

            <div className={styles.topAuthorsWrapper}>
              <div className={styles.authorDetails}>
                <div>
                  <Image
                    className={styles.authorImg}
                    src={author}
                    alt="TopAuthor"
                    width={57}
                    height={57}
                  />
                </div>

                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>Ferdi Ferdiana</p>
                  <p className={`${styles.authorAbout} tertiaryTextColor`}>
                    I usually code with JavaScript, but sometimes i write
                    article to escape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
