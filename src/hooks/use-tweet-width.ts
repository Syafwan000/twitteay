const useTweetWidth = (size: string) => {
  switch (size) {
    case 'md':
      return 448
    case 'lg':
      return 512
    case 'xl':
      return 576
  }
}

export default useTweetWidth