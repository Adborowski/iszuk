const allSounds = [
  {
    id: "x1",
    type: "music",
    albumId: "120koni",
    label: "Evil Szwedzka",
    sound: require("../assets/sounds/song-1.mp3"),
  },
  {
    id: "s1",
    type: "sample",
    label: "Fiesta",
    sound: require("../assets/sounds/tiszke-1.mp3"),
  },
  {
    id: "s2",
    type: "sample",
    label: "Zajebała",
    sound: require("../assets/sounds/tiszke-2.mp3"),
  },
  {
    id: "s3",
    type: "sample",
    label: "Farba",
    sound: require("../assets/sounds/tiszke-3.mp3"),
  },
  {
    id: "s4",
    type: "sample",
    label: "Nie-e",
    sound: require("../assets/sounds/tiszke-4.mp3"),
  },
  {
    id: "sx1",
    type: "sample",
    label: "Sranie",
    sound: require("../assets/sounds/tiszke-5.mp3"),
  },
  {
    id: "sx2",
    type: "sample",
    label: "Srakulinka",
    sound: require("../assets/sounds/tiszke-6.mp3"),
  },
  {
    id: "s5",
    type: "sample",
    label: "Ogórku",
    sound: require("../assets/sounds/tiszke-7.mp3"),
  },
  {
    id: "s6",
    type: "sample",
    label: "Bajeczko",
    sound: require("../assets/sounds/tiszke-8.mp3"),
  },
  {
    id: "s7",
    type: "sample",
    label: "Damianku",
    sound: require("../assets/sounds/tiszke-9.mp3"),
  },
  {
    id: "s8",
    type: "sample",
    label: "Slap Hehe",
    sound: require("../assets/sounds/tiszke-10.mp3"),
  },
  {
    id: "s9",
    type: "sample",
    label: "Rekururu",
    sound: require("../assets/sounds/tiszke-11.mp3"),
  },
  {
    id: "s10",
    type: "sample",
    label: "Zostaw",
    sound: require("../assets/sounds/tiszke-13.mp3"),
  },
  {
    id: "s11",
    type: "sample",
    label: "Sara Hehe",
    sound: require("../assets/sounds/tiszke-14.mp3"),
  },
  {
    id: "s12",
    type: "sample",
    label: "O Co Chodzi",
    sound: require("../assets/sounds/tiszke-16.mp3"),
  },
  {
    id: "s13",
    type: "sample",
    label: "Telewizor",
    sound: require("../assets/sounds/tiszke-17.mp3"),
  },
  {
    id: "s14",
    type: "sample",
    label: "Ziew A",
    sound: require("../assets/sounds/tiszke-18.mp3"),
  },
  {
    id: "s15",
    type: "sample",
    label: "Ziew B",
    sound: require("../assets/sounds/tiszke-19.mp3"),
  },
  {
    id: "s16",
    type: "sample",
    label: "Ziew C",
    sound: require("../assets/sounds/tiszke-20.mp3"),
  },
  {
    id: "s17",
    type: "sample",
    label: "Daj Światła Trochę",
    sound: require("../assets/sounds/tiszke-21.mp3"),
  },
  {
    id: "s18",
    type: "sample",
    label: "Tam Jest Ładnie",
    sound: require("../assets/sounds/tiszke-22.mp3"),
  },
  {
    id: "s19",
    type: "sample",
    label: "Śmieszny Ty",
    sound: require("../assets/sounds/tiszke-23.mp3"),
  },
  {
    id: "s20",
    type: "sample",
    label: "Ściema",
    sound: require("../assets/sounds/tiszke-24.mp3"),
  },
  {
    id: "s21",
    type: "sample",
    label: "Miał Farta",
    sound: require("../assets/sounds/tiszke-25.mp3"),
  },
];

export let sounds = allSounds;

export let samples = allSounds.filter((sound) => sound.type === "sample");

const isSorted = true; // set false for dev; alphabetical order
if (isSorted) {
  sounds = allSounds.sort((a, b) => {
    let textA = a.label;
    let textB = b.label;
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}

export const albums = [
  {
    id: "120koni",
    title: "120 Koni",
    imageUrl: require("../assets/120koni.jpg"),
  },
];
