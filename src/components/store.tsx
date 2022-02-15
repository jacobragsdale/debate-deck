import firebase from "./firebaseComps";

function cardList() {
  const cards = [
    {
      id: 1,
      tag: "Example Card 1",
      author: ["Author 1", "Author 2"],
      time: { month: "May", day: 1, year: 2020 },
      publisher: "Publisher",
      articleTitle: "Article Title",
      link: "https://www.google.com",
      tags: ["Pro", "Another Tag"],
      quote:
        "a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... "
    },
    {
      id: 2,
      tag: "Example Card 2",
      author: ["Author 1", "Author 2"],
      time: { month: "May", day: 1, year: 2020 },
      publisher: "Publisher",
      articleTitle: "Article Title",
      link: "https://www.google.com",
      tags: ["Pro", "Another Tag"],
      quote:
        "a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... a super long quote ... "
    }
  ];
  return cards;
}

function projectList() {
  const projects = [1, 1];
  return projects;
}

function projectTitle() {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    return user.displayName.split(" ")[0] + "'s Project";
  } else {
    return "Anonymous's Project";
  }
}

export { cardList };
export { projectList };
export { projectTitle };
