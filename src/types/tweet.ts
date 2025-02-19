export type ExampleTweetType = {
  profileImage: string,
  name: string,
  username: string,
  date: string,
  comment: string | number,
  repost: string | number,
  like: string | number,
  view: string | number,
  liked?: boolean,
  verified: "blue" | "gold" | "gray" | null,
  textContent: string
}