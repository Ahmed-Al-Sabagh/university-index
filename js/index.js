// extract the unique country names

const rawCountryList = universityJson.map(item => item.country);
const countryList = rawCountryList.filter((item, index, self) => self.indexOf(item) === index);
countryList.sort();

// console.log(rawCountryList);
// console.log(countryList);

// create new component ... 
Vue.component("v-select",VueSelect.VueSelect);

// new instance form vue js .. 
var app = new Vue({
    el:'#vue-app',
    data:  {
        // message:"Hello World!",
        countries: countryList,
        countrySelected: "",
        universities: [ ],
        universitySelected: null,
    },
    // actions ... 
    methods: {
        fetchUniversities: function () {
            console.log("fetchUniversities() called for " +  this.countrySelected );
            let matches = universityJson.filter(item => item.country == this.countrySelected);
            matches.sort((lhr,rhs) => lhr.name < rhs.name ? -1 : 1);
            console.log(matches);
            this.universities = matches;
        }
    }
})