import Image from "next/image";
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/Categories.module.css";
import illustration3 from "../../../assets/MessyDoodle.png";
import { categories } from "../../../helpers/arrayCategories";
import { useState } from "react/cjs/react.development";
import CardCategory from "../../../components/CardCategory";
import Button from "../../../components/base/Button";
import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();
  const [desc, setDesc] = useState({});
  const handleClick = (data) => {
    setDesc(data);
  };

  return (
    <>
      <Header
        title="Choose Your Favourite Category | The Mangl&eacute;s"
        description="Start writing your own articles or just simply refresh your mind with our collection."
        keywords="The Mangles, News Web Apps, news, articles, write"
      />

      <Navbar heroColor="tertiary" activePage="category" />

      <main className="main">
        <section className="heroSection tertiaryBgColor">
          <div className="heroTitleWrapper">
            <h1 className="title fontGeorgia primaryTextColor">
              Choose Article by Category
            </h1>
            <p className="subtitle primaryTextColor">
              Category helps you to read another article that you <br /> haven’t
              thought before. You able to read all articles for free. <br />{" "}
              Enjoy the reading!
            </p>
          </div>
          <Image
            className="illustration"
            src={illustration3}
            alt="Illustration1"
            width={540}
            height={500}
          />
        </section>

        <section className={styles.categoriesSection}>
          <div className={styles.List}>
            {categories.map((category, index) => {
              return (
                <CardCategory
                  action={() => handleClick(category)}
                  key={index}
                  imageCategory={category.imageCategory}
                  nameCategory={category.nameCategory}
                />
              );
            })}
          </div>
          <div className={styles.Description}>
            <div className={styles.categoryDetails}>
              <Image
                src={desc.imageCategory ? desc.imageCategory : illustration3}
                alt="category"
                width={280}
                height={280}
              />
              <h1 className="primaryTextColor">{desc.nameCategory}</h1>

              <div className={`${styles.descriptionWrapper} primaryTextColor`}>
                <p className={styles.descriptionTitle}>Description:</p>
                <p className={styles.descriptionContent}>
                  {desc.descriptionCategory}{" "}
                </p>
              </div>

              <div className={`${styles.descriptionWrapper} primaryTextColor`}>
                <p>
                  <span>Total Articles:</span>{" "}
                  {desc.totalArticles > 0
                    ? `${desc.totalArticles} Articles`
                    : "0 Article"}
                </p>
                <p>
                  <span>Date Created:</span> {desc.createdAt}
                </p>
              </div>

              <Button
                onClick={() =>
                  router.push(`/apps/categories/${desc.codeCategory}`)
                }
                className={`${styles.btnExploreCategory} secondaryBgColor whiteTextColor`}
              >
                Explore Category
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
