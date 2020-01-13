let defaulteCity = '上海'

try {
  if (localStorage.city) {
    defaulteCity = localStorage.city
  }
} catch (e) {

}

export default {
  city: defaulteCity
}
