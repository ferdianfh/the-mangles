import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import { articles } from "../../../helpers/arrayArticles";
import styles from "../../../styles/ArticleDetails.module.css";
import { BsBookmark, BsCircleFill, BsLink45Deg } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import Button from "../../../components/base/Button";

export default function ArticleDetails() {
  const router = useRouter();
  const { id } = router.query;
  const convertedId = parseInt(id);
  const detailArticle = [];
  let result;
  const selectedArticle = articles.map((article) => {
    if (article.id === convertedId) {
      result = detailArticle.push(article);
      return result;
    }
  });
  console.log(detailArticle);

  return (
    <>
      <Header
        title={detailArticle[0].titleArticle}
        description={detailArticle[0].descriptionArticle}
        keywords={`The Mangles, News Web Apps, news, articles, write, ${detailArticle[0].category}`}
      />

      <Navbar activePage="articles" />

      <main className="main">
        <section className={styles.articleSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.articleInfo}>
              <h1
                className={`${styles.articleTitle} primaryTextColor fontAvenir`}
              >
                {detailArticle[0].titleArticle}
              </h1>
              <div className={styles.wrapper}>
                <div className={styles.articleAuthorLg}>
                  <Image
                    className={styles.authorPictureLg}
                    src={detailArticle[0].authorPicture}
                    alt="author"
                    width={42}
                    height={42}
                  />
                  <p>{detailArticle[0].author}</p>
                </div>

                <div className={styles.iconWrapper}>
                  <BsCircleFill
                    className={`${styles.separateIcon} tertiaryTextColor`}
                  />
                </div>

                <p className={`${styles.dateArticle} tertiaryTextColor`}>
                  {detailArticle[0].createdAt}
                </p>

                <div className={styles.iconWrapper}>
                  <BsCircleFill
                    className={`${styles.separateIcon} tertiaryTextColor`}
                  />
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
              <Image
                className={styles.articleImage}
                src={detailArticle[0].imageArticle}
                alt="imageArticle"
                width={755}
                height={405}
              />
            </div>

            <div className={styles.articleContent}>
              <p
                className={`${styles.descriptionArticle} tertiaryTextColor fontGeorgia`}
              >
                <i>&quot;{detailArticle[0].descriptionArticle}&quot;</i>
              </p>

              <p className={`${styles.paragrafArticle} primaryTextColor`}>
                {detailArticle[0].content.paragraf1}
              </p>
              <p className={`${styles.paragrafArticle} primaryTextColor`}>
                {detailArticle[0].content.paragraf2}
              </p>
              <p className={`${styles.paragrafArticle} primaryTextColor`}>
                {detailArticle[0].content.paragraf3}
              </p>
            </div>

            {/* <div className={styles.articleComment}>Comment</div> */}
          </div>

          <div className={styles.additionalInfo}>
            <h2 className="primaryTextColor fontGeorgia">Author Profile</h2>

            <div className={styles.topAuthorsWrapper}>
              <div className={styles.authorDetails}>
                <div>
                  <Image
                    className={styles.authorImg}
                    src={detailArticle[0].authorPicture}
                    alt="TopAuthor"
                    width={57}
                    height={57}
                  />
                </div>

                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>{detailArticle[0].author}</p>
                  <p className={`${styles.authorAbout} tertiaryTextColor`}>
                    I usually code with JavaScript, but sometimes i write
                    article to escape.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className={`${styles.btnAuthor} secondaryBgColor whiteTextColor`}
            >
              Follow
            </Button>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </>
  );
}
