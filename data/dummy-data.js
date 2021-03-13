import Todo from "../model/todo";
import TodoCategory from "../model/todoCategory";

export const TodoCategorys = [
  new TodoCategory("t1", "All", "calendar-outline", [], "#440a67"),
  new TodoCategory("t2", "Work", "briefcase-outline", [], "orange"),
  new TodoCategory("t3", "Music", "headset-outline", [], "purple"),
  new TodoCategory("t4", "Travel", "paper-plane-outline", [], "green"),
  new TodoCategory("t5", "Study", "book-outline", [], "#2a5a77"),
  new TodoCategory("t6", "Home", "bed-outline", [], "red"),
  new TodoCategory("t7", "Shop", "cart-outline", [], "pink"),
  new TodoCategory("t8", "Leisure", "color-palette-outline", [], "cyan"),
];

export const TODOS = [
  new Todo(
    "m1",
    "Wake up and eat",
    "wake up and prepare for school",
    "Study",
    "6:00 AM",
    false
  ),
  new Todo(
    "m2",
    "Travel to Japan for the summer",
    "I fucking miss japan",
    "Travel",
    "12:00 PM",
    true
  ),
  new Todo(
    "m3",
    "Feed the pets",
    "if not mom will whoop my ass",
    "Home",
    "6:00 PM",
    false
  ),
  new Todo(
    "m4",
    "Listen to Jhuz new album",
    "Music for the soul mannnn",
    "Music",
    "10:00 PM",
    false
  ),
  new Todo(
    "m5",
    "Study for tomorrow's exams",
    "Chemistry exams, damn",
    "Study",
    "6:00AM",
    true
  ),
  new Todo(
    "m6",
    "Go for intern job",
    "i need a job so bad:)))",
    "Work",
    "1:00 PM",
    false
  ),
  new Todo(
    "m7",
    "Play Football with cousins ",
    "i love them so much ",
    "Leisure",
    "6:00AM",
    true
  ),
];
