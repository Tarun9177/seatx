//Geo Location API
// var x = document.getElementById('#myLocation');

// const options = {
//     enableHighAccuracy: false,
//     timeout: 5000,
//     maximumAge: 0,
// };

// function success(pos) {
//     const crd = pos.coords;
//     console.log(crd)
//         // console.log("Your current position is:");
//     const lat = crd.latitude;
//     const long = crd.longitude;
//     console.log(`Latitude : ${lat}`);
//     console.log(`Longitude: ${long}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
//     // x.innerHTML = `lat = ${crd.latitude}, log = ${crd.longitude}`
//     // var locAPI = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&sensor=true`
//     const locAPI = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat},${long}`;
//     fetch(locAPI).then(res => res.json()).then(data => {
//         console.table(data.address);
//     }).catch(() => {
//         console.log('Error fetching data from API')
//     })
//     console.log(locAPI)
// }

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error, options);

// const geolocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//         alert('hi');
//     } else {
//         console.log('Geolocation is not suppeorted by this browser.');
//     }
// }

// const showPosition = (position) => {
//     console.log(`Latitute : ${position.coords.latitude} <br/> Longitude : ${position.coords.longitude}`);
//     var lat = position.coords.latitude;
//     var long = position.coords.longitude;
//     getCity(lat, long)
// }


// const getCity = (lat, long) => {
//     var formData = {
//         'lat': lat,
//         'long': long,
//         'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
//     };
//     $.ajax({
//         type: 'POST',
//         url: 'getCity',
//         data: formData,
//         encode: true
//     })
//         .done((data1) => {
//             data = JSON.parse(data1);
//             console.log("data fetched from views = " + data1)
//             if (data['status'] = 'success') {
//                 place = data['city'] + ',' + data['country']
//                 document.getElementById('city').value = place
//             } else {
//                 console.log('failure')
//             }
//         });
// }

// const baseURL = 'http://api.ipstack.com/'
// baseURL.append
// baseURL access_key = 99d468ef6459920cf316d834e3f8f100
// console.log(baseURL)


// const myGeoLocation = () => {

//     navigator.geolocation.getCurrentPosition(position => {
//         // Getting Latitue and Lonitude from position object
//         const crd = position.coords;
//         const lat = crd.latitude;
//         const long = crd.longitude;

//         // Getting location of passed coordinates using geocoding API

//         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
//         console.log(url);
//         fetch(url).then(res => res.json())
//             .then(data => {
//                 const myData = data.address;
//                 const myCity = myData.city;
//                 console.log(myCity)
//             }).catch(() => {
//                 console.log('Error fetching data from api')
//             })
//     })
// }

// myGeoLocation();


// let myLoc = document.querySelector('#mylocation');
//     const myGeoLocation = () => {
//         navigator.geolocation.getCurrentPosition(position => {
//             // Getting Latitue and Lonitude from position object
//             const crd = position.coords;
//             let lat = crd.latitude;
//             let long = crd.longitude;
//             // Getting location of passed coordinates using geocoding API
//             const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;

//             const newLocation = async() => {
//                 let res = await fetch(url, {
//                     body: JSON.stringify()
//                 });
//                 let data = await res.json();
//                 let myCItys = data.address.city;
//                 myLoc.innerHTML = myCItys;
//                 getLocName();
//             }
//             return newLocation();
//         })
//     }
//     const getLocName = () => {
//         let myLocNameText = myLoc.innerHTML
//         return myLocNameText;
//     }

//     let locName = getLocName();

//     myGeoLocation();