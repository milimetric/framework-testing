// make client side collections
Folders = new Meteor.Collection(null);
FolderEmails = new Meteor.Collection(null);

Meteor.startup(function(){
    // insert some test data
    inboxId = Folders.insert(new EmailFolder('inbox'));
    sentId = Folders.insert(new EmailFolder('sent'));
    archiveId = Folders.insert(new EmailFolder('archive'));

    FolderEmails.insert(new EmailMessage(inboxId, 'hey', 'Sir Charles Villiers Stanford (30 September 1852 – 29 March 1924) was an Irish composer, music teacher, and conductor. Born to a well-off and highly musical family in Dublin, Stanford was educated at the University of Cambridge before studying music in Leipzig and Berlin. He was instrumental in raising the status of the Cambridge University Musical Society, attracting international stars to perform with it. While still an undergraduate, Stanford was appointed organist of Trinity College, Cambridge. In 1882, aged 29, he was one of the founding professors of the Royal College of Music, where he taught composition for the rest of his life. From 1887 he was also the professor of music at Cambridge. As a teacher, Stanford was sceptical about modernism, and based his instruction chiefly on classical principles as exemplified in the music of Brahms. Among his pupils were rising composers whose fame went on to surpass his own, such as Gustav Holst and Ralph Vaughan Williams. As a conductor, Stanford held posts with the Bach Choir and the Leeds triennial music festival.'));
    FolderEmails.insert(new EmailMessage(inboxId, 'good morning', 'Kraków (Polish pronunciation: [ˈkrakuf] ( listen)) also Cracow, or Krakow (English /ˈkrækaʊ/), is the second largest and one of the oldest cities in Poland. Situated on the Vistula River (Polish: Wisła) in the Lesser Poland region, the city dates back to the 7th century.[1] Kraków has traditionally been one of the leading centres of Polish academic, cultural, and artistic life and is one of Poland\'s most important economic hubs. It was the capital of Poland from 1038 to 1569; the Polish–Lithuanian Commonwealth from 1569 to 1596;[2] the Grand Duchy of Kraków from 1846 to 1918; and Kraków Voivodeship from the 14th century to 1999. It is now the capital of the Lesser Poland Voivodeship.'));
    FolderEmails.insert(new EmailMessage(inboxId, 'weather report', 'Hurricane Sandy, the largest Atlantic hurricane in diameter on record,[1][2] was a late-season tropical cyclone that affected Jamaica, Cuba, the Bahamas, Haiti, the Dominican Republic, and the eastern seaboard of the United States, reaching to the area south of the Great Lakes Region of the United States and Eastern Canada. The 18th tropical cyclone, 18th named storm, and 10th hurricane of the 2012 Atlantic hurricane season, Sandy developed from an elongated tropical wave in the western Caribbean Sea on October 22. It became a tropical depression, quickly strengthened, and was upgraded to a tropical storm six hours later. Sandy moved slowly northward toward the Greater Antilles and gradually strengthened.'));

    FolderEmails.insert(new EmailMessage(sentId, 'RE:hey', 'cool, thx'));
});
