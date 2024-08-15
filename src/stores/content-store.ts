import moment from 'moment'
import { create } from 'zustand'

type Store = {
  profileImage: string | null,
  name: string | null,
  username: string | null,
  date: string | null,
  textContent: string | null,
  tweetWidth: 'md' | 'lg' | 'xl',
  profileShape: 'square' | 'rounded' | 'circle',
  verified: 'blue' | 'gold' | 'gray' | null,
  liked: boolean,
  reposted: boolean,
  viewed: boolean,
  colorMode: 'light' | 'dark',
  repost: string | number | null,
  like: string | number | null,
  view: string | number | null,
}

type Action = {
  setProfileImage: (profileImage: string) => void,
  setName: (name: string) => void,
  setUsername: (username: string) => void,
  setDate: (date: string) => void,
  setTextContent: (textContent: string) => void,
  setTweetWidth: (tweetWidth: 'md' | 'lg' | 'xl') => void,
  setProfileShape: (profileShape: 'square' | 'rounded' | 'circle') => void,
  setVerified: (verified: 'blue' | 'gold' | 'gray' | null) => void,
  setLiked: (liked: boolean) => void,
  setReposted: (reposted: boolean) => void,
  setViewed: (viewed: boolean) => void,
  setColorMode: (colorMode: 'light' | 'dark') => void,
  setRepost: (repost: string | number) => void,
  setLike: (like: string | number) => void,
  setView: (view: string | number) => void,
}

const dateHandler = (date: string) => {
  return moment(date).format('MMM D, YYYY')
}

const nFormatter = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "Qd" }
  ];

  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
  const item = lookup.slice().reverse().find(item => num >= item.value);
  return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : null;
}

const toInt = (num: string | number) => {
  if (typeof num === 'string') {
    return parseInt(num)
  } else {
    return num
  }
}

const useContentStore = create<Store & Action>((set) => ({
  profileImage: null,
  name: null,
  username: null,
  date: null,
  textContent: null,
  tweetWidth: 'md',
  profileShape: 'circle',
  verified: null,
  liked: false,
  reposted: false,
  viewed: false,
  colorMode: 'light',
  repost: null,
  like: null,
  view: null,
  setProfileImage: (profileImage) => set({ profileImage }),
  setName: (name) => set({ name }),
  setUsername: (username) => set({ username }),
  setDate: (date) => set({ date: dateHandler(date) }),
  setTextContent: (textContent) => set({ textContent }),
  setTweetWidth: (tweetWidth) => set({ tweetWidth }),
  setProfileShape: (profileShape) => set({ profileShape }),
  setVerified: (verified) => set({ verified }),
  setLiked: (liked) => set({ liked }),
  setReposted: (reposted) => set({ reposted }),
  setViewed: (viewed) => set({ viewed }),
  setColorMode: (colorMode) => set({ colorMode }),
  setRepost: (repost) => set({ repost: nFormatter(toInt(repost), 1) }),
  setLike: (like) => set({ like: nFormatter(toInt(like), 1) }),
  setView: (view) => set({ view: nFormatter(toInt(view), 1) }),
}))

export default useContentStore