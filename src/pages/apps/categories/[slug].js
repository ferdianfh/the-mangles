/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import { articles } from "../../../helpers/arrayArticles";
import { categories } from "../../../helpers/arrayCategories";
import CardArticleLg from "../../../components/CardArticleLg";
import styles from "../../../styles/ArticlesByCategory.module.css";
import { IoPricetags } from "react-icons/io5";
import Image from "next/image";
import author from "../../../assets/profile.jpg";

export default function Category() {
  const router = useRouter();
  const { slug } = router.query;
  const detailCategory = [];
  let result;
  const selectedCategory = categories.map((category) => {
    if (category.codeCategory === slug) {
      result = detailCategory.push(category);
      return result;
    }
  });

  return (
    <>
      <Header
        title={`Learn more about ${detailCategory[0].nameCategory} with these phenomenal articles!`}
        description={detailCategory[0].descriptionCategory}
        keywords={`The Mangles, News Web Apps, news, articles, write, ${detailCategory[0].codeCategory}`}
      />

      <Navbar activePage="category" />

      <main className="main">
        <section className={styles.articlesCategorySection}>
          <div className={styles.listArticle}>
            <div className={styles.categoryTitleWrapper}>
              <IoPricetags className={`${styles.tagsIcon} primaryTextColor`} />
              <h2 className="primaryTextColor fontGeorgia">
                {`${detailCategory[0].nameCategory}`}
              </h2>
            </div>
            {detailCategory[0].totalArticles > 0 ? (
              articles.map((article) => {
                if (article.category === slug)
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
              })
            ) : (
              <p>Articles in this category are not yet available.</p>
            )}
          </div>

          <div className={styles.relatedArticle}>
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
              <span className="secondaryBgColor whiteTextColor">#bali</span>
              <span className="secondaryBgColor whiteTextColor">
                #borobudur
              </span>
              <span className="secondaryBgColor whiteTextColor">
                #reforestation
              </span>
            </div>

            {detailCategory[0].totalArticles > 0 ? (
              <div>
                <h2
                  className={`${styles.topAuthorCategoryTitle} primaryTextColor fontGeorgia`}
                >
                  Top Authors in This Category
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
            ) : null}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
