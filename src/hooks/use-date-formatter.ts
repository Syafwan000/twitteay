import moment from "moment"

const useDateFormatter = (isYear?: boolean, date?: string) => {
  if (!date) return isYear ? moment().format('MMM D, YYYY') : moment().format('MMM D')
  return isYear ? moment(date).format('MMM D, YYYY') : moment(date).format('MMM D')
}

export default useDateFormatter