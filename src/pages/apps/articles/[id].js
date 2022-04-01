import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import { articles } from "../../../helpers/arrayArticles";
import styles from "../../../styles/ArticleDetails.module.css";
import { BsBookmark, BsCircleFill, BsLink45Deg } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import Button from "../../../components/base/Button";

export default function ArticleDetails() {
  const router = useRouter();
  const { id } = router.query;
  const convertedId = parseInt(id);

  return (
    <>
      {articles.map((article, id) => {
        if (article.id === convertedId)
          return (
            <Header
              key={id}
              title={article.titleArticle}
              description={article.descriptionArticle}
              keywords={`The Mangles, News Web Apps, news, articles, write, ${article.category}`}
            />
          );
      })}

      <Navbar activePage="articles" />

      <main className="main">
        <section className={styles.articleSection}>
          {articles.map((article) => {
            if (article.id === convertedId)
              return (
                <div className={styles.contentWrapper}>
                  <div className={styles.articleInfo}>
                    <div
                      className={`${styles.wrapper} flex-row justify-between`}
                    >
                      <div className={styles.authorDateWrapper}>
                        <div className={styles.articleAuthorLg}>
                          <Image
                            className={styles.authorPictureLg}
                            src={article.authorPicture}
                            alt="author"
                            width={42}
                            height={42}
                          />
                          <p>{article.author}</p>
                        </div>

                        <div className={styles.iconWrapper}>
                          <BsCircleFill
                            className={`${styles.separateIcon} tertiaryTextColor`}
                          />
                        </div>

                        <p
                          className={`${styles.dateArticle} tertiaryTextColor`}
                        >
                          {article.createdAt}
                        </p>

                        {/* <div className={styles.iconWrapper}>
                          <BsCircleFill
                            className={`${styles.separateIcon} tertiaryTextColor`}
                          />
                        </div> */}
                      </div>

                      <div className={styles.iconWrapper}>
                        <FiSend
                          className={`${styles.bookmarkIconLg} tertiaryTextColor`}
                        />
                        <BsLink45Deg
                          className={`${styles.bookmarkIconLg} tertiaryTextColor`}
                        />
                        <BsBookmark
                          className={`${styles.bookmarkIconLg} tertiaryTextColor`}
                        />
                      </div>
                    </div>

                    <h1
                      className={`${styles.articleTitle} primaryTextColor fontAvenir`}
                    >
                      {article.titleArticle}
                    </h1>

                    <Image
                      className={styles.articleImage}
                      src={article.imageArticle}
                      alt="imageArticle"
                      width={755}
                      height={405}
                    />
                  </div>

                  <div className={styles.articleContent}>
                    <p
                      className={`${styles.descriptionArticle} tertiaryTextColor fontGeorgia`}
                    >
                      <i>&quot;{article.descriptionArticle}&quot;</i>
                    </p>

                    <p className={`${styles.paragrafArticle} primaryTextColor`}>
                      {article.content.paragraf1}
                    </p>
                    <p className={`${styles.paragrafArticle} primaryTextColor`}>
                      {article.content.paragraf2}
                    </p>
                    <p className={`${styles.paragrafArticle} primaryTextColor`}>
                      {article.content.paragraf3}
                    </p>
                  </div>

                  {/* <div className={styles.articleComment}>Comment</div> */}
                </div>
              );
          })}

          <div className={styles.additionalInfo}>
            <h2 className="primaryTextColor fontGeorgia">Author Profile</h2>

            {articles.map((article, id) => {
              if (article.id === convertedId)
                return (
                  <div className={styles.topAuthorsWrapper}>
                    <div className={styles.authorDetails}>
                      <div>
                        <Image
                          className={styles.authorImg}
                          src={article.authorPicture}
                          alt="TopAuthor"
                          width={57}
                          height={57}
                        />
                      </div>

                      <div className={styles.authorInfo}>
                        <p className={styles.authorName}>{article.author}</p>
                        <p
                          className={`${styles.authorAbout} tertiaryTextColor`}
                        >
                          I usually code with JavaScript, but sometimes i write
                          article to escape.
                        </p>
                      </div>
                    </div>
                  </div>
                );
            })}

            <Button
              className={`${styles.btnAuthor} secondaryBgColor whiteTextColor shadow-md`}
            >
              Follow
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
