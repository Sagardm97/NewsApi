import React, { Component } from "react";
import New from "./New";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Donie O'Sullivan, Marshall Cohen",
      title:
        "Purported names, photos and addresses of Fulton County grand jurors circulate on far-right internet - CNN",
      description:
        "Names, photographs, social media profiles and even the home addresses purportedly belonging to members of the Fulton County grand jury that this week voted to indict former President Donald Trump and 18 co-defendants are circulating on social media – with exp…",
      url: "https://www.cnn.com/2023/08/17/politics/fulton-county-grand-jurors-far-right-internet/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230817065441-02-fulton-county-courthouse-081423.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-17T14:26:00Z",
      content:
        "Names, photographs, social media profiles and even the home addresses purportedly belonging to members of the Fulton County grand jury that this week voted to indict former President Donald Trump and… [+3709 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Ellen Francis, Ian Livingston",
      title:
        "Yellowknife evacuation ordered as Canada wildfires near city - The Washington Post",
      description:
        "Smoke pouring out of the wildfires has also led to low visibility and unhealthy air quality across the region, with some plumes blowing hundreds of miles downwind to decrease air quality as far south as along the northern Rockies, including Idaho and Montana.",
      url: "https://www.washingtonpost.com/world/2023/08/17/canada-wildfires-yellowknife-evacuation/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZHAXBMVBYYDDVWTHFFL5ZPKRZ4.JPG&w=1440",
      publishedAt: "2023-08-17T14:10:06Z",
      content:
        "Comment on this story\r\nComment\r\nAuthorities in Canada are racing to evacuate nearly 20,000 residents from the territorial capital, Yellowknife, in the Northwest Territories by Friday as a raging wild… [+3877 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Eric Woodyard",
      title:
        "Suspended Lions WR Jameson Williams likely out rest of preseason - ESPN - ESPN",
      description:
        "Lions second-year receiver Jameson Williams is likely to miss the remainder of the preseason, according to coach Dan Campbell.",
      url: "https://www.espn.com/nfl/story/_/id/38207950/suspended-lions-wr-jameson-williams-likely-rest-preseason",
      urlToImage:
        "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0817%2Fr1211716_1296x729_16%2D9.jpg",
      publishedAt: "2023-08-17T14:00:00Z",
      content:
        'ALLEN PARK, Mich. -- There\'s "a good chance" Detroit Lions second-year receiver Jameson Williams is likely to miss the remainder of the preseason, according to coach Dan Campbell.\r\nWilliams exited We… [+2004 chars]',
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Heather Chan, Irene Nasser",
      title:
        "At least 10 dead in Malaysia after plane crashes onto expressway - CNN",
      description:
        "At least 10 people have died after a charter plane crashed onto an expressway north of Kuala Lumpur on Thursday.",
      url: "https://www.cnn.com/2023/08/17/asia/malaysia-plane-crash-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230817121120-03-malaysia-plane-crash-081723.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-17T13:58:00Z",
      content:
        "At least 10 people have died after a charter plane crashed onto an expressway north of Kuala Lumpur on Thursday.\r\nThe plane, carrying six passengers and two flight crew, departed from Langkawi Intern… [+1327 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Brian Lowry",
      title:
        "In ‘Blue Beetle,’ DC bulks up a TV-style superhero origin story for theaters - CNN",
      description:
        "Spreading its wings two months after “The Flash” ran into a brick wall at the box office, “Blue Beetle” is the latest movie to test the theory that life’s tough for DC heroes not named Superman, Batman or Wonder Woman. The main challenge facing this young Lat…",
      url: "https://www.cnn.com/2023/08/17/entertainment/blue-beetle-review/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230504123111-01-blue-beetle-movie.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-17T13:45:00Z",
      content:
        "Spreading its wings two months after The Flash ran into a brick wall at the box office, Blue Beetle is the latest movie to test the theory that lifes tough for DC heroes not named Superman, Batman or… [+3186 chars]",
    },
    {
      source: {
        id: "ign",
        name: "IGN",
      },
      author: "Taylor Lyles",
      title:
        "Leaked Images of Lenovo's Gaming Handheld Shows Nintendo Switch-Like Design - IGN",
      description:
        "Windows Report has published a new report claiming to have the first images of Lenovo's rumored handheld gaming device the Legion Go.",
      url: "https://www.ign.com/articles/lenovo-legion-go-handheld-gaming-pc-leaked-images",
      urlToImage:
        "https://assets-prd.ignimgs.com/2023/08/17/lenovo-1692279090338.png?width=1280",
      publishedAt: "2023-08-17T13:39:58Z",
      content:
        "In recent weeks, rumors have surfaced that Lenovo may enter the handheld gaming market with its portable gaming PC. Today, Windows Report published a new article claiming to have leaked the first ima… [+1314 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Michelle Fox",
      title:
        "Stocks making the biggest premarket moves: Walmart, Adobe, Cisco, Hawaiian Electric and more - CNBC",
      description:
        "These are the stocks posting the largest moves in the premarket.",
      url: "https://www.cnbc.com/2023/08/17/stocks-making-the-biggest-premarket-moves-.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107261744-1687536970151-gettyimages-1258918244-porzycki-vermonte230619_npGBD.jpeg?v=1692275338&w=1920&h=1080",
      publishedAt: "2023-08-17T12:28:58Z",
      content:
        "Check out the companies making the biggest moves in premarket trading:\r\nWalmart Shares added as much as 1% after the big-box retailer raised its full-year forecast and reported an earnings and revenu… [+2430 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "",
      title:
        "China makes it harder for its Muslim citizens to go to Mecca, or anywhere else - NPR",
      description:
        "Chinese Muslims take roundabout trips for their Hajj pilgrimage, trying to circumvent China's tightened surveillance at every turn — and possible arrest on their return, pilgrims and tour leaders say.",
      url: "https://www.npr.org/2023/08/17/1189860622/china-muslims-mecca-hajj-travel-surveillance",
      urlToImage:
        "https://media.npr.org/assets/img/2023/08/03/npr-08-05-2023-china-makes-it-harder-for-its-muslim-citizens-to-go-to-mecca-or-anywhere-else_wide-0aa8df4136254d31d2da83627a34e36202cb7d17-s1400-c100.jpg",
      publishedAt: "2023-08-17T12:26:25Z",
      content:
        "The circuitous journey by Chinese Muslims reflects the extraordinary means China is undertaking to surveil and stop its citizens from making the Hajj as well as the equally resourceful ways believers… [+11316 chars]",
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Paulo Kawanishi",
      title:
        "Blasphemous 2 review: Metroidvania with a potent world and weak bosses - Polygon",
      description:
        "The Game Kitchen’s sequel combines 2D platforming and exploration with some light Soulslike elements. Its weapons and story are excellent, but its boss fights are lacking.",
      url: "https://www.polygon.com/reviews/23834535/blasphemous-2-review-metroidvania-weapons-release-date",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/ZEMolSKA64pVVzUc2l9yMHyEPDs=/0x0:1024x536/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24854272/blasphemous_2_weapons_regions.jpg",
      publishedAt: "2023-08-17T12:18:13Z",
      content:
        "The search for meaning is never-ending and takes more than one form. In Blasphemous 2, from developer The Game Kitchen, people are still trying to cope with reality through the lens of the divine, us… [+5334 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Yahoo Entertainment",
      title:
        "Rachel Leviss breaks silence, shades Bravo in 1st interview since treatment: 'I've been portrayed as the ultimate villain' - Yahoo Entertainment",
      description: null,
      url: "https://www.yahoo.com/entertainment/rachel-leviss-breaks-silence-shades-bravo-in-1st-interview-since-treatment-ive-been-portrayed-as-the-ultimate-villain-171530477.html",
      urlToImage: null,
      publishedAt: "2023-08-17T12:01:13Z",
      content: null,
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Texas woman accused of threatening to kill judge overseeing Trump election case and a congresswoman - POLITICO",
      description:
        '"If Trump doesn\'t get elected in 2024, we are coming to kill you," prosecutors allege the woman said.',
      url: "https://www.politico.com/news/2023/08/17/trump-election-judge-texas-00111615",
      urlToImage:
        "https://static.politico.com/a2/c9/717f4a5246419a0a48d8e788bb67/https-delivery-gettyimages.com/downloads/1578727099",
      publishedAt: "2023-08-17T11:48:28Z",
      content:
        "The E. Barrett Prettyman U.S. Courthouse in Washington, August 5, 2023. | Mandel Ngan/AFP via Getty Images\r\nBy Associated Press\r\n08/17/2023 07:48 AM EDT\r\nHOUSTON A Texas woman was arrested and has be… [+881 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Wayne Sterling",
      title:
        "Reports: US women’s head coach Vlatko Andonovski has stepped down following World Cup elimination - CNN",
      description:
        "The head coach of the US women’s national soccer team, Vlatko Andonovski, has resigned from his position after the US made an early exit from the Women’s World Cup, unnamed sources tell ESPN and The Athletic.",
      url: "https://www.cnn.com/2023/08/17/football/vlatko-andonovski-uswnt-head-coach-resigns-spt/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230816142703-01-vlatko-adonovski-072723.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-08-17T11:41:00Z",
      content:
        "The head coach of the US womens national soccer team, Vlatko Andonovski, has resigned from his position after the US made an early exit from the Womens World Cup, unnamed sources tell ESPN and The At… [+791 chars]",
    },
    {
      source: {
        id: null,
        name: "BuzzFeed News",
      },
      author: "Ellen Durney",
      title:
        "Britney Shared A Cryptic Instagram Caption After Sam Asghari Filed For Divorce - BuzzFeed News",
      description:
        "Reports say that Sam and Britney’s split is what’s “best” for her.",
      url: "https://www.buzzfeednews.com/article/ellendurney/britney-spears-cryptic-instagram-after-sam-asghari-divorce",
      urlToImage:
        "https://img.buzzfeed.com/buzzfeed-static/static/2023-08/17/11/enhanced/a03dcbe4602b/original-2043-1692270330-2.jpg?crop=1244:651;1,8%26downsize=1250:*",
      publishedAt: "2023-08-17T11:39:56Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "SpaceNews",
      },
      author: "Sandra Erwin",
      title:
        "BAE Systems to acquire Ball Aerospace for $5.5 billion - SpaceNews",
      description: "BAE Systems to acquire Ball Aerospace for $5.5 billion",
      url: "https://spacenews.com/bae-systems-to-acquire-ball-aerospace-for-5-5-billion/",
      urlToImage:
        "https://spacenews.com/wp-content/uploads/2023/08/2022-10-04-at-2.31.32-PM-e1692283296527.jpg",
      publishedAt: "2023-08-17T11:31:01Z",
      content:
        "WASHINGTON BAE Systems, a defense and security conglomerate based in the United Kingdom, announced Aug. 17 it intends to acquire Ball Aerospace for $5.5 billion.\r\nBall Aerospace, based in Westminster… [+2178 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Indian moon lander module splits from propulsion section in key step - Al Jazeera English",
      description:
        "The lander module of the Chandrayaan-3 has successfully separated ahead of a planned moon landing slated for August 23.",
      url: "https://www.aljazeera.com/news/2023/8/17/indian-lunar-lander-splits-from-propulsion-module-in-key-step",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/08/33P27LA-highres-1692267654.jpg?resize=1920%2C1440",
      publishedAt: "2023-08-17T11:07:40Z",
      content:
        "Indias latest space mission has completed a key step in the countrys second attempt at a lunar landing, with its moon module separating from its propulsion section.\r\nThe Indian Space Research Organis… [+2482 chars]",
    },
    {
      source: {
        id: "nbc-news",
        name: "NBC News",
      },
      author: "Cheng Cheng",
      title:
        "Chinese fans bought 10,000 bottles of NBA star James Harden’s wine in seconds - NBC News",
      description:
        "NBA star James Harden was stunned when fans in China bought 10,000 bottles of wine from his signature brand in seconds during his appearance on a livestream.",
      url: "https://www.nbcnews.com/news/world/china-james-harden-nba-wine-livestream-daryl-morey-rcna100349",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-08/230817-james-haredn-mb-0957-b9f985.jpg",
      publishedAt: "2023-08-17T10:39:12Z",
      content:
        "HONG KONG NBA star James Harden was left stunned by fans in China after they bought 10,000 bottles of wine from his signature brand in seconds during his appearance on a livestream. \r\nHarden, a guard… [+2953 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Hamza Shaban",
      title:
        "Target and Bud Light become cautionary tales after political boycotts - Yahoo Finance",
      description:
        "Marketing executives are looking at Target and Bud Light as examples of how not to react to fierce customer pushback.",
      url: "https://finance.yahoo.com/news/target-and-bud-light-become-cautionary-tales-after-political-boycotts-093020210.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/NOtN5Ml255HtIJrYigwjlw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NTI-/https://s.yimg.com/os/creatr-uploaded-images/2023-08/9e633e30-3c6d-11ee-bdfe-a8d24dace938",
      publishedAt: "2023-08-17T09:30:20Z",
      content:
        "Target (TGT) on Wednesday became the latest brand to report dwindling sales after a conservative outcry over its support of the LGBTQ community.\r\nTarget in June drew outrage for its Pride Month merch… [+5447 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: null,
      title:
        "Hawaii governor vows to block land grabs as fire-ravaged Maui rebuilds - NPR",
      description:
        "Hawaii Gov. Josh Green said he had instructed the state attorney general to work toward a moratorium on land transactions in Lahaina. He acknowledged the move will likely face legal challenges.",
      url: "https://www.npr.org/2023/08/17/1194351587/hawaii-governor-vows-to-block-land-grabs-as-fire-ravaged-maui-rebuilds",
      urlToImage:
        "https://media.npr.org/assets/img/2023/08/17/ap23229112022860_wide-29fe057f3008d32a538c3938159861e286346b8c-s1400-c100.jpg",
      publishedAt: "2023-08-17T09:13:32Z",
      content:
        "Carelle Calvan in blue T-shirt, hugs Nora Bulosan as they gather near a checkpoint in hopes to get access to their home destroyed in recent wildfires in Lahaina, Hawaii, Wednesday, Aug. 16, 2023.\r\nJa… [+5246 chars]",
    },
  ];

  constructor() {
    super();
    console.log("im a don");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NEWS MONKEY-TOP HEADLINES</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={Element.url}>
                  <New
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl="TODO"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
