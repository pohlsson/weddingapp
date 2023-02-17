const strings = {
  swedish: {
    header: {
      pageHeader: "Patrik och Paulines bröllop",
      year: "15-17 september 2023",
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
      addGuest: "Anmäl gäst",
      takesBuss: "Wants to take the buss on Friday",
    },
    ourStory: {
      header: "Vår historia",
      story: [
        {
          title: "20 augusti 2021",
          text: "It's a match! Trots det långa avståndet mellan Åkersberga och Aspudden lyckas dom matcha när Patrik hälsar på hos en kompis i Aspudden.",
        },
        {
          title: "25 augusti 2021",
          text:
            '"Ses på en kaffe idag?" Första dejten blev en spontan kaffe to-go under ett träd i ' +
            "Vasaparken på en onsdag eftermiddag. Det var en lyckad dejt som ledde till ytterligare dejter både på fredagen och söndagen.",
        },
        {
          title: "17 september 2021",
          text: "I samband med att Pauline hjälper Patrik att installera en ny spis skadar sig Pauline på fingret och får en otäck infektion. Efter att tillsammans ha gått igenom proccessen som operation och vistelse på akuten innebar konsterade Pauline och Patrik att dom nog var ett par.",
        },
        {
          title: "2 oktober 2021",
          text: "Patrik och Pauline bestämmer sig för att åka till Lissabon tillsammans. En väldbehövd resa efter allt strul med finger-infektioner.",
        },
        {
          title: "25 februari 2022",
          text: "På en romantisk weekend i Mariestad tas beslutet om att gifta sig.",
        },
        {
          title: "3 april 2022",
          text: "Ringarna anländer på posten och Partik och Pauline friar till varandra utanför ICA Kvantum i Åkersberga.",
        },
        {
          title: "30 juli 2022",
          text: "Patrik flyttar in hos Pauline i Hornstull och det inleds med en uthomsbio i Tanto.",
        },
        {
          title: "4 augusti 2022",
          text: "Två kommer bli tre, vi ska få barn!",
        },
        {
          title: "8 augusti 2022",
          text: "Vandring i värmen på Mallorca.",
        },
        {
          title: "31 december 2022",
          text: "Det nya året firas i Åkersberga och snart flyttar Pauline och Patrik till deras lägenhet i Birkastan.",
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
          "närvarar. Boende kostar 750 kr/natt för ett dubbelrum. Det tillkommer även 195kr/person för middag om man kommer redan på fredagen. Frukostbuffé, städning, sänglinne och handdukar\n" +
          "ingår.",
      },
      location: {
        title: "Plats",
        text: `Bröllopet äger rum på Lidö värdshus, på den vackra skärgårdsön Lidö en bit utanför Norrtälje. Information om hur man tar sig dit finns på <a href="https://lidovardshus.com/hitta-hit/">Lidö värdshus hemsida</a>. Vi kommer att ordna en båt från Räfsnäs brygga till Lidö på fredagen och en på lördagen. Information om tider kommer senare.`,
      },
      children: {
        title: "Barn",
        text: "Denna dag firar vi gärna med våra vuxna vänner och släktingar. Ammande barn är givetvis välkomna.",
      },
      clothes: {
        title: "Klädsel",
        text: "Klädkod för bröllopet är mörk kostym.",
      },
      gifts: {
        title: "Presenter",
        text: 'Den största gåvan vi kan önska är att ni närvarar under vår bröllopshelg. Önskar ni ändå ge någonting så får ni gärna skicka ett bidrag till vår <a href="https://www.hjart-lungfonden.se/Egen-Insamling/insamling/pauline-patrik-brollopsinsamling">insamling</a> hos Hjärt-Lungfonden, en hjälporganisation som står oss nära.',
      },
      program: {
        title: "Program",
        text:
            '\n' +
            '<b>Fredag 15/9</b></br>' +
            'Båt från Räfnäs brygga 17:00</br>' +
            'Middag</br>' +
            'Bastu och badtunna</br>' +
            '</br>' +
            '<b>Lördag 16/9</b></br>' +
            'Lunch 12:00</br>' +
            'Båt från Räfnäs brygga 13:30</br>' +
            'Vigselakt 15.00</br>' +
            'Bröllopsmiddag</br>' +
            '</br>' +
            '<b>Söndag 17/9</b></br>' +
            'Frukost 08:30-10:00</br>' +
            'Båt till Räfnäs brygga 11:30</br></br>' +
            'Tiderna är preliminära och kan komma att ändras närmare bröllopet.'
        ,
      },
      toastMaster: {
        title: "Toastmaster",
        text: "Paulines bror Philip kommer att vara toastmaster på bröllopet. Om ni önskar hålla tal eller framföra något annat - vänligen kontakta Philip.",
      },
    },
  },
  english: {
    header: {
      pageHeader: "Patrik and Pauline's wedding",
      year: "15-17 September 2023",
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
      yes: "Yes",
      no: "No",
      other: "Other",
      addGuest: "Add guest",
      takesBuss: "T",
    },
    ourStory: {
      header: "Our story",
      story: [
        {
          title: "20 August 2021",
          text: "It's a match! Despite the long distance between Åkersberga and Aspudden, they manage to match when Patrik visits a friend.",
        },
        {
          title: "25 August 2021",
          text:
            '"See you for a coffee today?" The first date was a spontaneous coffee to-go under a tree in ' +
            "a park on a Wednesday afternoon. It was a successful date which led to further dates both on Friday and Sunday.",
        },
        {
          title: "17 September 2021",
          text: "When Pauline was helping Patrik install a new stove, Pauline injures her finger and gets a nasty infection. After the surgery, Pauline and Patrik figured that they were probably a couple.",
        },
        {
          title: "2 October 2021",
          text: "Patrik and Pauline decide to go to Lisbon together. A much-needed trip after all the fuss with finger infections.",
        },
        {
          title: "25 Februari 2022",
          text: "On a romantic weekend in Mariestad, they decide to get married.",
    },
        {
          title: "3 April 2022",
          text: "The rings arrive in the mail and Partik and Pauline propose to each other outside the mail office in Åkersberga.",
        },
        {
          title: "30 Juli 2022",
          text: "Patrik moves in with Pauline in Hornstull, and it begins with an outdoor cinema in the park.",
        },
        {
          title: "4 August 2022",
          text: "Two will be three, Patrik and Pauline are expecting!",
        },
        {
          title: "8 August 2022",
          text: "Hiking in the heat of Mallorca.",
        },
        {
          title: "31 December 2022",
          text: "The new year is celebrated in Åkersberga, and soon Pauline and Patrik will move to their new apartment in Birkastan.",
        },
      ],
    },
    information: {
      header: "Information",
      staying: {
        title: "Accomodation",
        text:
          "You choose whether you want to stay one night or two on Lidö. Here you either live next to the inn where the party is,\n" +
          "or in guest cabins 7 minutes from the inn. We will book accommodation for you when you have notified which days you\n" +
          "attend. One room costs SEK 750 and you can stay up to two people in one room. Dinner on Friday is SEK 195/person if you decide to come on Friday. Breakfast buffet, cleaning, bed linen and towels\n" +
          "are included.",
      },
      location: {
        title: "Location",
        text: `The wedding will be held at Lidö värdshus, one hour from Stockholm on the beautiful archipelago island of Lidö. Information on how to get there can be found on <a href="https://lidovardshus.com/hitta-hit/">Lidö värdshus's home page</a>. We will arrange a boat from "Räfnäs brygga" to Lidö on Friday, and one on Saturday. More information regarding times will come later.`,
      },
      children: {
        title: "Children",
        text: "We like to celebrate this day with our adult friends and relatives. Infants are of course welcome.",
      },
      clothes: {
        title: "Dress code",
        text: "Dress code at the wedding is Formal.",
      },
      gifts: {
        title: "Gifts",
        text: 'The greatest gift we could wish for is for you to be present during our wedding weekend. If you still wish to give us something, please send a donation to <a href="https://www.hjart-lungfonden.se/Egen-Insamling/insamling/pauline-patrik-brollopsinsamling">Hjärt-Lungfonden</a> - which is an aid organization close to us.',
      },
      program: {
        title: "Program",
        text: '<b>Friday 15/9</b></br>' +
            'Boat from Räfnäs brygga 17:00</br>' +
            'Dinner</br>' +
            'Sauna and hot tub</br>' +
            '</br>' +
            '<b>Saturday 16/9</b></br>' +
            'Lunch 12:00</br> Boat from Räfnäs brygga 13:30 </br>' +
            'Wedding ceremony 15:00</br>' +
            'Wedding dinner</br>' +
            '</br>' +
            '<b>Sunday 17/9</b></br>' +
            'Breakfast 08:30-10:00 </br>' +
            'Boat to Räfnäs brygga 11:30</br></br>' +
            'All times are preliminary and subject to change.'
      },
      toastMaster: {
        title: "Toastmaster",
        text: "Pauline's brother Philip will be toastmaster at the wedding. If you wish to give a speech or perform something else - please contact Philip.",
      },
    },
  },
};

export default strings;
