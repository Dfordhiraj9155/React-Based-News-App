import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner1 from './Spinner1';
// import { ReactPropTypes } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Caradisiac.com"
            },
            "author": "Pierre-Olivier Marie",
            "title": "La Peugeot 208, championne d'Europe 2022 (et autres surprises)",
            "description": "La citadine française détrône la Volkswagen Golf. Si certains voitures françaises plaisent beaucoup, d'autres ont connu de fortes déconvenues, dans un contexte il est vrai délicat.",
            "url": "https://www.caradisiac.com/la-peugeot-208-championne-d-europe-2022-et-autres-surprises-200300.htm",
            "urlToImage": "https://images.caradisiac.com/images/0/3/0/0/200300/S1-la-peugeot-208-championne-d-europe-2022-et-autres-surprises-742930.jpg",
            "publishedAt": "2023-01-19T07:00:00Z",
            "content": "On le pressentait au vu des résultats enregistrés au fil des mois, et cest maintenant confirmé : la Peugeot 208, leader des ventes en France, sest imposée comme le modèle favori des automobilistes eu… [+2044 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "nbcnews.com",
            "title": "Twitter auctions off blue bird memorabilia and pricey furniture",
            "description": "A neon Twitter bird for $35,000, anyone? How about a used industrial kitchen mixer for a good price? Going once... When Elon Musk wants to make a point, it can be pretty blunt. On the day he took over Twitter last fall, he walked in to the San Francisco compa…",
            "url": "https://biztoc.com/x/27fea1af50acde57",
            "urlToImage": "https://c.biztoc.com/p/27fea1af50acde57/og.webp",
            "publishedAt": "2023-01-19T06:56:05Z",
            "content": "A neon Twitter bird for $35,000, anyone? How about a used industrial kitchen mixer for a good price? Going once...\r\nWhen Elon Musk wants to make a point, it can be pretty blunt. On the day he took ov… [+268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "dpa",
            "title": "Anwalt von Elon Musk bestreitet Betrugsabsicht",
            "description": "Durch einen irreführenden Tweet aus dem Jahr 2018 hätten seine Mandanten Millionen verloren, argumentiert ein Anwalt der Kläger vor Gericht. Der Anwalt von Elon Musk bestreitet eine Betrugsabsicht.",
            "url": "https://www.faz.net/aktuell/wirtschaft/digitec/prozess-in-san-francisco-musk-anwalt-bestreitet-betrugsabsicht-18612912.html",
            "urlToImage": "https://media0.faz.net/ppmedia/aktuell/feuilleton/1069517190/1.8612936/facebook_teaser/elon-musk.jpg",
            "publishedAt": "2023-01-19T06:46:02Z",
            "content": "Im Prozess zu einer Anlegerklage gegen Tesla-Chef Elon Musk haben Anwälte der beiden Seiten am Mittwoch die ersten Attacken ausgetauscht. In dem Verfahren geht es um Musks Tweets von August 2018 mit … [+2674 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "N-tv.de"
            },
            "author": "n-tv NACHRICHTEN",
            "title": "\"Unglückliche Wortwahl\": Musk-Anwalt bestreitet vor Gericht Betrugsabsicht",
            "description": "Nach Tweets von Elon Musk mit der Ankündigung, Tesla von der Börse zu nehmen, trennt sich ein Anleger im Sommer 2018 von Aktienoptionen. Dann kommt heraus, dass Angaben in den Tweets falsch sind. Anleger werfen Musk Betrug vor, sein Anwalt sieht nur eine ungl…",
            "url": "https://www.n-tv.de/wirtschaft/Musk-Anwalt-bestreitet-vor-Gericht-Betrugsabsicht-article23854431.html",
            "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop23840012/9061326919-cImg_16_9-w1200/017097b6c15dfd5e4cefb6c4c9e3aba2.jpg",
            "publishedAt": "2023-01-19T06:34:49Z",
            "content": "Nach Tweets von Elon Musk mit der Ankündigung, Tesla von der Börse zu nehmen, trennt sich ein Anleger im Sommer 2018 von Aktienoptionen. Dann kommt heraus, dass Angaben in den Tweets falsch sind. Anl… [+2976 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "Amazon overtakes Apple as world’s most valuable brand",
            "description": "Amazon has become the world’s most valuable brand, despite losing $51 billion in value, the latest ranking has shown Read Full Article at RT.com",
            "url": "https://www.rt.com/business/570069-amazon-apple-brand-value-ranking/",
            "urlToImage": "https://mf.b37mrtl.ru/files/2023.01/article/63c7ddd12030273d1224ee7d.jpg",
            "publishedAt": "2023-01-19T06:32:35Z",
            "content": "Amazon has regained its position as the world's most valuable brand despite a 15% decrease in value this year, according to the annual Brand Finance Global 500 ranking, which features 48 tech compani… [+1718 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "Musk auctions office items like Twitter logo, coffee machines to pay rent; bird logo statue fetches $100,000",
            "description": "Hundreds of office items have been sold off by Twitter in a 24-hour online auction.",
            "url": "https://economictimes.indiatimes.com/magazines/panache/musk-auctions-office-items-like-twitter-logo-coffee-machines-to-pay-rent-bird-logo-statue-fetches-100000/articleshow/97119510.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-97119670,width-1070,height-580,imgsize-15840,overlay-etpanache/photo.jpg",
            "publishedAt": "2023-01-19T06:02:11Z",
            "content": "Would you like to own the worlds most famous blue bird? The price is just $100,000.Hundreds of office items have been sold off by Twitter in a 24-hour online auction. The auction organised by Heritag… [+1800 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nyteknik.se"
            },
            "author": null,
            "title": "Kinesiska utmanaren lanserar ”erövrar-modell”",
            "description": "En kinesisk utmanare som lockar med hög prestanda och 50 mils räckvidd. Seres 5 beskrivs som en sportig premium suv med komfort, räckvidd och ”smart körning” – i vår släpps den i Sverige.",
            "url": "https://www.nyteknik.se/elbilar/kinesiska-utmanaren-lanserar-erovrar-modell-7043269",
            "urlToImage": "https://medier.publicwebsites.se/media/Nyteknik/n098i5-Pine-Green.jpeg/binary/original/Pine%20Green.jpeg",
            "publishedAt": "2023-01-19T06:00:00Z",
            "content": "En kinesisk utmanare som lockar med hög prestanda och 50 mils räckvidd. Seres 5 beskrivs som en sportig premium suv med komfort, räckvidd och smart körning i vår släpps den i Sverige.I fjol öppnades … [+2094 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Les Numériques"
            },
            "author": "David Lefevre",
            "title": "Test BMW i4 eDrive40 : une berline électrique pour le plaisir de conduire",
            "description": "La BMW iDrive40 mérite-t-elle son statut de challenger de la Tesla Model 3 ? Pour tester la technologie eDrive de 5e génération du constructeur, nous avons parcouru près de 1500 km à son volant.\nUn essai placé sous le signe du plaisir de conduire en tout-élec…",
            "url": "https://www.lesnumeriques.com/voiture/bmw-i4-p62631/test.html",
            "urlToImage": "https://cdn.lesnumeriques.com/optim/test/20/202407/a1d0d663-bmw-i4-edrive40-une-berline-electrique-dediee-au-plaisir-de-conduire__1200_630__0-155-1920-1163.jpeg",
            "publishedAt": "2023-01-19T06:00:00Z",
            "content": "La BMW iDrive40 mérite-t-elle son statut de challenger de la Tesla Model 3 ? Pour tester la technologie eDrive de 5e génération du constructeur, nous avons parcouru près de 1500 km à son volant.Un es… [+14360 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Barron's"
            },
            "author": "Karen Hube",
            "title": "How to Capture Electric-Vehicle Tax Credits",
            "description": "The window to snag a $7,500 credit may be closing fast, though leasing may be a loophole in the new tax rules. How to navigate the obstacles.",
            "url": "https://www.barrons.com/articles/the-window-to-capture-a-7-500-electric-vehicle-tax-credit-may-be-closing-how-to-snag-it-51674108003",
            "urlToImage": "https://images.barrons.com/im-705530/social",
            "publishedAt": "2023-01-19T06:00:00Z",
            "content": "Americans are flocking to electric vehicles, pushing sales up 127% over the past two years. To sweeten the deal, the federal government is offering a tax credit of up to $7,500 for EVs and other clea… [+5609 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "apnews.com",
            "title": "Elon Musk depicted as liar, visionary in Tesla tweet trial",
            "description": "A Tesla car is parked in a lot across the street from a federal courthouse in San Francisco, Wednesday, Jan. 18, 2023. Elon Musk was depicted Wednesday as either a liar who callously jeopardized the savings of \"regular people\" or a well-intentioned visionary …",
            "url": "https://biztoc.com/x/a359cf0678697a63",
            "urlToImage": "https://c.biztoc.com/p/a359cf0678697a63/og.webp",
            "publishedAt": "2023-01-19T05:58:10Z",
            "content": "A Tesla car is parked in a lot across the street from a federal courthouse in San Francisco, Wednesday, Jan. 18, 2023. Elon Musk was depicted Wednesday as either a liar who callously jeopardized the … [+314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "watcher.guru",
            "title": "Majority of Americans Invest in Cryptocurrencies Without Research: ByBit",
            "description": "A majority of Americans invested in cryptocurrency assets without doing any research on the coins that they invested in, according to data published by Bybit. The findings reveal that about 64% of Americans spent less than two hours or didn’t do any research …",
            "url": "https://biztoc.com/x/d817be02ede6cc53",
            "urlToImage": "https://c.biztoc.com/p/d817be02ede6cc53/og.webp",
            "publishedAt": "2023-01-19T05:50:07Z",
            "content": "A majority of Americans invested in cryptocurrency assets without doing any research on the coins that they invested in, according to data published by Bybit. The findings reveal that about 64% of Am… [+304 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Michael Liedtke / AP",
            "title": "Elon Musk Depicted as Liar, Visionary as Tesla Tweet Trial Begins",
            "description": "The case is focused on two August 2018 tweets that Musk posted on Twitter, which indicated that he had lined up the financing to take Tesla private at a time when the automaker's stock was slumping amid production problems.",
            "url": "https://time.com/6248329/elon-musk-twitter-tesla-trial/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/01/tesla-twitter-trial.jpeg?quality=85&crop=0px%2C725px%2C5048px%2C2642px&resize=1200%2C628&strip",
            "publishedAt": "2023-01-19T05:48:17Z",
            "content": "SAN FRANCISCO — Elon Musk was depicted Wednesday as either a liar who callously jeopardized the savings of “regular people” or a well-intentioned visionary as attorneys delivered opening statements a… [+5872 chars]"
        },
        {
            "source": {
                "id": "handelsblatt",
                "name": "Handelsblatt"
            },
            "author": "Handelsblatt",
            "title": "Tesla-Chef: Musk-Anwalt bestreitet Betrugsabsicht in Prozess zu Anlegerklage",
            "description": "Elon Musk wird vorgeworfen, den Tesla-Aktienkurs mit irreführenden Tweets manipuliert zu haben. Sein Anwalt sieht allerdings nur eine unglückliche Wortwahl.",
            "url": "https://www.handelsblatt.com/unternehmen/industrie/tesla-chef-musk-anwalt-bestreitet-betrugsabsicht-in-prozess-zu-anlegerklage/28932334.html",
            "urlToImage": "https://www.handelsblatt.com/images/elon-musk/28932338/2-format2003.jpg",
            "publishedAt": "2023-01-19T05:43:00Z",
            "content": "Elon MuskIn dem Verfahren wurde bereits festgestellt, dass Musks Angaben in den Tweets nicht der Wahrheit entsprochen hätten.\r\n(Foto: Reuters)\r\nSan Francisco Im Prozess zu einer Anlegerklage gegen Te… [+1025 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Diepresse.com"
            },
            "author": "Die Presse",
            "title": "Aderlass in der Tech-Branche: Tausende Stellenstreichungen bei Amazon und Microsoft",
            "description": "Jähes Ende des IT-Job-Booms: Inflation und schwache Wirtschaft führen zu einem Kahlschlag bei Microsoft und Amazon. Bei Twitter und Facebook erfolgte dieser Schritt noch im Vorjahr.",
            "url": "https://www.diepresse.com/6240165/aderlass-in-der-tech-branche-tausende-stellenstreichungen-bei-amazon-und-microsoft",
            "urlToImage": "https://media.diepresse.com/social_diepresse_nachrichten/images/uploads_1200/7/a/5/6240165/036F70F5-FE9C-4BF5-ACAE-610AA916748C_v0_l.jpg",
            "publishedAt": "2023-01-19T05:42:00Z",
            "content": "Jähes Ende des IT-Job-Booms: Inflation und schwache Wirtschaft führen zu einem Kahlschlag bei Microsoft und Amazon. Bei Twitter und Facebook erfolgte dieser Schritt noch im Vorjahr.\r\nDie Kündigungswe… [+3864 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Computerworld.dk"
            },
            "author": "Ditte Vinterberg Weng",
            "title": "Morgen-briefing: Danske forskere får 68 millioner til tuberkulosevaccine fra Gates-fond / Netcompany skaffer flere stærke medie-profiler til sit presseteam / Nu har 97 procent af Randers husstand på landet mulighed for fiber-bredbånd",
            "description": "Danske forskere får 68 millioner til tuberkulosevaccine fra Gates-fond. Netcompany skaffer flere stærke medie-profiler til sit presseteam. Nu har 97 procent af Randers husstand på landet mulighed for fiber-bredbånd. TikTok får ny politik for statskontrollered…",
            "url": "https://www.computerworld.dk/art/281339/morgen-briefing-danske-forskere-faar-68-millioner-til-tuberkulosevaccine-fra-gates-fond-netcompany-skaffer-flere-staerke-medie-profiler-til-sit-presseteam-nu-har-97-procent-af-randers-husstand-paa-landet-mulighed-for-fiber-bredbaand",
            "urlToImage": "https://www.computerworld.dk/fil/194234?width=600&height=315&focus=1",
            "publishedAt": "2023-01-19T05:38:00Z",
            "content": "Danske forskere får 68 millioner til tuberkulosevaccine fra Gates-fond. Netcompany skaffer flere stærke medie-profiler til sit presseteam. Nu har 97 procent af Randers husstand på landet mulighed for… [+6771 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FX Empire"
            },
            "author": "Reuters",
            "title": "Vietnam EV maker VinFast plans promotions in response to Tesla price cuts",
            "description": "HANOI (Reuters) -   Vietnam&#039;s electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after Tesla announced aggressive discounting to spur demand.",
            "url": "https://www.fxempire.com/news/article/vietnam-ev-maker-vinfast-plans-promotions-in-response-to-tesla-price-cuts-1259176",
            "urlToImage": "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2023/01/tagreuters.com2023newsml_LYNXMPEJ0I04A2.jpg",
            "publishedAt": "2023-01-19T05:37:06Z",
            "content": "Tesla is offering its basic Model Y at $52,990 in the U.S. market, a reduction from $65,990.\r\nAs a new brand entering the market, when other brands reduce their prices we have to come up with promoti… [+723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HuffPost"
            },
            "author": "AP",
            "title": "Twitter Rids Itself Of Bird Statue, Espresso Machine In Auction Following Cuts",
            "description": "The auction follows Twitter slashing its workforce as well as the company falling behind on rent and contract obligations.",
            "url": "https://www.huffpost.com/entry/elon-musk-twitter-auction_n_63c8d105e4b01a43638479b6",
            "urlToImage": "https://img.huffingtonpost.com/asset/63c8d1072700003400a02d14.jpeg?cache=T1TbrLivtd&ops=1200_630",
            "publishedAt": "2023-01-19T05:34:19Z",
            "content": "A neon Twitter bird for $35,000, anyone? How about a used industrial kitchen mixer for a good price? Going once ....\r\nWhen Elon Musk wants to make a point, it can be pretty blunt. On the day he took … [+2156 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Giga"
            },
            "author": "Felix Gräber",
            "title": "Tesla Model Y günstiger: Was steckt hinter den Preissenkungen?",
            "description": "Tesla hat für seine E-Autos in vielen Ländern die Preise gesenkt, auch Deutschland gehört dazu. Für Kunden, die erst jetzt zuschlagen wollen, werden die amerikanischen Stromer so schon fast zum Schnäppchen. Aber wie kann sich Tesla die Spendierlaune in der Kr…",
            "url": "https://www.giga.de/news/tesla-model-y-guenstiger-was-steckt-hinter-den-preissenkungen-xyz/",
            "urlToImage": "https://crops.giga.de/5c/a4/89/8d4442daf1fb28f569a62198f3_YyA1OTIyeDMwOTQrNDMrNjQyAnJlIDEyMDAgNjI3AzU0ODRkMTI1YTFm.jpg",
            "publishedAt": "2023-01-19T05:31:13Z",
            "content": "Tesla hat für seine E-Autos in vielen Ländern die Preise gesenkt, auch Deutschland gehört dazu. Für Kunden, die erst jetzt zuschlagen wollen, werden die amerikanischen Stromer so schon fast zum Schnä… [+2704 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle (www.dw.com)",
            "title": "Musk subasta el mobiliario de Twitter como parte de sus medidas de ahorro",
            "description": "El lote incluyó 631 objetos entre escritorios, cafeteras, un florero de dos metros y hasta una estatua del canario azul vendida en 100.000 dólares. Una estatua del pájaro azul de Twitter fue vendida por 100.000 dólares el miércoles durante una subasta organiz…",
            "url": "https://www.dw.com/es/musk-subasta-el-mobiliario-de-twitter-como-parte-de-sus-medidas-de-ahorro/a-64445195",
            "urlToImage": "https://static.dw.com/image/63774533_6.jpg",
            "publishedAt": "2023-01-19T05:31:00Z",
            "content": "Una estatua del pájaro azul de Twitter fue vendida por 100.000 dólares el miércoles (18.01.2023) durante una subasta organizada por la red social de Elon Musk, quien multiplica las medidas de ahorro … [+1147 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Vietnam EV maker VinFast plans promotions in response to Tesla price cuts",
            "description": "Vietnam EV maker VinFast plans promotions in response to Tesla price cuts",
            "url": "https://www.investing.com/news/stock-market-news/vietnam-ev-maker-vinfast-plans-promotions-in-response-to-tesla-price-cuts-2983390",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC602TQ_L.jpg",
            "publishedAt": "2023-01-19T05:30:35Z",
            "content": "HANOI (Reuters) - Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after Tesla (NASDAQ:TSLA) announ… [+1165 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tech Times"
            },
            "author": "Jace Dela Cruz",
            "title": "Attorneys Call Elon Musk a 'Liar' Amid Tesla Buyout Tweets Trial",
            "description": "Attorneys in their opening remarks for the Tesla buyout tweets trial portrayed Musk as a \"liar.\"",
            "url": "https://www.techtimes.com/articles/286466/20230119/elon-musk-liar-tesla-tesla-buyout-tweets-trial.htm",
            "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/419384/norway-industry-business-energy-oil-gas.jpg",
            "publishedAt": "2023-01-19T05:30:00Z",
            "content": "As attorneys gave opening remarks at a trial centered on a Tesla buyout that never took place, Elon Musk was portrayed as a \"liar\" who endangered the savings of  \"regular people\", according to a repo… [+2776 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Diepresse.com"
            },
            "author": "Die Presse",
            "title": "Klägeranwalt wirft Elon Musk in Prozess zu Tesla \"Lügen\" vor",
            "description": "Der Verteidiger Elon Musks weist in dem Prozess den Betrugsvorwurf zurück. Anleger wollen nach Tweets zu Teslas Rückzug von der Börse eine Wiedergutmachung.",
            "url": "https://www.diepresse.com/6240162/klaegeranwalt-wirft-elon-musk-in-prozess-zu-tesla-luegen-vor",
            "urlToImage": "https://www.diepresse.com/assets_v2/images/diepresse_nachrichten.png",
            "publishedAt": "2023-01-19T05:24:00Z",
            "content": "Der Verteidiger Elon Musks weist in dem Prozess den Betrugsvorwurf zurück. Anleger wollen nach Tweets zu Teslas Rückzug von der Börse eine Wiedergutmachung.\r\nIm Betrugsprozess gegen Elon Musk wegen i… [+3900 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Reuters",
            "title": "Vietnam EV maker VinFast plans promotions in response to Tesla price cuts",
            "description": "Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness  of its models, a week after...",
            "url": "https://finance.yahoo.com/news/vietnam-ev-maker-vinfast-plans-052334828.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/377d83e66b3a4b2e7f52b8f8d5cee24d",
            "publishedAt": "2023-01-19T05:23:34Z",
            "content": "HANOI (Reuters) - Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after Tesla announced aggressive… [+1199 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Vietnam EV maker VinFast plans promotions in response to Tesla price cuts",
            "description": "HANOI : Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after Tesla announced aggressive discounting to spur demand. VinFast, which started operations in 2019…",
            "url": "https://www.channelnewsasia.com/business/vietnam-ev-maker-vinfast-plans-promotions-response-tesla-price-cuts-3216951",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--CBoSQGCA--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-01-19t052545z_2_lynxmpej0i04a_rtroptp_3_vietnam-vinfast.jpg?itok=V84kgTp9",
            "publishedAt": "2023-01-19T05:23:34Z",
            "content": "HANOI : Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after Tesla announced aggressive discounti… [+1141 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "MarketScreener",
            "title": "Vietnam EV maker VinFast plans promotions in response to Tesla price cuts",
            "description": "(marketscreener.com) Vietnam's electric-vehicle\n maker VinFast said on Thursday it will launch promotions to\nprotect the market competitiveness of its models, a week after\nTesla announced aggressive discounting to spur demand.\n VinFast, which started operatio…",
            "url": "https://www.marketscreener.com/quote/stock/TESLA-INC-6344549/news/Vietnam-EV-maker-VinFast-plans-promotions-in-response-to-Tesla-price-cuts-42763752/?utm_medium=RSS&utm_content=20230119",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdblanc.png",
            "publishedAt": "2023-01-19T05:20:54Z",
            "content": "VinFast, which started operations in 2019, is gearing up to expand in the United States, where it hopes to compete with existing automakers by offering two models, the VF8 and VF9, which have startin… [+975 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "cnbc.com",
            "title": "China tightens media control with tiny stakes in two Alibaba units",
            "description": "BEIJING — State-backed entities have taken tiny stakes in parts of two Alibaba subsidiaries that oversee a video platform and web browser. News of the holdings in the last week raised concerns about Beijing's influence over the U.S.-listed e-commerce giant. H…",
            "url": "https://biztoc.com/x/8d95ee0208acb298",
            "urlToImage": "https://c.biztoc.com/p/8d95ee0208acb298/og.webp",
            "publishedAt": "2023-01-19T05:08:06Z",
            "content": "BEIJING State-backed entities have taken tiny stakes in parts of two Alibaba subsidiaries that oversee a video platform and web browser. News of the holdings in the last week raised concerns about Be… [+304 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizchina.com"
            },
            "author": "Efe Udin",
            "title": "SpaceX employees “pray” Elon Musk continue to focus on Twitter",
            "description": "Elon Musk is in control of a couple of companies all of which are worth millions of dollars. However, since his purchase of Twitter, his ...\nThe post SpaceX employees “pray” Elon Musk continue to focus on Twitter appeared first on Gizchina.com.",
            "url": "https://www.gizchina.com/2023/01/19/spacex-employees-pray-elon-musk-continue-to-focus-on-twitter/",
            "urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2023/01/imagem_2023-01-04_140652560.png",
            "publishedAt": "2023-01-19T05:07:37Z",
            "content": "Elon Musk is in control of a couple of companies all of which are worth millions of dollars. However, since his purchase of Twitter, his attention has been focused on Twitter. This is reflected in hi… [+5472 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Quartz India"
            },
            "author": "Samanth Subramanian",
            "title": "What Neal Stephenson thinks about the new metaverse - Quartz",
            "description": "Also, Binance's CZ showed up via video link and talked about carbs",
            "url": "https://qz.com/emails/davos2023/1850002018/the-prophet-of-the-metaverse-day-4-at-davos",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/19f5298bf3dd889556b5e86911a54c41.jpg",
            "publishedAt": "2023-01-19T05:05:00Z",
            "content": "Greetings, Davos delegates and WEF watchers. \r\nNeal Stephenson, the science fiction writer who coined the term metaverse in 1992, appeared Wednesday on a panel about the metaverse. (WEF programmers: … [+12217 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Vietnam EV maker VinFast plans promotions in response to Tesla ... - Reuters.com",
            "description": "Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after <a href=\"/business/autos-transportation/tesla-cuts-prices-electric-vehicles-us-market-2023-01-13/\">Tesla…",
            "url": "https://www.reuters.com/business/autos-transportation/vietnam-ev-maker-vinfast-plans-promotions-response-tesla-price-cuts-2023-01-19/",
            "urlToImage": "https://www.reuters.com/resizer/jIanFgv0gwYmgjFIo4asoUOERpw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/534YMZY62FNVLIBUTOX3DPAXJ4.jpg",
            "publishedAt": "2023-01-19T05:04:36Z",
            "content": "HANOI, Jan 19 (Reuters) - Vietnam's electric-vehicle (EV) maker VinFast said on Thursday it will launch promotions to protect the market competitiveness of its models, a week after Tesla(TSLA.O) anno… [+1267 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "E24.no"
            },
            "author": null,
            "title": "Boliglånet hans gikk opp 5000 i måneden. I dag får han vite om det blir enda dyrere.",
            "description": "Trebarnsfar og sykepleier Bjørn Stark dropper uteliv for å dekke økte boligrenter, strømpriser og matpriser.",
            "url": "https://e24.no/norsk-oekonomi/i/MoPlnE/bjoerns-boliglaan-gikk-opp-5000-i-maaneden-vi-kloer-oss-i-hodet-over-hvordan-vi-skal-faa-betalt-alt",
            "urlToImage": "https://akamai.vgc.no/v2/images/773491df-c404-4399-bf81-24a2361354bc?fit=crop&format=auto&h=1243&w=1900&s=9bf3874e7d3b27a657f64086b6026acfe29d31f2",
            "publishedAt": "2023-01-19T05:04:06Z",
            "content": "Trebarnsfar og sykepleier Bjørn Stark dropper uteliv for å dekke økte boligrenter, strømpriser og matpriser.\r\nØKTE UTGIFTER: Spesialsykepleier og trebarnsfar Bjørn Stark (48) jobber ved Sør-Tromsøya … [+3302 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Doctinnhanh.net"
            },
            "author": "Mạn Vũ",
            "title": "Elon Musk gỡ chặn tài khoản phóng viên: Đại đa số có tuyệt đối đúng?",
            "description": "Sau khi Elon Musk đóng tài khoản Twitter của một số ký giả vì lý do 'việc tiết lộ toạ độ theo thời gian thực gây nguy hiểm cho ông và gia đình', ông chủ của Tesla đã làm một cuộc điều tra 'dân ý' trên Twitter vào ngày 17/12/2022 rằng: 'Có nên mở khoá những tà…",
            "url": "https://db.doctinnhanh.net/van-hoa/elon-musk-go-chan-tai-khoan-phong-vien-dai-da-so-co-tuyet-doi-dung.html",
            "urlToImage": "https://www.dkn.tv/wp-content/uploads/2023/01/woman-login-twitter-app-mobile-phone-700x366.jpg",
            "publishedAt": "2023-01-19T05:03:00Z",
            "content": "Sau khi Elon Musk óng tài khon Twitter ca mt s ký gi vì lý do ‘vic tit l to theo thi gian thc gây nguy him cho ông và gia ình’, ông ch ca Tesla ã làm mt cuc iu tra ‘dân ý’ trên Twitter vào ngày 17/12… [+5394 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Online Citizen"
            },
            "author": "The Online Citizen",
            "title": "Jury hears Musk told ‘lies’ that cost Tesla investors millions",
            "description": "by Julie Jammot SAN FRANCISCO, UNITED STATES — A lawyer for angry Tesla investors told a California courtroom on Wednesday that CEO Elon Musk “lied” about having funding in place to take the company private, costing his clients millions of dollars. More than …",
            "url": "https://www.theonlinecitizen.com/2023/01/19/jury-hears-musk-told-lies-that-cost-tesla-investors-millions/",
            "urlToImage": "https://www.theonlinecitizen.com/wp-content/uploads/2021/07/Elon-Musk.jpg",
            "publishedAt": "2023-01-19T05:01:18Z",
            "content": "by Julie Jammot\r\nSAN FRANCISCO, UNITED STATES — A lawyer for angry Tesla investors told a California courtroom on Wednesday that CEO Elon Musk “lied” about having funding in place to take the company… [+2987 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilgiornale.it"
            },
            "author": "redazione@ilgiornale-web.it (Pierluigi Bonora)",
            "title": "L'auto europea torna al 1993. Vendite in calo, allarme Cina",
            "description": "I volumi immatricolati nel 2022 sono gli stessi di 30 anni fa. Nell'elettrico Italia e Spagna fanalini di coda",
            "url": "https://www.ilgiornale.it/news/economia/lauto-europea-torna-1993-vendite-calo-allarme-cina-2106796.html",
            "urlToImage": "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2021/09/17/1631856208-agenzia-fotogramma-ipa1278997.jpg?_=1631856208",
            "publishedAt": "2023-01-19T05:00:03Z",
            "content": "Le vendite di auto in Europa tornano ai livelli del 1993, anno nero per il settore. Lo rimarca Acea, l'Associazione europea dei costruttori, da inizio anno orfana di Stellantis. Il mercato è infatti … [+2696 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilgiornale.it"
            },
            "author": "redazione@ilgiornale-web.it (Valeria Robecco)",
            "title": "Musk svuota gli uffici e vende (anche la statua dell'uccellino)",
            "description": "Poltrone, biciclette, tavolini e la macchina del caffè: tutto in vendita on line al miglior offerente. Per fare cassa",
            "url": "https://www.ilgiornale.it/news/politica/musk-svuota-uffici-e-vende-anche-statua-delluccellino-2106793.html",
            "urlToImage": "https://img.ilgcdn.com/sites/default/files/styles/social/public/foto/2022/11/07/1667800476-ayrde1bdfxqok-fm6lsn-ansa.jpeg?_=1667800476",
            "publishedAt": "2023-01-19T05:00:03Z",
            "content": "Elon Musk cerca di fare cassa a Twitter e mette all'asta mobili, opere d'arte, e persino le macchine per il caffè. «Beni aziendali in eccesso» del quartier generale a San Francisco sono andati sul me… [+3508 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Evelyn Cheng",
            "title": "China tightens media control with tiny stakes in two Alibaba units",
            "description": "State-backed entities have taken tiny stakes in parts of two Alibaba subsidiaries that oversee a video platform and web browser.",
            "url": "https://www.cnbc.com/2023/01/19/china-tightens-media-control-with-tiny-stakes-in-two-alibaba-units.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107178903-1673843764256-gettyimages-1238068564-IGOR2182.jpeg?v=1674104111&w=1920&h=1080",
            "publishedAt": "2023-01-19T04:55:00Z",
            "content": "Alibaba completed its acquisition of video platform operator Youku Tudou in 2016. Pictured here is an old version of the Youku logo.\r\nBEIJING State-backed entities have taken tiny stakes in parts of … [+7399 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "STERN.de"
            },
            "author": "STERN.de",
            "title": "Justiz: Anlegerklage-Prozess: Musk-Anwalt bestreitet Betrugsabsicht",
            "description": "Nach Tweets von Elon Musk mit der Ankündigung, Tesla von der Börse zu nehmen, trennt sich ein Anleger im Sommer 2018 von Aktienoptionen. Dann kommt heraus, dass Angaben in den Tweets falsch sind.",
            "url": "https://www.stern.de/wirtschaft/news/justiz--anlegerklage-prozess--musk-anwalt-bestreitet-betrugsabsicht-33110102.html",
            "urlToImage": "https://image.stern.de/33114322/t/MU/v1/w1440/r1.7778/-/19--urnnewsmldpacom2009010123011999273255v3w800h600l640t768r1920b1618jpeg---9f5f334d3cc3dc57.jpg",
            "publishedAt": "2023-01-19T04:48:47Z",
            "content": "Nach Tweets von Elon Musk mit der Ankündigung, Tesla von der Börse zu nehmen, trennt sich ein Anleger im Sommer 2018 von Aktienoptionen. Dann kommt heraus, dass Angaben in den Tweets falsch sind.\r\nIm… [+2940 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "247wallst.com",
            "title": "10 Biggest Companies Reporting Earnings in the 4th Week of Jan 2023 – 24/7 Wall St.",
            "description": "The fourth quarter earnings season is always the most important because it reveals the full year performance of the companies as well. This time, however, it is even more important as investors will get an idea of how the weakening macroeconomic environment a…",
            "url": "https://biztoc.com/x/147c6f686c2d0f5e",
            "urlToImage": "https://c.biztoc.com/p/147c6f686c2d0f5e/og.webp",
            "publishedAt": "2023-01-19T04:44:06Z",
            "content": "The fourth quarter earnings season is always the most important because it reveals the full year performance of the companies as well. This time, however, it is even more important as investors will … [+308 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "247wallst.com",
            "title": "Elon Musk’s Securities Fraud Trial for Tesla’s ‘Going Private’ Tweets Begins – 24/7 Wall St.",
            "description": "Tesla (US:TSLA) CEO Elon Musk is set to face a securities-fraud trial in a San Francisco court over tweets from 2018 in which he suggested taking the company private, claiming he had secured funding. That prompted investor Glen Littleton to file a lawsuit aga…",
            "url": "https://biztoc.com/x/157725007960ee87",
            "urlToImage": "https://c.biztoc.com/p/157725007960ee87/og.webp",
            "publishedAt": "2023-01-19T04:44:06Z",
            "content": "Tesla (US:TSLA) CEO Elon Musk is set to face a securities-fraud trial in a San Francisco court over tweets from 2018 in which he suggested taking the company private, claiming he had secured funding.… [+305 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "247wallst.com",
            "title": "Bitcoin’s Correlation With Equities Drops to 1-Year Low – 24/7 Wall St.",
            "description": "Following a strong rally in the crypto market over the past week, the correlation between BTC and U.S. equities has been declining. As of now, BTC’s 30-day correlation to Nasdaq sits at 0.29, a level not seen in more than a year. The softening correlation, wh…",
            "url": "https://biztoc.com/x/ae39826dd4d6ae6e",
            "urlToImage": "https://c.biztoc.com/p/ae39826dd4d6ae6e/og.webp",
            "publishedAt": "2023-01-19T04:44:05Z",
            "content": "Following a strong rally in the crypto market over the past week, the correlation between BTC and U.S. equities has been declining. As of now, BTCs 30-day correlation to Nasdaq sits at 0.29, a level … [+307 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Steve Hanley",
            "title": "Tesla Follies This Week: Faked FSD Video, Worker Gripes In Germany, Class Acton Suit Begins",
            "description": "It isn’t easy being rich. You become a target of all sorts of people who just want to bleed you dry with silly lawsuits and spurious complaints. Take Elon Musk, the CEO of Tesla. This week he is up to his eyeballs in lawsuits and facing growing discontent amo…",
            "url": "https://cleantechnica.com/2023/01/18/tesla-follies-this-week-faked-fsd-video-worker-gripes-in-germany-class-acton-suit-begins/",
            "urlToImage": "https://cleantechnica.com/files/2022/08/tesla-help_MAIN.jpg",
            "publishedAt": "2023-01-19T04:40:22Z",
            "content": "It isn’t easy being rich. You become a target of all sorts of people who just want to bleed you dry with silly lawsuits and spurious complaints. Take Elon Musk, the CEO of Tesla. This week he is up t… [+7540 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Viva.co.id"
            },
            "author": "Arianti Widya",
            "title": "All Electric Car Manufacturers Will Invest in Indonesia",
            "description": "The Coordinating Minister for Maritime Affairs and Investment, Luhut Binsar Pandjaitan said all the world's electric car manufacturers will invest in Indonesia.",
            "url": "https://www.viva.co.id/english/1566824-all-electric-car-manufacturers-will-invest-in-indonesia",
            "urlToImage": "https://thumb.viva.co.id/media/frontend/thumbs3/2021/10/01/6156bd4666410-menko-marves-luhut-binsar-pandjaitan-mencoba-mobil-listrik-wuling-mini-ev_665_374.jpeg",
            "publishedAt": "2023-01-19T04:40:02Z",
            "content": "VIVA  Coordinating Minister for Maritime Affairs and Investment, Luhut Binsar Pandjaitan said all the world's electric car manufacturers will invest in Indonesia. This was conveyed at the 2023 Region… [+1324 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VVNG.com"
            },
            "author": "fortran77",
            "title": "Fatal Tesla crash on Bear Valley Road was intentional, driver identified",
            "description": "VICTORVILLE, Calif. (VVNG.com) — The San Bernardino County Coroner’s office identified the driver of a Tesla killed in an “intentional” crash Tuesday night on Bear Valley Road as Dillon A. Vieira, a resident of Hesperia. Just after 8:00 pm, on January 17, 202…",
            "url": "http://www.vvng.com/fatal-tesla-crash-on-bear-valley-road-was-intentional-driver-identified/",
            "urlToImage": "https://www.vvng.com/wp-content/uploads/2023/01/driver-of-tesla-killed-in-Victorville-jpg.webp",
            "publishedAt": "2023-01-19T04:39:18Z",
            "content": "VICTORVILLE, Calif. (VVNG.com) — The San Bernardino County Coroner’s office identified the driver of a Tesla killed in an “intentional” crash Tuesday night on Bear Valley Road as Dillon A. Vieira, a … [+1768 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "tipranks.com",
            "title": "Ignore the Bears. Tesla Stock (NASDAQ:TSLA) is Highly Attractive",
            "description": "EV giant Tesla (NASDAQ:TSLA) has shed over 60% of its value over the past 12 months, creating what looks like a highly-attractive buying opportunity. At its current valuation, investors who believe in Tesla’s long-term potential can now bet big on its fundame…",
            "url": "https://biztoc.com/x/7a2d3a65af9c1691",
            "urlToImage": "https://c.biztoc.com/p/7a2d3a65af9c1691/og.webp",
            "publishedAt": "2023-01-19T04:28:07Z",
            "content": "EV giant Tesla (NASDAQ:TSLA) has shed over 60% of its value over the past 12 months, creating what looks like a highly-attractive buying opportunity. At its current valuation, investors who believe i… [+281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Haberturk.com"
            },
            "author": "Yiğitcan Yıldız",
            "title": "Türkiye'nin 'şarj' haritası",
            "description": "Türkiye'deki elektrikli otomobil pazarını incelediğimiz dosyamızın üçüncü bölümünde, elektrikli otomobiller için hayati öneme sahip şarj istasyonlarını mercek altına aldık. Mevcut elektrikli otomobil parkına göre, Türkiye'de her iki elektrikli otomobile bir ş…",
            "url": "https://www.haberturk.com/turkiye-nin-sarj-haritasi-3557273-ekonomi",
            "urlToImage": "https://im.haberturk.com/2023/01/18/ver1674102312/3557273_1200x627.jpg",
            "publishedAt": "2023-01-19T04:25:12Z",
            "content": "Türkiye'deki elektrikli otomobil pazarn masaya yatrdmz dosyamzn üçüncü bölümünde, bu otomobiller için hayati önem tayan arj istasyonlarn inceleyeceiz.\r\n2022'de Türkiye'de satlan elektrikli otomobil s… [+5533 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Milenio"
            },
            "author": "AP",
            "title": "Juicio contra Elon Musk por caso Tesla lo muestra como mentiroso y visionario",
            "description": "Elon Musk fue retratado el mircoles como un mentiroso que puso cruelmente en riesgo los ahorros de ?personas comunes?, pero tambin como un visionario bien intencionado, mientras los abogados presentaban sus argumentos de apertura en un juicio en torno a la fa…",
            "url": "https://www.milenio.com/internacional/juicio-elon-musk-muestra-mentiroso-visionario",
            "urlToImage": "https://cdn.milenio.com/uploads/media/2023/01/18/juicio-elon-musk-muestra-mentiroso.jpg",
            "publishedAt": "2023-01-19T04:24:14Z",
            "content": "Elon Musk fue retratado el miércoles como un mentiroso que puso cruelmente en riesgo los ahorros de personas comunes, pero también como un visionario bien intencionado, mientras los abogados presenta… [+4281 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Droidsans.com"
            },
            "author": "Xyanyde",
            "title": "รอเลย…รถ Tesla ล็อตแรกเข้าเทียบท่าในประเทศไทยแล้ว",
            "description": "หลังจากที่ Tesla เข้ามาเปิดตัว Model 3 และ Model Y ในบ้านเราอย่างเป็นทางการ พร้อมเปิด Pre-order กันไปตั้งแต่ช่วงเดือนธันวาคมที่ผ่านมา และแจ้งว่าจะพร้อมส่งมอบได้ภายในช่วงไตรมาสแรกของปี 2023 ล่าสุดมีข่าวว่ารถล็อตแรกได้เดินทางข้ามน้ำข้ามทะเลมาถึงประเทศไทยเรียบร้…",
            "url": "https://droidsans.com/tesla-first-batch-reached-thailand/",
            "urlToImage": "https://images.droidsans.com/wp-content/uploads/2023/01/teslacover-1000x600.jpg",
            "publishedAt": "2023-01-19T04:20:40Z",
            "content": "Tesla Model 3 Model Y Pre-order 2023 2,000 \r\nEV Club Thailnad Group 2,000 () \r\nTesla 2023 7 – 31 2022 7,739 2 – 3 \r\n Tesla Model 3 Model Y 3 …\r\nModel 3\r\n<ul><li>Model 3 Rear-Wheel Drive : 1,759,000 <… [+277 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VVNG.com"
            },
            "author": "ains",
            "title": "Driver of Tesla killed after slamming into semi-truck in Victorville",
            "description": "VICTORVILLE, Calif. (VVNG.com) – The driver of a Tesla was killed after slamming into a semi-truck Tuesday night. The crash was reported at 8:04 p.m. in front of the Food4Less grocery store located on the 16200 block of Bear Valley Road and 5th Avenue. Firefi…",
            "url": "http://www.vvng.com/driver-of-tesla-killed-after-slamming-into-back-of-semi-truck-in-victorville/",
            "urlToImage": "https://www.vvng.com/wp-content/uploads/2023/01/tesla-driver-killed-3-jpg.webp",
            "publishedAt": "2023-01-19T04:12:23Z",
            "content": "VICTORVILLE, Calif. (VVNG.com) – The driver of a Tesla was killed after slamming into a semi-truck Tuesday night. \r\nThe crash was reported at 8:04 p.m. in front of the Food4Less grocery store located… [+1385 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Joemonster.org"
            },
            "author": null,
            "title": "Shopee zakończyło swoją działalność w Polsce – Co nowego w technologii?",
            "description": "W dzisiejszym odcinku dowiemy się, jakiego telefonu używa na co dzień Bill Gates, ceny Tesli w Polsce spadną do historycznie niskiego poziomu, a Bolt …",
            "url": "https://joemonster.org/art/66565/Co_nowego_w_technologii",
            "urlToImage": "https://img.joemonster.org/i/thumbs/artpic66565_3139774156-1200.jpg",
            "publishedAt": "2023-01-19T04:07:01Z",
            "content": "W dzisiejszym odcinku dowiemy si, jakiego telefonu uywa na co dzie Bill Gates, ceny Tesli w Polsce spadn do historycznie niskiego poziomu, a Bolt zachci nas do skadania donosów na kierowców. \r\n#1. Sh… [+6701 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Chosun.com"
            },
            "author": null,
            "title": "Korean Businesses 'Can Lead Global Economy,' Consultant Says",
            "description": "A senior partner at global consultancy firm McKinsey says Korean companies can lead the worldwide economy as skepticism about globalization grows.Bob Sternfels told the Chosun Ilbo during a visit last week, \"There may be no year where there's a gap as wide as…",
            "url": "https://english.chosun.com/site/data/html_dir/2023/01/19/2023011901274.html",
            "urlToImage": "https://english.chosun.com/site/data/img_dir/2023/01/19/2023011901270_0.jpg",
            "publishedAt": "2023-01-19T04:04:45Z",
            "content": "A senior partner at global consultancy firm McKinsey says Korean companies can lead the worldwide economy as skepticism about globalization grows.\r\nBob Sternfels told the Chosun Ilbo during a visit l… [+6330 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo Australia"
            },
            "author": "Owen Bellwood",
            "title": "Winnebago Turned Ford’s E-Transit Into an Electric Adventure Van",
            "description": "“Take only photos, leave only footprints” is a corny saying I like batting around every time I head out into...\nThe post Winnebago Turned Ford’s E-Transit Into an Electric Adventure Van appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>Winnebago…",
            "url": "https://www.gizmodo.com.au/2023/01/winnebago-turned-fords-e-transit-into-an-electric-adventure-van/",
            "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/01/19/e184773953cd5bc785a81d1044acaaae.jpg?quality=80&resize=1280,720",
            "publishedAt": "2023-01-19T04:00:07Z",
            "content": "Take only photos, leave only footprints is a corny saying I like batting around every time I head out into the wilderness. Its all about leaving nature where nature belongs and heading home without a… [+2745 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elconfidencial.com"
            },
            "author": "Mónica H. Berigüete",
            "title": "Pamela Anderson, Elon Musk, Johnny Depp y José Andrés son carne de (buen) documental",
            "description": "Una rubia explosiva, un chef muy humanitario y un millonario excéntrico protagonizan los documentales del momento. Si los dejas pasar, tendrás menos temas de conversación",
            "url": "https://www.vanitatis.elconfidencial.com/estilo/ocio/2023-01-19/pamela-anderson-jose-andres-elon-musk-y-johnny-depp-son-carne-de-buen-documental_3559040/",
            "urlToImage": "https://images.ecestaticos.com/kBdoqXXGX5z5wAonXEyBIwqdnLQ=/0x0:1843x1068/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/0f2/6d9/13e/0f26d913e1b27ca111e62b656aa354da.png,0,275,1)/f.elconfidencial.com/original/f8b/4c9/3af/f8b4c93af849286c9ce42ddcf758a1e9.jpg",
            "publishedAt": "2023-01-19T04:00:00Z",
            "content": "El formato documental es una mirilla que permite colarse en la intimidad de grandes personajes, algunos amados, otros no tanto, pero todos carismáticos, atrayentes y con un 'je ne sais quoi' que los … [+4812 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Seeking Alpha"
            },
            "author": "WideAlpha",
            "title": "It's A Great Time To Buy Skyworks Shares",
            "description": "There are several likely explanations behind Skyworks' cheap valuation. Read more to see why we believe right now is an excellent time to buy SWKS stock.",
            "url": "https://seekingalpha.com/article/4570777-skyworks-shares-strong-ip-portfolio-reiterate-buy",
            "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1369278807/image_1369278807.jpg?io=getty-c-w1280",
            "publishedAt": "2023-01-19T03:56:47Z",
            "content": "jamesteohart\r\nThere are many reasons to like Skyworks (NASDAQ:SWKS), from the exposure it gives to 5G and IoT, to the excellent profit margins and growth it delivers. One reason that is particularly … [+7786 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Overclockers.ru"
            },
            "author": "Алексей Сычёв",
            "title": "Решение Илона Маска заявить о приватизации Tesla в 2018 году было спонтанным",
            "description": "Об этом сообщил адвокат миллиардера.",
            "url": "https://overclockers.ru/hardnews/show/123473/reshenie-ilona-maska-zayavit-o-privatizacii-tesla-v-2018-godu-bylo-spontannym",
            "urlToImage": "https://overclockers.ru/st/images/preview/mVB26zfoU0KwCH8y.jpg",
            "publishedAt": "2023-01-19T03:56:00Z",
            "content": "Bloomberg , (Elon Musk) Tesla , . (Alex Spiro) , 2018 , Financial Times Tesla.\r\n, , . , . , . , 7 2018 (Michael Dell), Silver Lake Management Goldman Sachs Group."
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "businessinsider.com",
            "title": "Twitter is bracing for further layoffs as Elon Musk shrinks the employee headcount to its lowest level in over a decade",
            "description": "Twitter is seeing rolling layoffs despite Elon Musk's claims that he was done laying people off. • Scores more employees are expected to be let go in the coming weeks. • Musk says Twitter is in dire financial straits. Disclosures show surer footing before his…",
            "url": "https://biztoc.com/x/c1a2b9e434ed6b81",
            "urlToImage": "https://c.biztoc.com/p/c1a2b9e434ed6b81/og.webp",
            "publishedAt": "2023-01-19T03:52:05Z",
            "content": "Twitter is seeing rolling layoffs despite Elon Musk's claims that he was done laying people off.Scores more employees are expected to be let go in the coming weeks.Musk says Twitter is in dire financ… [+294 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fintel.io"
            },
            "author": "247patrick",
            "title": "Elon Musk’s Securities Fraud Trial for Tesla’s ‘Going Private’ Tweets Begins",
            "description": "Tesla CEO Elon Musk is set to face a securities-fraud trial in a San Francisco court over tweets from 2018.",
            "url": "https://fintel.io/news/elon-musks-securities-fraud-trial-for-teslas-going-private-tweets-begins-toda",
            "urlToImage": "https://247wallst.com/wp-content/uploads/2022/04/Elon-Musk-Twitter.jpg",
            "publishedAt": "2023-01-19T03:48:21Z",
            "content": "Tesla (US:TSLA) CEO Elon Musk is set to face a securities-fraud trial in a San Francisco court over tweets from 2018 in which he suggested taking the company private, claiming he had secured funding.… [+3740 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Technews.tw"
            },
            "author": "Chen Kobe",
            "title": "工程師變演員，員工上法院爆料特斯拉自動駕駛影片造假",
            "description": "特斯拉員工法院證詞爆料，當年宣傳自動駕駛的影片其實有大量人工介入，而非馬斯克所說的「車輛自己在開車。」 路透社報導指出，特斯拉資深工程師 Ashok Elluswamy 在法院上作證表示，2016 年拍攝的自動駕駛宣傳影片，並非如特斯拉和馬斯克（Elon Musk）宣稱的沒有人為介入。 在這部爭議性...",
            "url": "https://technews.tw/2023/01/19/tesla-autopilot-video-fake/",
            "urlToImage": "https://img.technews.tw/wp-content/uploads/2023/01/19114114/%E6%88%AA%E5%9C%96-2023-01-19-%E4%B8%8A%E5%8D%8811.40.55.png",
            "publishedAt": "2023-01-19T03:41:42Z",
            "content": "Ashok Elluswamy 2016 Elon Musk\r\n Model X Model X Model X \r\nTesla \r\nTesla drives itself (no human input at all) thru urban streets to highway to streets, then finds a parking spot https://t.co/V2T7KGM… [+182 chars]"
        },
        {
            "source": {
                "id": "la-nacion",
                "name": "La Nacion"
            },
            "author": null,
            "title": "Juicio contra Musk lo muestra como mentiroso y visionario",
            "description": "Juicio contra Musk lo muestra como mentiroso y visionario",
            "url": "https://www.lanacion.com.ar/agencias/juicio-contra-musk-lo-muestra-como-mentiroso-y-visionario-nid19012023/",
            "urlToImage": "https://resizer.glanacion.com/resizer/hRW2CVdt2B1JFGVpK0lImYC9guc=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/7M6Y2U2SDJHNDNKSJKNMKHGPYM",
            "publishedAt": "2023-01-19T03:40:36Z",
            "content": "San francisco (ap) elon musk fue retratado el miércoles como un mentiroso que puso cruelmente en riesgo los ahorros de personas comunes, pero también como un visionario bien intencionado, mientras lo… [+4320 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tokenist.com"
            },
            "author": "247patrick",
            "title": "Bitcoin’s Correlation With Equities Drops to 1-Year Low",
            "description": "Following a strong rally in the cryptocurrency market over the past week, the correlation between BTC and U.S. equities has been declining.",
            "url": "https://tokenist.com/bitcoins-correlation-with-equities-drops-to-1-year-low/?utm_source=rss&#038;utm_medi",
            "urlToImage": "https://247wallst.com/wp-content/uploads/2021/02/imageForEntry26-YPC.jpg",
            "publishedAt": "2023-01-19T03:34:16Z",
            "content": "Following a strong rally in the crypto market over the past week, the correlation between BTC and U.S. equities has been declining. As of now, BTCs 30-day correlation to Nasdaq sits at 0.29, a level … [+3139 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "20 Minutes"
            },
            "author": "20 Minutes avec AFP (20 Minutes)",
            "title": "Procès d’Elon Musk : Tweet mensonger ou « précipité », les avocats débattent avant le témoignage du patron de Tesla",
            "description": "Le fantasque milliardaire devrait venir s'expliquer à la barre, peut-être dès vendredi",
            "url": "https://www.20minutes.fr/high-tech/4019551-20230119-proces-elon-musk-tweet-mensonger-precipite-avocats-debattent-avant-temoignage-patron-tesla",
            "urlToImage": "https://img.20mn.fr/qPw57i3PRmWHqmlVTVZCPyk/1200x768_alex-spiro-attorney-for-elon-musk-foreground-exits-a-federal-courthouse-in-san-francisco-wednesday-jan-18-2023-elon-musk-was-depicted-wednesday-as-either-a-liar-who-callously-jeopardized-the-savings-of-regular-people-or-a-well-intentioned-visionary-as-attorneys-delivered-opening-statements-at-a-trial-focused-on-a-tesla-buyout-that-never-happened-ap-photo-jeff-chiu-cajc104-23018853110081-0-2301190055",
            "publishedAt": "2023-01-19T03:33:30Z",
            "content": "Ce sont deux phrases qui pourraient lui coûter cher. Plus de quatre ans après avoir tweeté qu’il allait sortir Tesla de la Bourse, Elon Musk doit rendre des comptes au tribunal face aux investisseurs… [+3668 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Today"
            },
            "author": "Business Today Desk",
            "title": "Davos 2023: Rahul Gandhi ‘smart’ man, ‘pappu’ image unfortunate, says Raghuram Rajan",
            "description": "WEF Summit 2023: He further mentioned that he walked with Rahul Gandhi on the Bharat Jodo Yatra since he stands for the values the Yatra stood for.",
            "url": "https://www.businesstoday.in/wef-2023/story/davos-2023-rahul-gandhi-smart-man-pappu-image-unfortunate-says-raghuram-rajan-361002-2023-01-19",
            "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/ezgif-sixteen_nine_316.jpg",
            "publishedAt": "2023-01-19T03:28:51Z",
            "content": "Former Reserve Bank of India (RBI) Governor Raghuram Rajan said Congress leader Rahul Gandhi was a smart man and that his pappu image was unfortunate. He added that it was essential to have a sense o… [+2008 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Cathie Wood Watch: Ark Piles Its Tesla Holding High",
            "description": "Ark has snapped up more almost 757,000 shares of the electric car titan in January alone, buying after the stock plunged. Famed investor Cathie Wood, chief executive of Ark Investment Management, continued her buying onslaught of Tesla (TSLA) - Get Free Repor…",
            "url": "https://biztoc.com/x/9b30766121364b8b",
            "urlToImage": "https://c.biztoc.com/p/9b30766121364b8b/og.webp",
            "publishedAt": "2023-01-19T03:24:05Z",
            "content": "Ark has snapped up more almost 757,000 shares of the electric car titan in January alone, buying after the stock plunged.\r\nFamed investor Cathie Wood, chief executive of Ark Investment Management, co… [+314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "WELT",
            "title": "„Elon Musk hat gelogen“, sagt ein Klägeranwalt vor Gericht",
            "description": "Elon Musk steht vor Gericht, weil er Tesla-Anleger mit irreführenden Tweets um Geld gebracht haben soll. Einer der Klägeranwälte warf dem Unternehmer nun „Lügen“ vor, die „normale Menschen“ Millionen von Dollar gekostet hätten.",
            "url": "https://www.welt.de/wirtschaft/article243297337/Elon-Musk-hat-gelogen-sagt-ein-Klaegeranwalt-vor-Gericht.html",
            "urlToImage": "https://img.welt.de/img/wirtschaft/mobile243297339/7011354297-ci16x9-w1200/Musk-Tesla-Tweet-Trial.jpg",
            "publishedAt": "2023-01-19T03:22:51Z",
            "content": "Im Betrugsprozess gegen Elon Musk wegen irreführender Tweets zum Elektroautobauer Tesla im Jahr 2018 hat ein Klägeranwalt den Technologie-Milliardär der Lüge bezichtigt. Elon Musk, Verwaltungsratsche… [+2373 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "crunchbase.com",
            "title": "New York-based Impel, which offers an AI-powered customer engagement service for the auto industry, raised $104M led by Silversmith Capital Partners",
            "description": "Impel, the New York-based digital engagement startup, announced on Tuesday it secured $104 million in growth investment. The fresh funding was led by Silversmith Capital Partners with additional investment from Wavecrest Growth Partners. The startup offers an…",
            "url": "https://biztoc.com/x/7388837dc60613c8",
            "urlToImage": "https://c.biztoc.com/p/7388837dc60613c8/og.webp",
            "publishedAt": "2023-01-19T03:22:06Z",
            "content": "Impel, the New York-based digital engagement startup, announced on Tuesday it secured $104 million in growth investment. The fresh funding was led by Silversmith Capital Partners with additional inve… [+270 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "MarketScreener",
            "title": "Indian Morning Briefing: Asian Markets Mixed After U.S. Economic Data",
            "description": "(marketscreener.com) \nGLOBAL MARKETS \nDJIA 33296.96 -613.89 -1.81% \nNasdaq 10957.01 -138.10 -1.24% \nS&P 500 3928.86 -62.11 -1.56% \nFTSE 100 7830.70 -20.33 -0.26% \nNikkei Stock 26505.48 -285.64 -1.07% \nHang Seng 21494.02 -183.98 -0.85% \nKospi 2369.38 1.06 0.04…",
            "url": "https://www.marketscreener.com/news/latest/Indian-Morning-Briefing-Asian-Markets-Mixed-After-U-S-Economic-Data--42763526/?utm_medium=RSS&utm_content=20230119",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
            "publishedAt": "2023-01-19T03:16:03Z",
            "content": "GLOBAL MARKETS \r\nDJIA 33296.96 -613.89 -1.81% \r\nNasdaq 10957.01 -138.10 -1.24% \r\nS&amp;P 500 3928.86 -62.11 -1.56% \r\nFTSE 100 7830.70 -20.33 -0.26% \r\nNikkei Stock 26505.48 -285.64 -1.07% \r\nHang Seng … [+6189 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aljazeera.net"
            },
            "author": "Al Jazeera",
            "title": "خلاف في المحكمة على تغريدة ماسك.. المدعون يتهمونه بالكذب ومحاميه يرد",
            "description": "بدأت المحاكمة بتهمة الاحتيال -أول أمس الثلاثاء- في سان فرانسيسكو باختيار هيئة محلفين من 9 أشخاص، ومن المتوقع أن تستمر 3 أسابيع.",
            "url": "https://www.aljazeera.net/news/2023/1/19/%d8%ae%d9%84%d8%a7%d9%81-%d9%81%d9%8a-%d8%a7%d9%84%d9%85%d8%ad%d9%83%d9%85%d8%a9-%d8%b9%d9%84%d9%89-%d8%aa%d8%ba%d8%b1%d9%8a%d8%af%d8%a9-%d9%85%d8%a7%d8%b3%d9%83",
            "urlToImage": "https://www.aljazeera.net/wp-content/uploads/2023/01/GettyImages-490597690.jpg?resize=1920%2C1440",
            "publishedAt": "2023-01-19T02:50:55Z",
            "content": "\"\" (Tesla) - - \"\" \"\" \" \" 2018.\r\n - - .\r\n - - 9 3 .\r\n / 2018 420 .\r\n 386.48 16 / 335.45 .\r\n \" \".\r\n \" \" .\r\n \"\" 2018 .\r\n - - \" \" \" \" .\r\n \" \" \" \" \" \" \" \".\r\n .\r\n \"\" .\r\n \"\" \"\" .\r\n ."
        },
        {
            "source": {
                "id": null,
                "name": "Appbank.net"
            },
            "author": "テクノロジー記事班",
            "title": "イーロン・マスクがTwitter社の「鳥の銅像」や豪華なキッチン器具を売りまくる→落札価格が意外とショボい",
            "description": "イーロン・マスクがCEOを務めるTwitterが、サンフランシスコ本社にある数百の備品をオークションに出品しています。 *Category:テクノロジー Technology *Source：The Verge ,HGP […]",
            "url": "https://www.appbank.net/2023/01/19/technology/2378673.php",
            "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/01/2023-0119-Twitter-thumb-1.jpeg",
            "publishedAt": "2023-01-19T02:48:27Z",
            "content": "CEOTwitterHeritage Global Partners\r\n*Category:\r\n Technology *SourceThe Verge ,HGP ,Tesla(YouTube)\r\nTwitter7,50032631117\r\nTwitter\r\n22,500(290)1m(270)(100)\r\nTwitter440(5.6)Google Jamboards\r\nThe VergeHe… [+75 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Youkyung Lee",
            "title": "Tesla Drops Out of Top 10 Stocks in $1.3 Billion Korean EV Fund",
            "description": "Tesla Inc. dropped out of the top 10 holdings of a South Korean electric-vehicle mutual fund for the first time ever amid its epic selloff last year.",
            "url": "https://www.bloomberg.com/news/articles/2023-01-19/tesla-drops-out-of-top-10-stocks-in-1-3-billion-korean-ev-fund",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHT9rpLihXDM/v0/1200x800.jpg",
            "publishedAt": "2023-01-19T02:44:01Z",
            "content": "Tesla Inc. dropped out of the top 10 holdings of a South Korean electric-vehicle mutual fund for the first time ever amid its epic \r\nselloff last year.\r\nThe Korea Investment Management Co. \r\nfund ste… [+1693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Philippine Star"
            },
            "author": "Philstar.com",
            "title": "Jury hears Musk told 'lies' that cost Tesla investors millions",
            "description": "More than four years after Musk fired off tweets saying he had funding secured to buy the electric car maker at $420 a share, investors who felt burned by the misleading statements began to make their case in the San Francisco court.",
            "url": "https://www.philstar.com/business/2023/01/19/2238712/jury-hears-musk-told-lies-cost-tesla-investors-millions",
            "urlToImage": "https://media.philstar.com/photos/2022/11/01/elon-musk-twitter_2022-11-01_16-10-56.jpg",
            "publishedAt": "2023-01-19T02:19:53Z",
            "content": "SAN FRANCISCO, United States — A lawyer for angry Tesla investors told a California courtroom on Wednesday that CEO Elon Musk \"lied\" about having funding in place to take the company private, costing… [+2968 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "AP",
            "title": "Elon Musk depicted as liar, visionary in Tesla tweet trial",
            "description": "The tweets indicated that Musk had lined up the financing to take Tesla private at a time when the automaker's stock was slumping amid production problems.",
            "url": "https://economictimes.indiatimes.com/news/international/business/elon-musk-depicted-as-liar-visionary-in-tesla-tweet-trial/articleshow/97112498.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-97112732,width-1070,height-580,imgsize-33070,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-01-19T02:12:44Z",
            "content": "Elon Musk was depicted Wednesday as either a liar who callously jeopardized the savings of \"regular people\" or a well-intentioned visionary as attorneys delivered opening statements at a trial focuse… [+5702 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "3dnews.ru"
            },
            "author": null,
            "title": "На следующей неделе Twitter предстоит выплатить $300 млн в счёт погашения кредита по сделке с Илоном Маском",
            "description": "В конце октября Илон Маск (Elon Musk) стал номинальным владельцем компании Twitter, но принадлежащие ему и прочим инвесторам средства не полностью покрывали стоимость активов социальной сети, поэтому компании пришлось оформить кредит на сумму $12,5 млрд под д…",
            "url": "https://3dnews.ru/1080515/na-sleduyushchey-nedele-twitter-predstoit-viplatit-300-mln-v-schyot-pogasheniya-kredita-po-sdelke-s-ilonom-maskom",
            "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/01/19/1080515/twitter_01.jpg",
            "publishedAt": "2023-01-19T02:09:00Z",
            "content": "(Elon Musk) Twitter, , $12,5 . $300 .\r\n: Reuters, Carlos Barria\r\n, Twitter $1 , . Bloomberg, Morgan Stanley $300 , 27 . Twitter, , 30- .\r\n , 79 % Twitter, $20 , $11,6 . , , . $137,4 . Twitter , , .\r\n… [+100 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Cathie Wood's ARK Buys $6M In Tesla Stock, Trims Niu Stake",
            "description": "Cathie Wood-led ARK Investment Management offloaded 446,845 shares of Beijing-headquartered Niu Technologies NIU at an estimated valuation of over $2 million on Wednesday. The sale was done via the ARK Autonomous Tech. & Robotics ETF ARKQ. Niu, a Chinese elec…",
            "url": "https://biztoc.com/x/d0c9fc174e8e4f82",
            "urlToImage": "https://c.biztoc.com/p/d0c9fc174e8e4f82/og.webp",
            "publishedAt": "2023-01-19T02:02:04Z",
            "content": "Cathie Wood-led ARK Investment Management offloaded 446,845 shares of Beijing-headquartered Niu Technologies NIU at an estimated valuation of over $2 million on Wednesday. The sale was done via the A… [+314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo Australia"
            },
            "author": "Steve DaSilva",
            "title": "Tesla Cybertruck Will Come With Some Kind of Stainless Steel Scratch Remover",
            "description": "If you weren’t aware, the extremely real Tesla Cybertruck was designed with inspiration from the DeLorean DMC-12. That means hard...\nThe post Tesla Cybertruck Will Come With Some Kind of Stainless Steel Scratch Remover appeared first on Gizmodo Australia.\n  R…",
            "url": "https://www.gizmodo.com.au/2023/01/tesla-cybertruck-will-come-with-some-kind-of-stainless-steel-scratch-remover/",
            "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/01/18/1afac5ca694ccba4c11fe3837646c65f.png?quality=80&resize=1280,720",
            "publishedAt": "2023-01-19T02:00:41Z",
            "content": "If you werent aware, the extremely realTesla Cybertruck was designed with inspiration from the DeLorean DMC-12. That means hard edges, angles, and most importantly that smooth, unpainted stainless st… [+1849 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DW (English)"
            },
            "author": "Deutsche Welle",
            "title": "Tesla tweet trial: Lawyers paint Musk as a 'liar'",
            "description": "Elon Musk is being sued by investors over false claims he made in 2018 about taking Tesla private, which caused wild gyrations in the electric carmaker's stock price.",
            "url": "https://www.dw.com/en/tesla-tweet-trial-lawyers-paint-musk-as-a-liar/a-64441276",
            "urlToImage": "https://static.dw.com/image/64336876_6.jpg",
            "publishedAt": "2023-01-19T01:56:00Z",
            "content": "Elon Musk's fraud trial over a series of tweets about his electric car firm Tesla began on Wednesday. Investors are suing the CEO over claims he crashed the company's stock price by claiming he had s… [+2658 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Tesla Engineer Reportedly Testifies That Self-Driving Video Was Staged - CNET",
            "description": "The engineer reportedly says the car couldn't actually accelerate at green lights on its own as it appeared to in the video.",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=170156902",
            "urlToImage": null,
            "publishedAt": "2023-01-19T01:52:31Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "WDIV ClickOnDetroit"
            },
            "author": "Michael Liedtkeassociated Press",
            "title": "Elon Musk depicted as liar, visionary in Tesla tweet trial",
            "description": "Elon Musk was alternately depicted in a San Francisco courtroom as a liar who callously jeopardized the savings of “regular people” or a well-intentioned visionary.",
            "url": "https://www.clickondetroit.com/business/2023/01/18/opening-statements-begin-in-elon-musk-tesla-tweets-trial/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/VTWBFESGCBD4DMRMO265UFR4KU.jpg?_a=ATO2Bfe0",
            "publishedAt": "2023-01-19T01:52:08Z",
            "content": "SAN FRANCISCO Elon Musk was depicted Wednesday as either a liar who callously jeopardized the savings of regular people\" or a well-intentioned visionary as attorneys delivered opening statements at a… [+5741 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Reuters",
            "title": "Elon Musk trial: Lawyers clash over whether CEO lied in 2018 Tesla tweet",
            "description": "Tesla investor Glen Littleton is seeking damages on behalf of shareholders who traded the company#39;s stock in the days after Musk posted his plan to take the company private on Twitter in August 2018.",
            "url": "https://www.moneycontrol.com/news/world/elon-musk-trial-lawyers-clash-over-whether-ceo-lied-in-2018-tesla-tweet-9891481.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/04/Elon-Musk-1-770x433.jpg",
            "publishedAt": "2023-01-19T01:50:51Z",
            "content": "Tesla Inc CEO Elon Musk \"lied\" when he said that funding was \"secured\" to take the company private, a lawyer for Tesla investors said on Wednesday, as an attorney for Musk argued that the billionaire… [+3108 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bangkok Post"
            },
            "author": "AFP",
            "title": "Jury hears Musk told 'lies' that cost Tesla investors millions",
            "description": "SAN FRANCISCO: A lawyer for angry Tesla investors told a California courtroom on Wednesday that CEO Elon Musk \"lied\" about having funding in place to take the company private, costing his clients millions of dollars.",
            "url": "https://www.bangkokpost.com/business/2486237/jury-hears-musk-told-lies-that-cost-tesla-investors-millions",
            "urlToImage": "https://static.bangkokpost.com/media/content/20230119/c1_4609437_700.jpg",
            "publishedAt": "2023-01-19T01:45:00Z",
            "content": "SAN FRANCISCO: A lawyer for angry Tesla investors told a California courtroom on Wednesday that CEO Elon Musk \"lied\" about having funding in place to take the company private, costing his clients mil… [+2970 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "yahoo.com",
            "title": "Musk Has ‘More to Lose’ If He Tries to Skip Twitter Debt Payment",
            "description": "By all accounts — including Elon Musk’s — Twitter has more than enough money to make its first interest payments, expected to total about $300 million. • None Crypto Firm Genesis Is Preparing to File for Bankruptcy But with the payment date fast approaching, …",
            "url": "https://biztoc.com/x/8072f7e6e76126ba",
            "urlToImage": "https://c.biztoc.com/p/8072f7e6e76126ba/og.webp",
            "publishedAt": "2023-01-19T01:42:07Z",
            "content": "(Bloomberg) -- By all accounts including Elon Musks Twitter has more than enough money to make its first interest payments, expected to total about $300 million.None Crypto Firm Genesis Is Preparing … [+325 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Electrek"
            },
            "author": "Michelle Lewis",
            "title": "EV batteries alone could satisfy short-term grid storage demand – study",
            "description": "EV batteries alone could support the grid in the short term as the world transitions to renewables, according to new research published yesterday.\n more…\nThe post EV batteries alone could satisfy short-term grid storage demand – study appeared first on Electr…",
            "url": "https://electrek.co/2023/01/18/ev-batteries-alone-could-satisfy-short-term-grid-storage-demand-study/",
            "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/09/electric-school-buses-v2g-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-01-19T01:37:20Z",
            "content": "Electric school bus with V2G capabilities Source: Proterra\r\nEV batteries alone could support the grid in the short term as the world transitions to renewables, according to new research published yes… [+2801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "benzinga.com",
            "title": "Tesla, Amazon, bluebird, Netflix, Discover Financial: Why These 5 Stocks Are Drawing Investors' Attention Today",
            "description": "Major Wall Street indices closed over 1.2% lower on Wednesday, dragged by renewed concerns of a recession as U.S. retail sales declined by the most in 12 months, down 1.1% in December as against expectations of a fall of 0.8%. This is the second straight mont…",
            "url": "https://biztoc.com/x/4dd4e20f822ff8a8",
            "urlToImage": "https://c.biztoc.com/p/4dd4e20f822ff8a8/og.webp",
            "publishedAt": "2023-01-19T01:34:06Z",
            "content": "Major Wall Street indices closed over 1.2% lower on Wednesday, dragged by renewed concerns of a recession as U.S. retail sales declined by the most in 12 months, down 1.1% in December as against expe… [+302 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thehustle.co",
            "title": "Why do restaurant workers fund a lobbying group that keeps their wages low?",
            "description": "Last week, Tesla slashed prices on its lineup by up to 20%. The changes mean some models now qualify for... #tesla",
            "url": "https://biztoc.com/x/abe08f1b6714e210",
            "urlToImage": "https://c.biztoc.com/p/abe08f1b6714e210/og.webp",
            "publishedAt": "2023-01-19T01:34:05Z",
            "content": "Last week, Tesla slashed prices on its lineup by up to 20%. The changes mean some models now qualify for... \r\n#tesla\r\n This story appeared on thehustle.co."
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "AP",
            "title": "Elon Musk depicted as either liar or visionary in Tesla tweet trial",
            "description": "Nicholas Porritt, a lawyer representing Glen Littleton and other Tesla shareholders in the class-action case, promptly vilified Musk as he addressed jurors",
            "url": "https://www.business-standard.com/article/international/elon-musk-depicted-as-either-liar-or-visionary-in-tesla-tweet-trial-123011900063_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/21/full/1671589608-4754.jpg",
            "publishedAt": "2023-01-19T01:33:00Z",
            "content": "Elon Musk was depicted Wednesday as either a liar who callously jeopardised the savings of \"regular people\" or a well-intentioned visionary as attorneys delivered opening statements at a trial focuse… [+5037 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Xataka.com.mx"
            },
            "author": "Aleyda Ángel",
            "title": "El uso de internet OnStar en vehículos GM aumentó un 70% durante 2022; Facebook fue la app más usada a bordo de los autos",
            "description": "El uso de internet a través de los vehículos GM conectados OnStar creció un 70% durante 2022, respecto a las cifras de 2021, llegándose a consumir más de 770,000 GB, de acuerdo con General Motors.\n<!-- BREAK 1 -->\nOnStar es la plataforma tecnológica de GM que…",
            "url": "https://www.xataka.com.mx/automovil/uso-internet-onstar-vehiculos-gm-aumento-70-durante-2022-facebook-fue-app-usada-a-bordo-autos",
            "urlToImage": "https://i.blogs.es/39c418/onstar-internet/840_560.jpeg",
            "publishedAt": "2023-01-19T01:30:03Z",
            "content": "El uso de internet a través de los vehículos GM conectados OnStar creció un 70% durante 2022, respecto a las cifras de 2021, llegándose a consumir más de 770,000 GB, de acuerdo con General Motors.\r\nO… [+1632 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WDIV ClickOnDetroit"
            },
            "author": "Barbara Ortutayassociated Press",
            "title": "Twitter auctions off blue bird memorabilia, pricey furniture",
            "description": "Twitter auctions off blue bird memorabilia, pricey furnitureclickondetroit.com",
            "url": "https://www.clickondetroit.com/business/2023/01/18/twitter-auctions-off-blue-bird-memorabilia-pricey-furniture/",
            "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/OUP3WNFFEVGNZD55DMKCXIOLF4.jpg?_a=ATO2Bfe0",
            "publishedAt": "2023-01-19T01:27:04Z",
            "content": "A neon Twitter bird for $35,000, anyone? How about a used industrial kitchen mixer for a good price? Going once .... \r\nWhen Elon Musk wants to make a point, it can be pretty blunt. On the day he took… [+2320 chars]"
        },
        {
            "source": {
                "id": "australian-financial-review",
                "name": "Australian Financial Review"
            },
            "author": "Tony Boyd",
            "title": "Microsoft CEO Satya Nadella's moves to slash costs and step up ... - The Australian Financial Review",
            "description": "Satya Nadella’s moves to slash Microsoft’s costs and step up the internal use of artificial intelligence should send shockwaves through the technology universe.",
            "url": "https://www.afr.com/chanticleer/microsoft-reveals-ominous-dark-clouds-over-tech-20230119-p5cdqw",
            "urlToImage": "https://static.ffx.io/images/$zoom_0.3449%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_166/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_opinion_no_age_social_wm/f00146e9af97a6d3372382b7f2311fdcb6152bc1",
            "publishedAt": "2023-01-19T01:27:00Z",
            "content": "I would say all up in the world the inflation-adjusted, economic growth has been pretty weak and one of the things that Im optimistic about is digital technology can help boost it, and things like ar… [+4640 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "nbcnews.com",
            "title": "Lawyers spar over whether Elon Musk misled investors with his tweets",
            "description": "Opening arguments kicked off Wednesday in a trial that is pitting Tesla against shareholders accusing the company of misleading them over a tweet by Elon Musk stating funding had been \"secured\" to take the electric car company private. A lawyer for Tesla inve…",
            "url": "https://biztoc.com/x/76106a83c57eca9a",
            "urlToImage": "https://c.biztoc.com/p/76106a83c57eca9a/og.webp",
            "publishedAt": "2023-01-19T01:26:08Z",
            "content": "Opening arguments kicked off Wednesday in a trial that is pitting Tesla against shareholders accusing the company of misleading them over a tweet by Elon Musk stating funding had been \"secured\" to ta… [+329 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thehustle.co",
            "title": "Did TikTok help scale the tinned fish industry?",
            "description": "Last week, Tesla slashed prices on its lineup by up to 20%. The changes mean some models now qualify for... #tesla",
            "url": "https://biztoc.com/x/57b70f80b6196e1c",
            "urlToImage": "https://c.biztoc.com/p/57b70f80b6196e1c/og.webp",
            "publishedAt": "2023-01-19T01:20:06Z",
            "content": "Last week, Tesla slashed prices on its lineup by up to 20%. The changes mean some models now qualify for... \r\n#tesla\r\n This story appeared on thehustle.co."
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thehustle.co",
            "title": "Meta’s board wants new nudity guidelines",
            "description": "Last week, Tesla slashed prices on its lineup by up to 20%. The changes mean some models now qualify for... #tesla",
            "url": "https://biztoc.com/x/afd2d5e4ad648ed5",
            "urlToImage": "https://c.biztoc.com/p/afd2d5e4ad648ed5/og.webp",
            "publishedAt": "2023-01-19T01:20:05Z",
            "content": "Last week, Tesla slashed prices on its lineup by up to 20%. The changes mean some models now qualify for... \r\n#tesla\r\n This story appeared on thehustle.co."
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Youkyung Lee",
            "title": "Tesla Drops Out of Top 10 Stocks in $1.3 Billion Korean EV Fund",
            "description": "(Bloomberg) -- Tesla Inc. dropped out of the top 10 holdings of a South Korean electric-vehicle mutual fund for the first time ever amid its epic selloff...",
            "url": "https://finance.yahoo.com/news/tesla-drops-top-10-stocks-011730173.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_technology_68/ca457eb75b9b595ef047dfeb1f074110",
            "publishedAt": "2023-01-19T01:17:30Z",
            "content": "(Bloomberg) -- Tesla Inc. dropped out of the top 10 holdings of a South Korean electric-vehicle mutual fund for the first time ever amid its epic selloff last year.\r\nMost Read from Bloomberg\r\nThe Kor… [+1767 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wnd.com"
            },
            "author": "Samantha Chang, The Western Journal",
            "title": "Al Roker spotted in humiliating battle with his malfunctioning Tesla on streets of NYC: Report",
            "description": "Al Roker, the weatherman on NBC's \"Today\" show, and his ABC News broadcaster wife, Deborah Roberts, have experienced some unsettling mishaps with their luxury electric SUV — and this weekend was no exception. After Sunday brunch at a posh downtown Manhattan r…",
            "url": "https://www.wnd.com/2023/01/al-roker-spotted-humiliating-battle-malfunctioning-tesla-streets-nyc-report/",
            "urlToImage": "https://www.wnd.com/wp-content/uploads/2013/10/Al-Roker-600.jpg",
            "publishedAt": "2023-01-19T01:11:29Z",
            "content": "Al Roker, the weatherman on NBC's \"Today\" show, and his ABC News broadcaster wife, Deborah Roberts, have experienced some unsettling mishaps with their luxury electric SUV and this weekend was no exc… [+2583 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Cathie Wood's ARK Investment bought 392.6K shares of Invitae today",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647281/NVTA-Cathie-Woods-ARK-Investment-bought-K-shares-of-Invitae-today",
            "urlToImage": "https://thefly.com/images/meta/hotstocks.jpg",
            "publishedAt": "2023-01-19T01:06:59Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Cathie Wood's ARK Investment bought 156.6K shares of Compass Pathways today",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647280/CMPS-Cathie-Woods-ARK-Investment-bought-K-shares-of-Compass-Pathways-today",
            "urlToImage": "https://thefly.com/images/meta/hotstocks.jpg",
            "publishedAt": "2023-01-19T01:06:29Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Cathie Wood's ARK Investment bought 504.7K shares of Cerus today",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647279/CERS-Cathie-Woods-ARK-Investment-bought-K-shares-of-Cerus-today",
            "urlToImage": "https://thefly.com/images/meta/hotstocks.jpg",
            "publishedAt": "2023-01-19T01:05:58Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Cathie Wood's ARK Investment bought 50K shares of Tesla today",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647278/TSLA-Cathie-Woods-ARK-Investment-bought-K-shares-of-Tesla-today",
            "urlToImage": "https://thefly.com/images/meta/hotstocks.jpg",
            "publishedAt": "2023-01-19T01:05:22Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Bluebird Bio 20M share Secondary priced at $6.00",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647277/BLUE-Bluebird-Bio-M-share-Secondary-priced-at-",
            "urlToImage": "https://thefly.com/images/meta/syndicate.jpg",
            "publishedAt": "2023-01-19T01:04:00Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "Informa upgraded to Conviction Buy from Buy at Goldman Sachs",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647276/IFJPY-Informa-upgraded-to-Conviction-Buy-from-Buy-at-Goldman-Sachs",
            "urlToImage": "https://thefly.com/images/meta/streetresearch_upgrade.jpg",
            "publishedAt": "2023-01-19T01:01:55Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefly.com"
            },
            "author": null,
            "title": "RTL Group downgraded to Neutral from Buy at Goldman Sachs",
            "description": "See the rest of the story here.\n\nthefly.com provides the latest financial news as it breaks. Known as a leader in market intelligence, The Fly's real-time, streaming news feed keeps individual investors, professional money managers, active traders, and corpor…",
            "url": "https://thefly.com/permalinks/entry.php/id3647275/RGLXY-RTL-Group-downgraded-to-Neutral-from-Buy-at-Goldman-Sachs",
            "urlToImage": "https://thefly.com/images/meta/streetresearch_downgrade.jpg",
            "publishedAt": "2023-01-19T00:59:20Z",
            "content": "Tesla (TSLA) CEO Elon…\r\nTesla (TSLA) CEO Elon Musk is having his social media company Twitter (TWTR) auction off household items and other supplies from its offices in San Francisco, wrote Alyssa Luk… [+413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Activistpost.com"
            },
            "author": "Activist Post",
            "title": "DOE Announces Online Tool that Identifies Locations Where U.S. Should (and Shouldn’t) Install Solar Panels, Wind Turbines, and EV Charging Stations",
            "description": "By B.N. Frank Experts continue to warn about dangers as well as shortcomings associated with controversial “clean energy” and/or “green energy” technology, infrastructure, and operation. ...\nDOE Announces Online Tool that Identifies Locations Where U.S. Shoul…",
            "url": "https://www.activistpost.com/2023/01/doe-announces-online-tool-that-identifies-locations-where-u-s-should-and-shouldnt-install-solar-panels-wind-turbines-and-ev-charging-stations.html",
            "urlToImage": "https://www.activistpost.com/wp-content/uploads/2023/01/us-1024x647-1.jpg",
            "publishedAt": "2023-01-19T00:58:25Z",
            "content": "By B.N. Frank\r\nExperts continue to warn about dangers as well as shortcomings associated with controversial clean energy and/or green energy technology, infrastructure, and operation.  Opposition to … [+4280 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wnd.com"
            },
            "author": "Elizabeth Stauffer, The Western Journal",
            "title": "VIP driver at Davos says he's not allowed to drive elites in electric vehicles, reveals why",
            "description": "As the masters of the universe convened in Davos, Switzerland, on Monday for the annual World Economic Forum, one of the VIP drivers for this lofty event, who did not want to show his face on camera, told a reporter he is not allowed to drive the elites in el…",
            "url": "https://www.wnd.com/2023/01/wef-vip-driver-says-not-allowed-drive-elites-electric-vehicles-reveals/",
            "urlToImage": "https://www.wnd.com/wp-content/uploads/2022/07/electric-cars-vehicles-charging-station-recharging-EV-fuel-environmental-green-new-deal-.jpg",
            "publishedAt": "2023-01-19T00:57:31Z",
            "content": "As the masters of the universe convened in Davos, Switzerland, on Monday for the annual World Economic Forum, one of the VIP drivers for this lofty event, who did not want to show his face on camera,… [+3169 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "seattlepi.com"
            },
            "author": "By MICHAEL LIEDTKE, AP Technology Writer",
            "title": "Elon Musk depicted as liar, visionary in Tesla tweet trial",
            "description": "SAN FRANCISCO (AP) - Elon Musk was depicted Wednesday as either a liar who callously jeopardized the savings of \"regular people\" or a well-intentioned visionary as attorneys delivered opening statements at a trial focused on a Tesla buyout that never happened…",
            "url": "https://www.seattlepi.com/business/article/Opening-statements-begin-in-Elon-Musk-Tesla-17725180.php",
            "urlToImage": "https://s.hdnux.com/img/modules/siteheader/brand.png",
            "publishedAt": "2023-01-19T00:56:33Z",
            "content": "A Tesla car is parked in a lot across the street from a federal courthouse in San Francisco, Wednesday, Jan. 18, 2023. Elon Musk was depicted Wednesday as either a liar who callously jeopardized the … [+9470 chars]"
        }
    ]
    static defaultProps = {
        country: "us",
        pageSize: 3,
        category: "general"
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };

    capitalizeFirstLetter = (str) => {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    constructor(props) {
        super(props);
        console.log("I am a constructor from news component")
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }
    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaa2c34c84f54a7aa75cf22caa8e3dea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.props.setProgress(10);
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaa2c34c84f54a7aa75cf22caa8e3dea&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    handlePrevClick = async () => {
        console.log("Prev Btn");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaa2c34c84f54a7aa75cf22caa8e3dea&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // // this.setState({ articles: parsedData.articles });
        // this.setState({
        //     page:this.state.page-1,
        //     articles: parsedData.articles,
        //     loading:false
        // })
        this.setState({ page: this.state.page - 1 });
        this.updateNews();

    }
    handleNextClick = async () => {
        console.log("Next Btn");
        // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)) )
        // {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaa2c34c84f54a7aa75cf22caa8e3dea&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //     this.setState({loading:true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     console.log(parsedData);
        //     // this.setState({ articles: parsedData.articles });
        //     this.setState({
        //         page:this.state.page+1,
        //         articles: parsedData.articles,
        //         loading:false 
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }
    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eaa2c34c84f54a7aa75cf22caa8e3dea&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({page:this.state.page + 1})
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            // loading: false
        });
      };
    render() {
        return (
            <>
                <h1 className="text-center" style={{ margin: "25px 0px",marginTop:"64px"}}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                { this.state.loading && <Spinner1/>}             
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner1/>}
                >
                    <div className="container my-3">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 91) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://images.indianexpress.com/2023/01/Apple-sale.jpg"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}

            </>
        )
    }
}

export default News
