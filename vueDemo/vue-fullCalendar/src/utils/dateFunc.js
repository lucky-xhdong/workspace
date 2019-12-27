import moment from 'moment'

const dateFunc = {
  getMonthViewStartDate(date, firstDay) {
    firstDay = parseInt(firstDay)
    const start = moment(date)
    const startOfMonth = moment(start.startOf('month'))

    start.subtract(startOfMonth.day(), 'days')

    if (startOfMonth.day() < firstDay) {
      start.subtract(7, 'days')
    }

    start.add(firstDay, 'days')

    return start
  },
  getMonthViewEndDate(date) {
    return this.getMonthViewStartDate().add(6, 'weeks')
  }
}

export default dateFunc


