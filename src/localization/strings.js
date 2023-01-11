const strings = {
  swedish: {
    header: {
      rsvp: "OSA",
      ourStory: "Vår historia",
      information: "Information",
      logOut: "Logga ut",
    },
    addGuests: {
      header: "Anmäl gäster",
      firstName: "Förnamn",
      lastName: "Efternamn",
      foodPreferences: "Matpreferenser",
      attendingDates: "Deltagande",
      attendingDatesPlaceholder: "Välj datum...",
      takesBussPlaceholder: "Välj...",
      fridayToSunday: "Fredag - söndag (15/8 - 17/8)",
      saturdayToSunday: "Lördag - söndag (16/8 - 17/8)",
      yes: "Ja",
      no: "Nej",
      other: "Övrigt",
      addGuest: "Lägg till gäst",
      takesBuss: "Önskar ta buss från Stockholm",
    },
    ourStory: {
      header: "Vår historia",
      story: [
        {
          title: "20 aug 2021",
          text:
            "Its a match! Pauline har ställt in Tinders radie på två km för att hon inte orkar träffa någon " +
            "som bor allt för långt bort. Patrik hälsar på en kompis i Aspudden och matchar med Pauline innan han " +
            "beger sig hemåt till Åkersberga 38km bort. Efter mycket swipande blev det en match!",
        },
        {
          title: "Onsdag 25 augusti",
          text:
            '"Ses på en kaffe idag?" Första dejten blev en spontan kaffe to-go under ett träd i ' +
            "Vasaparken. Det var en lyckad dejt som ledde till ytterligare dejter både på fredagen och söndagen.",
        },
        {
          title: "20 aug 2021",
          text: "I samband med att Pauline hjälper Patrik att installera en ny spis skadar sig Pauline på fingret och får en otäck infektion. Efter att tillsammans ha gått igenom proccessen som operation och vistelse på akuten innebar konsterade Pauline och Patrik att dom nog var ett par.",
        },
        {
          title: "Onsdag 25 augusti",
          text: "Patrik och Pauline bestämmer sig för att åka till Lissabon tillsammans. En väldbehövd resa efter allt strul med finger-infektioner.",
        },
        {
          title: "Onsdag 25 augusti",
          text: "Pauline bjuder Patrik på en weekend i Mariestad. Beslutet om att gifta sig är nu taget och tanken var att Mariestad kunde vara en möjlig plats för detta. På kvällen efter en romantisk middag beställer Patrik och Pauline ringarna.",
        },
        {
          title: "Onsdag 25 augusti",
          text: "Ringarna anländer på posten och Partik och Pauline friar till varandra utanför ICA Kvantum i Åkersberga.",
        },
        {
          title: "Onsdag 25 augusti",
          text: "Patrik och Pauline bestämmer sig för att försöka skaffa barn. En vecka efter beslutet är Pauline gravid.",
        },
        {
          title: "Onsdag 25 augusti",
          text: "Lägenheterna är sålda och efter att ha mellanlandat i Hornstull och sedan Åkersberga flyttar Patrik och Pauline in tillsammans på Drejargatan 8.",
        },
      ],
    },
    information: {
      header: "Information",
      staying: {
        title: "Boende",
        text:
          "Ni väljer om ni vill stanna en natt eller två på Lidö. Här bor man antingen intill värdshuset där festen är\n" +
          "eller i gäststugor 7 min från värdshuset. Vi kommer att boka boende till er när ni anmält vilka dagar ni\n" +
          "närvarar. En natt kostar kring 700 kr/person och 2 nätter 1400 kr. Dessa priser kan komma att justeras något då värdshuset inte satt de slutgiltiga priserna för året. Frukostbuffé, städning, sänglinne och handdukar\n" +
          "ingår. Det går att hyra spjälsäng.",
      },
      location: {
        title: "Plats",
        text: "Bröllopet kommer att vara på Lidö värdshus, på den vackra skärgårdsön Lidö en bit utanför Norrtälje. Hit tar man sig lättast med bil till Räfsnäs brygga och därefter passbåt till Lidö. En buss till Räfsnäs brygga kommer att ordnas ifrån Stockholm för de som vill.",
      },
      children: {
        title: "Barn",
        text: "Denna dag firar vi gärna med våra vuxna vänner och släktningar. Ammande barn är givetvis välkomna.",
      },
      clothes: {
        title: "Klädsel",
        text: "Klädkod på bröllopet är mörk kostym.",
      },
      gifts: {
        title: "Presenter",
        text: 'Den största gåvan vi kan önska är att ni närvarar under vår bröllopshelg. Önskar ni ändå ge någonting så får ni gärna skicka ett biddrag till <a href="https://www.hjart-lungfonden.se/stod-oss/gava/">hjärt of lungfonden</a> - som är en hjälporganisation som står oss nära.',
      },
      toastMaster: {
        title: "Toastmaster",
        text: "Patriks bror Jonas kommer att vara toastmaster på bröllopet. Om ni önskar hålla tal eller framföra något annat - vänligen kontakta Jonas.",
      },
    },
  },
  english: {
    header: {
      rsvp: "RSVP",
      ourStory: "Our story",
      information: "Information",
      logOut: "Log out",
    },
    addGuests: {
      header: "Add guests",
      firstName: "First name",
      lastName: "Last name",
      foodPreferences: "Food preferences",
      attendingDates: "Attending dates",
      attendingDatesPlaceholder: "Choose dates...",
      fridayToSunday: "Friday - sunday (15/8 - 17/8)",
      saturdayToSunday: "Saturday - sunday (16/8 - 17/8)",
      other: "Other information",
      addGuest: "Add guest",
    },
    ourStory: {
      header: "Our story",
      story: [
        {
          title: "20 aug 2021",
          text:
            "Its a match! Pauline har ställt in tinders radie på två km för att hon inte orkar träffa någon" +
            "som bor allt för långt bort. Patrik hälsar på en kompis i Aspudden och lyckas matcha med Pauline innan han" +
            "beger sig hemåt till Åkersberga 38km bort. Efter mycket swipande blev det en match!",
        },
        {
          title: "Onsdag 25 augusti",
          text:
            '"Ses på en kaffe idag?" Första dejten blev en spontan kaffe to-go under ett träd i' +
            "Vasaparken. Det var en lyckad dejt som ledde till ytterligare dejter både på fredagen och söndagen.",
        },
        {
          title: "20 aug 2021",
          text:
            "Its a match! Pauline har ställt in tinders radie på två km för att hon inte orkar träffa någon" +
            "som bor allt för långt bort. Patrik hälsar på en kompis i Aspudden och lyckas matcha med Pauline innan han" +
            "beger sig hemåt till Åkersberga 38km bort. Efter mycket swipande blev det en match!",
        },
        {
          title: "Onsdag 25 augusti",
          text:
            '"Ses på en kaffe idag?" Första dejten blev en spontan kaffe to-go under ett träd i' +
            "Vasaparken. Det var en lyckad dejt som ledde till ytterligare dejter både på fredagen och söndagen.",
        },
      ],
    },
    information: {
      header: "Information",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod sagittis porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur congue nisl nec nulla porta bibendum. Sed cursus finibus lorem eget aliquam. Phasellus sagittis orci auctor semper interdum. Proin et diam leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et tempus dolor, vel feugiat erat.",
    },
  },
};

export default strings;
