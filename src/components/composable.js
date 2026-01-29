// src/composables/useNewsFeed.js
import image1 from "@/assets/images/carousel5.jpeg";

const posts = [
  {
    id: 1,
    title: "Announcement of the release of June/July 2024 Timetable",
    excerpt: "NBAIS has officially released the June/July 2024 examination timetable.",
    content: "Full details of the June/July 2024 examination timetable.",
    date: "2023-10-15",
    category: "Examination",
    image: image1,
    source: "facebook",
    url: "https://facebook.com/NBAISOfficial/posts/123",
  },
  {
    id: 2,
    title: "NBAIS Examination Timetable Released",
    excerpt: "Candidates are advised to download and review the official timetable.",
    content: "Candidates should carefully review the timetable.",
    date: "2023-10-25",
    category: "Announcement",
    image: image1,
    source: "twitter",
    url: "https://twitter.com/NBAIS_Official/status/456",
  },
  {
    id: 3,
    title: "November–December Examination Schedule",
    excerpt: "The Nov–Dec examination schedule is now available.",
    content: "The November–December exams will begin soon.",
    date: "2023-10-25",
    category: "Exams",
    image: image1,
    source: "manual",
    url: "/blog/nov-dec-exams",
  },
  {
    id: 4,
    title: "November–December Examination Schedule",
    excerpt: "The Nov–Dec examination schedule is now available.",
    content: "The November–December exams will begin soon.",
    date: "2023-10-25",
    category: "Exams",
    image: image1,
    source: "manual",
    url: "/blog/nov-dec-exams",
  },
];

export function useNewsFeed() {
  const getLatest = (limit = 3) => posts.slice(0, limit);

  const getAll = () => posts;

  const getById = (id) => {
    return posts.find((post) => post.id === Number(id));
  };

  return {
    getLatest,
    getAll,
    getById, // ✅ THIS fixes the error
  };
}
