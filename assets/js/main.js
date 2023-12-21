(function () {
    "use strict";

    /////////////////////////////////////////////////////////////
    /////////////////////////Common Start////////////////////////
    /////////////////////////////////////////////////////////////

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const myURL = 'https://seatx.pythonanywhere.com/events/searchevents/';

    // var raw = JSON.stringify({
    //     "search_word": "ca",  //CHANGE TO DYNAMIC KEYWORD
    // });

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };

    // fetch(myURL, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {

    //         var eventSync1 = document.querySelector('.eventSync1'),
    //             eventSync2 = document.querySelector('.eventSync2')
    //         const eListsArr = JSON.parse(result);
    //         let eList = eListsArr.eventList;


    //         // const syncHtml1 = eList.map((post) => {
    //         //     // console.log(eList)
    //         //     return `<div class="item">
    //         //                         <img src=${post.event_image} alt="" class="img-fluid">
    //         //                         <div class="event-details-container">
    //         //                             <h2>${post.performer_name}</h2>
    //         //                             <p>${post.event_name}</p>
    //         //                             <a class="btn-1" href=${post.event_url}>Book Tickets</a>
    //         //                         </div>
    //         //                     </div>`
    //         // })

    //         // const syncHtml2 = eList.map((post) => {
    //         //     return `<div class="item">
    //         //         <a href="#">
    //         //                 <img src=${post.event_image} alt="" class="img-fluid">
    //         //             </a>
    //         //         </div>`
    //         // })


    //         // const syncHtml1 = eList.forEach(post => {
    //         //     const markups1 = `
    //         //                         <div class="owl-item">
    //         //                             <div class="item">
    //         //                                 <img src=${post.event_image} alt="" class="img-fluid">
    //         //                                 <div class="event-details-container">
    //         //                                     <h2>${post.performer_name}</h2>
    //         //                                     <p>${post.event_name}</p>
    //         //                                     <a class="btn-1" href=${post.event_url}>Book Tickets</a>
    //         //                                 </div>
    //         //                             </div>
    //         //                         </div>
    //         //                     `
    //         //     eventSync1.insertAdjacentHTML('beforeend', markups1);
    //         // })

    //         // const syncHtml2 = eList.forEach(post => {
    //         //     const markups2 = `
    //         //                         <div class="owl-item current">
    //         //                             <div class="item">
    //         //                                 <a href="#">
    //         //                                     <img src=${post.event_image} alt="" class="img-fluid">
    //         //                                 </a>
    //         //                             </div>
    //         //                         </div>
    //         //                     `
    //         //     eventSync2.insertAdjacentHTML('beforeend', markups2);
    //         // })


    //         // eventSync1.innerHTML = syncHtml1;
    //         // eventSync2.innerHTML = syncHtml2;
    //         // nearEvents3.innerHTML = syncEvent3;

    //     })
    //     .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    //////////////////////////Common End/////////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    /////////////////////Trends Events Start/////////////////////
    /////////////////////////////////////////////////////////////
    var raw0 = JSON.stringify({
        "search_word": "California",  //CHANGE TO DYNAMIC KEYWORD
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
            // console.log(typeof (eList_bsw));
            // console.log(eList_bsw);
            // console.log(eList_bsw.length);
            eList_bsw.forEach(bsw => {
                const markup2_bsw = `
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <img src=${bsw.event_image} alt="" class="img-fluid">
                                                <div class="event-details-container">
                                                    <h2>${bsw.event_name}</h2>
                                                    <p>${bsw.venue_name}</p>
                                                    <a class="btn-1" href=${bsw.event_url}>Book Tickets</a>
                                                </div>
                                            </div>
                                        </div>
                                        `
                const markup2_ssw = `
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <a href="#">
                                                    <img src=${bsw.event_image} alt="" class="img-fluid">
                                                </a>
                                            </div>
                                        </div>
                                    `
                bigSwiperWrapper.insertAdjacentHTML('beforeend', markup2_bsw);
                smallSwiperWrapper.insertAdjacentHTML('beforeend', markup2_ssw);
            });
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    //////////////////////Trends Events End//////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    ////////////////////Events Near You Start////////////////////
    /////////////////////////////////////////////////////////////

    var raw1 = JSON.stringify({
        "search_word": "ca",  //CHANGE TO DYNAMIC KEYWORD
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
            // console.log(eList1);
            // eList1.forEach(post1 => {
            //     const markup1 = `<div class="swiper-slide">
            //     <div class="trend-card-box text-center">
            //         <div class="trend-card-img">
            //             <img src=${post1.event_image} class="img img-responsive">
            //         </div>
            //         <div class="trend-card-content">
            //             <div class="trend-card-name">${post1.event_name} <small>${post1.event_name}</small></div>
            //             <div class="row row-gap-2">
            //                 <div class="col-12">
            //                     <div class="trend-card-details">
            //                         <h4 class="event-date">${post1.event_date}</h4>
            //                         <h4 class="event-venue"><span class="venue-name">${post1.venue_name}</span>
            //                         </h4>
            //                     </div>
            //                 </div>
            //                 <div class="col-12">
            //                     <div class="trend-card-overview">
            //                         <a class="btn-1" href=${post1.event_url}>Book Tickets</a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>`
            //     nearEvents.insertAdjacentHTML('beforeend', markup1);
            // });

            for (let i = 0; i < eList1.length; i++) {
                if (i < 8) {
                    var bsae = eList1;
                    // console.log(bsae);
                    // console.log(bsae[i].event_name)
                    const markup1 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${bsae[i].event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${bsae[i].event_name} <small>${bsae[i].event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${bsae[i].event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${bsae[i].venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${bsae[i].event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                    nearEvents.insertAdjacentHTML('beforeend', markup1);
                } else {
                    return;
                }
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
        "search_word": "sport",  //CHANGE TO DYNAMIC KEYWORD
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
            // eList2.forEach(post2 => {
            //     const markup2 = `<div class="swiper-slide">
            //     <div class="trend-card-box text-center">
            //         <div class="trend-card-img">
            //             <img src=${post2.event_image} class="img img-responsive">
            //         </div>
            //         <div class="trend-card-content">
            //             <div class="trend-card-name">${post2.event_name} <small>${post2.event_name}</small></div>
            //             <div class="row row-gap-2">
            //                 <div class="col-12">
            //                     <div class="trend-card-details">
            //                         <h4 class="event-date">${post2.event_date}</h4>
            //                         <h4 class="event-venue"><span class="venue-name">${post2.venue_name}</span>
            //                         </h4>
            //                     </div>
            //                 </div>
            //                 <div class="col-12">
            //                     <div class="trend-card-overview">
            //                         <a class="btn-1" href=${post2.event_url}>Book Tickets</a>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>`
            //     sportsEvents.insertAdjacentHTML('beforeend', markup2);
            // })
            for (let i = 0; i <= eList2.length / 2; i++) {
                var bsae2 = eList2;
                const markup1 = `<div class="swiper-slide">
                    <div class="trend-card-box text-center">
                        <div class="trend-card-img">
                            <img src=${bsae2[i].event_image} class="img img-responsive">
                        </div>
                        <div class="trend-card-content">
                            <div class="trend-card-name">${bsae2[i].event_name} <small>${bsae2[i].event_name}</small></div>
                            <div class="row row-gap-2">
                                <div class="col-12">
                                    <div class="trend-card-details">
                                        <h4 class="event-date">${bsae2[i].event_date}</h4>
                                        <h4 class="event-venue"><span class="venue-name">${bsae2[i].venue_name}</span>
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="trend-card-overview">
                                        <a class="btn-1" href=${bsae2[i].event_url}>Book Tickets</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
                sportsEvents.insertAdjacentHTML('beforeend', markup1);
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
        "search_word": "concert",  //CHANGE TO DYNAMIC KEYWORD
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
            eList3.forEach(post3 => {
                const markup3 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${post3.event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${post3.event_name} <small>${post3.event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${post3.event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${post3.venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${post3.event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                concertEvents.insertAdjacentHTML('beforeend', markup3);
            })
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    /////////////////////Concerts Events End/////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    /////////////////////Theater Events Start////////////////////
    /////////////////////////////////////////////////////////////
    var raw4 = JSON.stringify({
        "search_word": "theatre",  //CHANGE TO DYNAMIC KEYWORD
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
            eList4.forEach(post4 => {
                const markup4 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${post4.event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${post4.event_name}<small>${post4.event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${post4.event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${post4.venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${post4.event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                theaterEvents.insertAdjacentHTML('beforeend', markup4);
            })
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    //////////////////////Theater Events End/////////////////////
    /////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////
    ////////////////////Festivals Events Start///////////////////
    /////////////////////////////////////////////////////////////
    var raw5 = JSON.stringify({
        "search_word": "festival",  //CHANGE TO DYNAMIC KEYWORD
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
            eList5.forEach(post5 => {
                const markup5 = `<div class="swiper-slide">
                <div class="trend-card-box text-center">
                    <div class="trend-card-img">
                        <img src=${post5.event_image} class="img img-responsive">
                    </div>
                    <div class="trend-card-content">
                        <div class="trend-card-name">${post5.event_name} <small>${post5.event_name}</small></div>
                        <div class="row row-gap-2">
                            <div class="col-12">
                                <div class="trend-card-details">
                                    <h4 class="event-date">${post5.event_date}</h4>
                                    <h4 class="event-venue"><span class="venue-name">${post5.venue_name}</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="trend-card-overview">
                                    <a class="btn-1" href=${post5.event_url}>Book Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                festivalsEvents.insertAdjacentHTML('beforeend', markup5);
            })
        })
        .catch(error => console.log('error', error));

    /////////////////////////////////////////////////////////////
    /////////////////////Festivals Events End////////////////////
    /////////////////////////////////////////////////////////////

})()