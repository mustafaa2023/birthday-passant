/**
 * ============================================================
 * PHOTOS CONFIG — All photos live here
 * Photos are at: src/assets/1.jpeg … 66.jpeg
 * ============================================================
 */

// ─── Eager-load all photos via Vite glob ───────────────────
// This imports every .jpeg from src/assets and gives a map:
//   { './assets/1.jpeg': { default: '/src/assets/1.jpeg' }, … }
const allPhotos = import.meta.glob('./assets/*.jpeg', { eager: true });

// Helper: get the resolved URL for photo number n
function p(n) {
  const mod = allPhotos[`./assets/${n}.jpeg`];
  if (!mod) {
    console.warn(`Photo ${n}.jpeg not found`);
    return '';
  }
  return mod.default;
}

// ─────────────────────────────────────────────────────────────
// GALLERY — 50 photos (avoiding photo 48 and not too many desk
// ones). Captions spread naturally through the grid.
// Desk photos: 1,4,5,6,8,11,12,13,16,20,21,22,34,36,37,38,43,50,55,58
// We include just 5 desk photos in the gallery (4,5,8,11,20)
// ─────────────────────────────────────────────────────────────
const galleryOrder = [
  3, 25, 9, 41, 17, 62, 14, 30, 57, 2,
  46, 19, 33, 65, 23, 39, 10, 53, 27, 60,
  15, 44, 28, 7, 49, 18, 64, 35, 56, 24,
  42, 51, 29, 59, 40, 32, 66, 26, 47, 31,
  45, 63, 54, 52, 61, 4,  5,  8,  11, 20,
];

// 12 captions assigned to specific positions (0-indexed) in the gallery
const galleryCaptions = {
  3:  "You're stronger than you ever were before",
  8:  "Come on, stop snacks and let's hit the gym or run",
  12: "I should've put BosBos name on the T-shirt instead of Passant, you know",
  16: "Just don't stop smiling",
  20: "As long as I am alive, never hesitate to talk to me",
  24: "No doubt, our debates are the best",
  28: "Tahrir Campus needs us back for sure",
  32: "Maybe next time, we will make an accident with a motorbike",
  36: "You're only 24, don't overage yourself",
  40: "Graduation is close, be glad, no mid or final anymore",
  44: "That's one of my favorites",
  48: "Trust me, nobody cares, do what you want!",
};

export const galleryPhotos = galleryOrder.map((num, i) => ({
  id: i + 1,
  url: p(num),
  caption: galleryCaptions[i] || '',
}));


// ─────────────────────────────────────────────────────────────
// MESSY DESK — exactly these 20 photos, in scatter order
// ─────────────────────────────────────────────────────────────
const deskNums = [1, 4, 5, 6, 8, 11, 12, 13, 16, 20, 21, 22, 34, 36, 37, 38, 43, 50, 55, 58];

export const deskPhotos = deskNums.map((num, i) => ({
  id: i + 1,
  url: p(num),
  caption: '',
}));


// ─────────────────────────────────────────────────────────────
// OUR STORY — 14 milestones
// ─────────────────────────────────────────────────────────────
export const storyMilestones = [
  {
    id: 1,
    date: 'The start',
    title: 'The start',
    text: 'We meet that day in the villa for the film, didn\'t know that you\'re Aucian, neither I knew you were. I guessed your major correctly that day, and it was the moment when the name "Passant" appeared in my life.',
    img: p(24),
    side: 'left',
  },
  {
    id: 2,
    date: 'We became friends!',
    title: 'We became friends!',
    text: 'Days went incredibly fast because it was the end of Spring 2025, and we met many times in quite a short time period, then we started becoming more of good friends.',
    img: p(56),
    side: 'right',
  },
  {
    id: 3,
    date: 'Summer party',
    title: 'Summer party',
    text: 'That was the day I met your brother and many of your friends, it was a nice and energetic day. Then we stayed at building one afterwards — me, you, and Rawan.',
    img: p(2),
    side: 'left',
  },
  {
    id: 4,
    date: "Let's not forget the Billiard game",
    title: "Let's not forget the Billiard game",
    text: '',
    img: p(6),
    side: 'right',
  },
  {
    id: 5,
    date: 'Your birthday!!!',
    title: 'Your birthday!!!',
    text: "It was an incredible day. I don't know what you thought about it, but seeing you smile when you saw your brother meant a lot for me. I wish you always enjoy your birthdays.",
    img: p(23),
    side: 'left',
  },
  {
    id: 6,
    date: 'Tahrir day',
    title: 'Tahrir day',
    text: "I can't stop thinking about days when we go to Tahrir. They are ones of the best. We truly study, enjoy our time, and make a good bond together at that time. The campus itself is quite beautiful, and you make the moments there extraordinary.",
    img: p(14),
    side: 'right',
  },
  {
    id: 7,
    date: 'Tahrir day with Taher, haha',
    title: 'Tahrir day with Taher, haha',
    text: '',
    img: p(22),
    side: 'left',
  },
  {
    id: 8,
    date: 'No doubt, one of the best photos',
    title: 'No doubt, one of the best photos',
    text: 'The photo before we went to B-laban. Well, on that day we were not so happy with each other, but we put it away and enjoyed.',
    img: p(17),
    side: 'right',
  },
  {
    id: 9,
    date: 'Best day in 2025',
    title: 'Best day in 2025',
    text: "We didn't crash thankfully, but we made so many memories in Rehab. From motorbike, to scooter, and ice cream, then we went shopping. We put all our worries away and lived the moment on that day.",
    img: p(33),
    side: 'left',
  },
  {
    id: 10,
    date: 'Hahaha, pretty sleepy here',
    title: 'Hahaha, pretty sleepy here',
    text: '',
    img: p(60),
    side: 'right',
  },
  {
    id: 11,
    date: 'Haha, and here is my birthday',
    title: 'Haha, and here is my birthday',
    text: "The watch will stay forever with me, and the memory too. I played bowling for the first time in my life, and I truly enjoyed it. (I think only one who did not was Mahmoud — skill issue.)",
    img: p(12),
    side: 'left',
  },
  {
    id: 12,
    date: 'Loreal day',
    title: 'Loreal day',
    text: "No worries, we were the best. The judges do not have any taste. But at the end of the day, we made many memories, and we felt as if we were on the top of the universe.",
    img: p(49),
    side: 'right',
  },
  {
    id: 13,
    date: 'First day at work!!',
    title: 'First day at work!!',
    text: "You finally agreed to it, and you gave us one full more semester together. Thanks!",
    img: p(43),
    side: 'left',
  },
  {
    id: 14,
    date: 'Graduation is coming soon....',
    title: 'Graduation is coming soon....',
    text: "Even if you graduated, even if we went apart, and even if we didn't meet for years, we will still have dozens of memories, hundreds of photos (thanks to you), and our phones to call and chat with each other. This friendship will never ever disappear.",
    img: p(55),
    side: 'right',
  },
];


// ─────────────────────────────────────────────────────────────
// FINAL PHOTO & MESSAGE
// ─────────────────────────────────────────────────────────────
export const finalPhoto = {
  url: p(48),
  caption: 'The photo that we both agreed it is the best',
};

export const finalMessageName = 'Passant';

export const finalMessageText = `For your 24th birthday, I will say it again.......

As for me, being your friend was never a hard thing.
Your smile makes everything feel calmer, even when things are tense.

Every argument, every chat, every little moment with you feels more memorable than it ever has with anyone else.

If I thanked you from today until the next day, it would still never be enough to express what I feel,
to express who you are to me,
to express what it means to have you in my life,
or to express how much I've let you get close to me, and how I've never regretted it.

No matter how much I think about it, it never feels like enough to describe your significance in my life. One day cannot even make it halfway in this list of thanks, or even in the lives of the people around you. It's honestly insane how much of an impact you can have just by being yourself.

Happy birthdayyyyyyyyy, Passant! 🥳❤️
I wish you enjoy your year to the max, make countless memories, and stay happy always.
🎉✨🔥🎉✨🔥✨❤️✨🔥🎉✨❤️🎉✨🍰🍰🍰✨❤️🎉`;
