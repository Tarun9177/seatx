(function() {
    "use strict";
    /////////////////////////////////////////////////////////////
    /////////////////////Geo Location Start//////////////////////
    /////////////////////////////////////////////////////////////

    let myLoc = document.querySelector('#mylocation');

    const myGeoLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            // Getting Latitue and Lonitude from position object
            const crd = position.coords;
            let lat = crd.latitude;
            let long = crd.longitude;
            // Getting location of passed coordinates using geocoding API
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
            console.log(url);

            const newLocation = async() => {
                let res = await fetch(url, {
                    body: JSON.stringify()
                });
                let data = await res.json();
                let myCItys = data.address.city;
                // console.log(data.address.country_code);
                myLoc.innerHTML = myCItys;
                // let mynewStact = myCItys;
                let mynewCc = data.address.city;
                // console.log(mynewCc)
                console.log(mynewCc)
                    // tEvents(mynewCc);

            }
            return newLocation();
        })
    }

    myGeoLocation();
    /////////////////////////////////////////////////////////////
    //////////////////////Geo Location End///////////////////////
    /////////////////////////////////////////////////////////////

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // const myURL = 'https://seatx.pythonanywhere.com/events/searchevents/';

    /////////////////////////////////////////////////////////////
    /////////////////////Trends Events Start/////////////////////
    /////////////////////////////////////////////////////////////
    const tEvents = (locName) => {
        // console.log(`Hi Tarun : ${locName}`)
        var raw0 = JSON.stringify({
            "search_word": `${locName}`, //CHANGE TO DYNAMIC KEYWORD
            // "search_word": "shankar", //CHANGE TO DYNAMIC KEYWORD
        });
        var requestOptions0 = {
            method: 'POST',
            headers: myHeaders,
            body: raw0,
            redirect: 'follow'
        };

        fetch(myURL, requestOptions0)
            .then(response => response.text())
            .then(result_bsw => {
                var eListsArr_bsw = JSON.parse(result_bsw);
                var bigSwiperWrapper = document.querySelector('.bigSwiperWrapper');
                var smallSwiperWrapper = document.querySelector('.smallSwiperWrapper');
                var eList_bsw = eListsArr_bsw.eventList;
                // console.log(eList_bsw);
                for (let i = 0; i < eList_bsw.length / 2.8; i++) {
                    // console.log(eList_bsw[i])
                    const markup0_bsw = `
                                            <div class="swiper-slide">
                                                <div class="item">
                                                    <img src=${eList_bsw[i].event_image} alt="" class="img-fluid">
                                                    <div class="event-details-container">
                                                        <h2>${eList_bsw[i].event_name}</h2>
                                                        <p>${eList_bsw[i].venue_name}</p>
                                                        <a class="btn-1" href=${eList_bsw[i].event_url}>Book Tickets</a>
                                                    </div>
                                                </div>
                                            </div>
                                            `
                    const markup0_ssw = `
                                            <div class="swiper-slide">
                                                <div class="item">
                                                    <a href="#">
                                                        <img src=${eList_bsw[i].event_image} alt="" class="img-fluid">
                                                    </a>
                                                </div>
                                            </div>
                                        `
                    bigSwiperWrapper.insertAdjacentHTML('beforeend', markup0_bsw);
                    smallSwiperWrapper.insertAdjacentHTML('beforeend', markup0_ssw);
                }
            })
            .catch(error => console.log('error', error));
    }

    // tEvents();

    /////////////////////////////////////////////////////////////
    //////////////////////Trends Events End//////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    ////////////////////Events Near You Start////////////////////
    /////////////////////////////////////////////////////////////


    var raw1 = JSON.stringify({
        "search_word": "Boston", //CHANGE TO DYNAMIC KEYWORD
    });

    var requestOptions1 = {
        method: 'POST',
        headers: myHeaders,
        body: raw1,
        redirect: 'follow'
    };

    fetch(myURL, requestOptions1)
        .then(response => response.text())
        .then(result1 => {
            var nearEvents = document.querySelector('.nearEvents');
            var eListsArr1 = JSON.parse(result1);
            var eList1 = eListsArr1.eventList;
            for (let i = 0; i < eList1.length / 2.8; i++) {
                const markup1 = `<div class="swiper-slide">
                                        <div class="trend-card-box text-center">
                                            <div class="trend-card-img">
                                                <img src=${eList1[i].event_image} class="img img-responsive">
                                            </div>
                                            <div class="trend-card-content">
                                                <div class="trend-card-name">${eList1[i].event_name} <small>${eList1[i].event_name}</small></div>
                                                <div class="row row-gap-2">
                                                    <div class="col-12">
                                                        <div class="trend-card-details">
                                                            <h4 class="event-date">${eList1[i].event_date}</h4>
                                                            <h4 class="event-venue"><span class="venue-name">${eList1[i].venue_name}</span>
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="trend-card-overview">
                                                            <a class="btn-1" href=${eList1[i].event_url}>Book Tickets</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
                nearEvents.insertAdjacentHTML('beforeend', markup1);
            }
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    /////////////////////Events Near You End/////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    /////////////////////Sports Events Start/////////////////////
    /////////////////////////////////////////////////////////////
    var raw2 = JSON.stringify({
        "search_word": "sport", //CHANGE TO DYNAMIC KEYWORD
    });
    var requestOptions2 = {
        method: 'POST',
        headers: myHeaders,
        body: raw2,
        redirect: 'follow'
    };

    fetch(myURL, requestOptions2)
        .then(response => response.text())
        .then(result2 => {
            var sportsEvents = document.querySelector('.sportsEvents');
            var eListsArr2 = JSON.parse(result2);
            var eList2 = eListsArr2.eventList;
            for (let i = 0; i <= eList2.length / 2.8; i++) {
                const markup2 = `<div class="swiper-slide">
                    <div class="trend-card-box text-center">
                        <div class="trend-card-img">
                            <img src=${eList2[i].event_image} class="img img-responsive">
                        </div>
                        <div class="trend-card-content">
                            <div class="trend-card-name">${eList2[i].event_name} <small>${eList2[i].event_name}</small></div>
                            <div class="row row-gap-2">
                                <div class="col-12">
                                    <div class="trend-card-details">
                                        <h4 class="event-date">${eList2[i].event_date}</h4>
                                        <h4 class="event-venue"><span class="venue-name">${eList2[i].venue_name}</span>
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="trend-card-overview">
                                        <a class="btn-1" href=${eList2[i].event_url}>Book Tickets</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                sportsEvents.insertAdjacentHTML('beforeend', markup2);
            }
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    //////////////////////Sports Events End//////////////////////
    /////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////
    ////////////////////Concerts Events Start////////////////////
    /////////////////////////////////////////////////////////////
    var raw3 = JSON.stringify({
        "search_word": "concert", //CHANGE TO DYNAMIC KEYWORD
    });
    var requestOptions3 = {
        method: 'POST',
        headers: myHeaders,
        body: raw3,
        redirect: 'follow'
    };

    fetch(myURL, requestOptions3)
        .then(response => response.text())
        .then(result3 => {
            var concertEvents = document.querySelector('.concertEvents');
            var eListsArr3 = JSON.parse(result3);
            var eList3 = eListsArr3.eventList;
            for (let i = 0; i <= eList3.length / 2.8; i++) {
                const markup3 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${eList3[i].event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${eList3[i].event_name} <small>${eList3[i].event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${eList3[i].event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${eList3[i].venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${eList3[i].event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                concertEvents.insertAdjacentHTML('beforeend', markup3);
            }
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    /////////////////////Concerts Events End/////////////////////
    /////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////
    /////////////////////Theater Events Start////////////////////
    /////////////////////////////////////////////////////////////
    var raw4 = JSON.stringify({
        "search_word": "theatre", //CHANGE TO DYNAMIC KEYWORD
    });
    var requestOptions4 = {
        method: 'POST',
        headers: myHeaders,
        body: raw4,
        redirect: 'follow'
    };

    fetch(myURL, requestOptions4)
        .then(response => response.text())
        .then(result4 => {
            var theaterEvents = document.querySelector('.theaterEvents');
            var eListsArr4 = JSON.parse(result4);
            var eList4 = eListsArr4.eventList;
            for (let i = 0; i <= eList4.length / 2.8; i++) {
                const markup4 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${eList4[i].event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${eList4[i].event_name} <small>${eList4[i].event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${eList4[i].event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${eList4[i].venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${eList4[i].event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                theaterEvents.insertAdjacentHTML('beforeend', markup4);
            }
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    //////////////////////Theater Events End/////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    ////////////////////Festivals Events Start///////////////////
    /////////////////////////////////////////////////////////////
    var raw5 = JSON.stringify({
        "search_word": "festival", //CHANGE TO DYNAMIC KEYWORD
    });
    var requestOptions5 = {
        method: 'POST',
        headers: myHeaders,
        body: raw5,
        redirect: 'follow'
    };

    fetch(myURL, requestOptions5)
        .then(response => response.text())
        .then(result5 => {
            var festivalsEvents = document.querySelector('.festivalsEvents');
            var eListsArr5 = JSON.parse(result5);
            var eList5 = eListsArr5.eventList;
            for (let i = 0; i <= eList5.length / 2.8; i++) {
                const markup5 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${eList5[i].event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${eList5[i].event_name} <small>${eList5[i].event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${eList5[i].event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${eList5[i].venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${eList5[i].event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                festivalsEvents.insertAdjacentHTML('beforeend', markup5);
            }
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    /////////////////////Festivals Events End////////////////////
    /////////////////////////////////////////////////////////////

})()