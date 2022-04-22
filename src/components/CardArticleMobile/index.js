import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import styles from "./CardArticleMobile.module.css";

export default function CardArticleMobile({
  imageArticle,
  titleArticle,
  authorPicture,
  author,
  createdAt,
  action,
  action2,
  ...props
}) {
  return (
    <>
      <div className={`${styles.articleMobileCard} flex flex-row mb-4 `}>
        <div onClick={action} className={`${styles.articleMobileImageWrapper}`}>
          <Image
            className="object-cover"
            src={imageArticle}
            alt="coverArticleMobile"
            width={112}
            height={92}
          />
        </div>

        <div className={`${styles.articleMobileInfoWrapper} ml-2 w-4/5`}>
          <div onClick={action} className={`${styles.articleMobileText} mb-1 `}>
            <h2
              className={`${styles.articleMobileTitle} primaryTextColor m-0 text-sm capitalize `}
            >
              {titleArticle}
            </h2>
          </div>

          <div
            onClick={action2}
            className={`${styles.articleMobileAuthor} flex flex-row align-middle `}
          >
            <Image
              src={authorPicture}
              alt="author"
              width={22}
              height={22}
              className="rounded-full object-cover hover:cursor-pointer"
            />
            <p className=" m-0 mt-1 ml-2 text-xs font-bold">{author}</p>
          </div>

          <div
            className={`${styles.articleActionMobile} flex flex-row justify-between align-middle mt-1`}
          >
            <p
              className={`${styles.articleDateMobile} tertiaryTextColor m-0 text-xs`}
            >
              {createdAt}
            </p>
            <div className={styles.iconWrapper}>
              <AiOutlineLike
                className={`${styles.likeIconMobile} tertiaryTextColor text-lg `}
              />
              <BsBookmark
                className={`${styles.bookmarkIconMobile} tertiaryTextColor ml-3 text-lg `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
