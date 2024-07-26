import { create } from 'zustand'

type Store = {
  profileImage: string,
  name: string,
  username: string,
  date: string,
  textContent: string,
  profileShape: 'square' | 'rounded' | 'circle',
  verified: 'blue' | 'gold' | 'grey' | null,
  liked: boolean,
  reposted: boolean,
  colorMode: 'light' | 'dark',
  retweet: number | null,
  like: number | null,
  view: number | null,
}

type Action = {
  setProfileImage: (profileImage: string) => void,
  setName: (name: string) => void,
  setUsername: (username: string) => void,
  setDate: (date: string) => void,
  setTextContent: (textContent: string) => void,
  setProfileShape: (profileShape: 'square' | 'rounded' | 'circle') => void,
  setVerified: (verified: 'blue' | 'gold' | 'grey' | null) => void,
  setLiked: (liked: boolean) => void,
  setReposted: (reposted: boolean) => void,
  setColorMode: (colorMode: 'light' | 'dark') => void,
  setRetweet: (retweet: number) => void,
  setLike: (like: number) => void,
  setView: (view: number) => void,
}

const useContentStore = create<Store & Action>((set) => ({
  profileImage: '',
  name: '',
  username: '',
  date: '',
  textContent: '',
  profileShape: 'circle',
  verified: null,
  liked: false,
  reposted: false,
  colorMode: 'light',
  retweet: null,
  like: null,
  view: null,
  setProfileImage: (profileImage) => set({ profileImage }),
  setName: (name) => set({ name }),
  setUsername: (username) => set({ username }),
  setDate: (date) => set({ date }),
  setTextContent: (textContent) => set({ textContent }),
  setProfileShape: (profileShape) => set({ profileShape }),
  setVerified: (verified) => set({ verified }),
  setLiked: (liked) => set({ liked }),
  setReposted: (reposted) => set({ reposted }),
  setColorMode: (colorMode) => set({ colorMode }),
  setRetweet: (retweet) => set({ retweet }),
  setLike: (like) => set({ like }),
  setView: (view) => set({ view })
}))

export default useContentStore