import authorPic from "../assets/profile.jpg";
import author2 from "../assets/profile2.jpg";
import author3 from "../assets/profile3.jpg";
import articlePic1 from "../assets/articleCats.jpg";
import articlePic2 from "../assets/articleFoods.jpg";
import articlePic3 from "../assets/articlePlants.jpg";
import articlePic4 from "../assets/articleFoods2.jpg";
import articlePic5 from "../assets/articleMovies.jpg";
import articlePic6 from "../assets/articlePets.jpg";

// Photo by <a href="https://unsplash.com/@simonfromengland?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Simon Wilkes</a> on <a href="https://unsplash.com/s/photos/tree?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@bawahreserve?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bawah Reserve</a> on <a href="https://unsplash.com/s/photos/rendang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@mpayne66?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Payne</a> on <a href="https://unsplash.com/s/photos/red-panda?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// Photo by <a href="https://unsplash.com/@chrishcush?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christian Bowen</a> on <a href="https://unsplash.com/s/photos/husky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

export const articles = [
  {
    id: 1,
    titleArticle: "5 signs your cat hates you",
    descriptionArticle:
      "If your cat often looks at you with a 'stank face', they probably hate you. Find out more!",
    imageArticle: articlePic1,
    author: "Ferdi Ferdiana",
    authorUsername: "ferdianfh",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "As anyone who has spent time with cats knows, our feline companions are mysterious—much more so than those other furry family members. Here John Bradshaw, author of Cat Sense (Basic Books, 2013), fields a selection of questions submitted by Scientific American editors and Twitter followers about the cat’s many quirks. Bradshaw is a visiting fellow at the University of Bristol School of Veterinary Sciences in England, where he studies the behavior and welfare of cats and dogs, as well as their interactions with people.",
      paragraf2:
        "Cats are far more similar to their wild ancestors than dogs are to wolves, so dogs are in that sense the more domesticated of the two species. As they adapted to living alongside humans, cats became more sociable with one another and much more accepting of people, but there is no evidence that they have changed much more than that over the past few thousand years.",
      paragraf3:
        "Cats purr because they have something to say, which roughly translated is “please keep still and pay attention to me.” Kittens purr to persuade their mothers to keep on nursing them, and pet cats purr when they want to be stroked. The vibrations emanating from the purr certainly have a calming effect on people. Yet sick cats will also purr as a cry for help. So purring doesn’t always mean “I’m happy.” Some researchers have claimed that the vibrations from purring might help heal bone damage in an injured cat."
    },
    category: "pets",
    createdAt: "Mar 17, 2022"
  },
  {
    id: 2,
    titleArticle: "Seblak: a breakthrough street food in this century",
    descriptionArticle:
      "Seblak has been around as long as you can remember. What's the secret?",
    imageArticle: articlePic2,
    author: "Ferdi Ferdiana",
    authorUsername: "ferdianfh",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "Seblak is an Sundanese savoury and spicy dish, originating from West Java, Indonesia. Made of wet krupuk (traditional Indonesian crackers) cooked with protein sources (egg, chicken, seafood or beef) in spicy sauce. Seblak is a specialty of Bandung city, West Java, Indonesia. Seblak is common at restaurants, warungs, and gerobak (cart) street vendors. It is one of the most popular street foods in Indonesia, especially in Bandung and Jakarta.",
      paragraf2:
        "The word seblak may have originated Sundanese that is Nyeblak or surprising, because it tastes spicy and rich in spices. Seblak also refers to ingredients of Sundanese cuisine, made from cikur or Galangal (Kaempferia galanga).",
      paragraf3:
        "In earlier days, the term seblak refer to hot and spicy spice mixture made from ground kencur (Kaempferia galanga) and chili pepper. It is also refer to a traditional hot and spicy crispy krupuk crackers originate from rural southern Cianjur area before the independence era, this food was an alternative food, which is now called as seblak kering (dry seblak) or krupuk seblak. However, today it is mostly refer to its wet and savoury version; the seblak basah"
    },
    category: "foods",
    createdAt: "Mar 17, 2022"
  },
  {
    id: 3,
    titleArticle: "Reforestation is the key to save our earth",
    descriptionArticle:
      "Plant 1000 trees everyday will help rain forest produce more oxygen in 50 years.",
    imageArticle: articlePic3,
    author: "Ferdinand Sibelaga",
    authorUsername: "ferdisibelaga__",
    authorPicture: author2,
    content: {
      paragraf1:
        "They help keep our climate stable, absorbing carbon dioxide and releasing oxygen, and they regulate our water supply and improves its quality. They also provide a home to more than half of all species found on land – a rich variety of life that keeps so many natural systems running.",
      paragraf2:
        "Over 1 billion people live in and around forests, depending on them for fuel, food, medicines and building materials. And all of us use wood in our daily lives: in fact, global demand for timber products is expected to more than triple over the next three decades.",
      paragraf3:
        "But human impacts have already led to the loss of around 40% of the world’s forests. And today, an area the size of a football pitch is still being destroyed every second. Protecting and restoring forests has never been more urgent."
    },
    category: "plants",
    createdAt: "Mar 20, 2022"
  },
  {
    id: 4,
    titleArticle: "Rendang: no 1 the best foods by CNN",
    descriptionArticle:
      "Rendang has been declared as the most delicious dish in the world!",
    imageArticle: articlePic4,
    author: "Ferdi Ferdiana",
    authorUsername: "ferdianfh",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "Rendang is a Minang dish originating from the Minangkabau region in West Sumatra, Indonesia. It has spread across Indonesian cuisine to the cuisines of neighbouring Southeast Asian countries such as Malaysia, Singapore, Brunei and the Philippines. Rendang is often described as a rich dish of meat — most commonly beef (rendang daging) — that has been slow cooked and braised in a coconut milk seasoned with a herb and spice mixture, until the liquids evaporate and the meat turns dark brown and tender, becoming caramelized and infused with rich flavours.",
      paragraf2:
        "As the signature dish of Minangkabau culture, rendang is traditionally served at ceremonial occasions to honour guests during festive events; such as wedding feasts and Lebaran or Hari Raya (Indonesian popular words for both Eid al-Fitr and Eid al-Adha). Rendang is also traditionally served among the Malay community in Indonesia, Malaysia, Singapore and Brunei, as well as the Maranao in the Philippines.",
      paragraf3:
        "Rendang is officially recognised as one of Indonesia's national dishes. Six types of rendang preparations have also been designated as intangible cultural heritage by the Indonesian Ministry of Education and Culture."
    },
    category: "foods",
    createdAt: "Mar 18, 2022"
  },
  {
    id: 5,
    titleArticle: "Turning red officially release on disney+",
    descriptionArticle:
      "A story about a 13 years old girl who's turning into- oops! Spoiler Alert!",
    imageArticle: articlePic5,
    author: "Ferdhie Van Thesan",
    authorUsername: "vanthesan",
    authorPicture: author3,
    content: {
      paragraf1:
        "A quirky Asian teenager transforms into a giant red panda whenever she gets excited … even the premise gives me pause. Which makes the task of reviewing the new Disney/Pixar film “Turning Red” (on Disney+ March 11) especially tricky. Because that’s the idea behind this sometimes heartwarming but wayward coming-of-age movie, which toes the line between truthfully representing a Chinese family, flaws and all, and indulging stereotypes.",
      paragraf2:
        "Meilin Lee (voiced by Rosalie Chiang) is a typical 13-year-old girl: She dances, has crushes on boys and has a cohort of weird but loyal besties who share her obsession with the glossy-lipped members of the boy band 4*Town. She’s also Chinese Canadian, living in Toronto in 2002, where her family maintains a temple. There she helps her loving but overbearing mother, Ming (Sandra Oh), and tries to be the perfect daughter — even when that means burying her own thoughts and desires in the process. This becomes a lot more difficult when she goes through her changes — not of the period variety, but the panda kind.",
      paragraf3:
        "The character writing and design are where “Turning Red,” directed by Domee Shi, most succeeds. Mei has the relatable swagger of the middle school cool nerd — she’s creative and confident, and also has a perfect report card. The tomboy skater girl Miriam, the deadpan Priya and the hilariously fiery Abby form a funky trifecta of gal pals who are Mei’s emotional safety net. And Ming strikes an impressive balance between dictatorial and doting, dismissing Mei’s friends and interests but also stalking her at school to ply her with steamed buns."
    },
    category: "movies",
    createdAt: "Mar 19, 2022"
  },
  {
    id: 6,
    titleArticle: "Husky can talk, they are evolving!",
    descriptionArticle:
      "Huskies are usually so talkative. That is a sign of evolution.",
    imageArticle: articlePic6,
    author: "Ferdi Ferdiana",
    authorUsername: "ferdianfh",
    authorPicture: authorPic,
    content: {
      paragraf1:
        "With its intense eyes, soulful howl, and seemingly endless endurance, the Siberian Husky has earned its reputation as a tough working breed. But there’s more than meets the eye, because the Siberian has a softer side— a sweet disposition and affectionate nature. It’s an uncommon combination, but this breed is anything but average.",
      paragraf2:
        "The Siberian Husky was bred as a sled dog and developed by the Chukchi, an indigenous people of northeastern Asia who reside just north of the Bering Strait, where Russia and Alaska almost meet. In the early 1900s, the Chukchi dogs were brought to Alaska by a Russian fur trader named William Goosak, who used them to compete in sled races, including the All-Alaska Sweepstakes. Alaskan sled dog enthusiasts were so impressed with the Chukchi dogs they continued to develop the line, resulting in the breed we know today as the Siberian Husky.",
      paragraf3:
        "The Siberian Huskies bred from the Chukchi canines worked as sled dogs in the far north and remained relatively unknown to the general public until the winter of 1925, when a diphtheria epidemic broke out in the remote town of Nome, Alaska. A serum was available, but with extreme ice-bound conditions complicating travel, getting it there seemed impossible. Enter the Siberian Huskies, who travelled by relay teams and brought the life-saving medicine to Nome. For their role in what was dubbed the Great Race of Mercy, Siberian Huskies became national heroes almost overnight."
    },
    category: "pets",
    createdAt: "Mar 19, 2022"
  }
];
