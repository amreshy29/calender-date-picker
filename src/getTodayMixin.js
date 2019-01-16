export default {
  getToday() {
    var today = new Date()
		var year = `${today.getFullYear()}`
		var month = `${today.getMonth() + 1}`
		var day = `${today.getDate()}`
		month = month.length < 2 ? `0${month}` : month
		day = day.length < 2 ? `0${day}` : day
		return `${year}-${month}-${day}`
  }
}
