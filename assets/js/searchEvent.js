
var searchForm = document.querySelector('.searchForm');
const searchSubmit = async (e) => {
    e.preventDefault();

    var searchFormData = new FormData(searchForm);
    var searchData = Object.fromEntries(searchFormData);
    var apiURL = 'https://seatx.pythonanywhere.com/events/searchevents/';
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "search_word": (searchData.search_word)  //CHANGE TO DYNAMIC KEYWORD
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    var searchEventText = document.querySelector('.section-searchbox .search-text');
    searchEventText.innerHTML = searchData.search_word;
    let mainBody = document.querySelector('#main');
    mainBody.classList.add('SearchEventTriggered');
    var searchEventListBox = document.querySelector('.section-searchbox .search-eventListBox')

    searchEventListBox.innerHTML = '';

    try {
        var res = await fetch(apiURL, requestOptions);
        var result = await res.text();
        var sListArr = JSON.parse(result);
        sList = sListArr.eventList;

        if (res.status == 200) {
            sList.forEach(evnt => {
                searchEventListBox.insertAdjacentHTML('beforeend', '');
                var markup = `    <div class="row event-booking-card align-items-center">
                                        <div
                                            class="col-xl-1 col-lg-2 col-md-2 order-md-1 col-12 mb-lg-0 mb-3 pe-md-2 p-0">
                                            <div class="event-img-box">
                                                <img src=${evnt.event_image}
                                                    class="img-fluid rounded-1" alt="">
                                            </div>
                                        </div>
                                        <div class="col-xl-2 col-lg-2 col-8 order-lg-2 order-md-3 order-2 p-0">
                                            <div class="event-date-time text-left">
                                                <h5 class="event-date">${evnt.event_date}</h5>
                                                <small class="event-time">${evnt.event_timezone}</small>
                                            </div>
                                        </div>
                                        <div
                                            class="col-xl-8 col-lg-6 col-md-10 col-12 order-md-2 order-1 mb-lg-0 mb-md-3 mb-0 p-0">
                                            <div class="event-name-venue text-left">
                                                <h5 class="event-name">
                                                    <a href="javascript:void;">
                                                        <span class="event-name-text">${evnt.event_name}</span>
                                                    </a>
                                                </h5>
                                                <div class="event-venue">
                                                    <span class="venue-name">${evnt.venue_name}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-1 col-lg-2 col-4 order-md-3 order-3 align-self-center p-0">
                                            <div class="event-buy text-end">
                                                <a class="btn-1" href=${evnt.event_url}>Tickets</a>
                                            </div>
                                        </div>
                                    </div>
                                `
                searchEventListBox.insertAdjacentHTML('beforeend', markup);

            })
        } else {
            console.log('No Data Found')
        }
    } catch (error) {
        searchEventListBox.insertAdjacentHTML('beforeend',
            `<div class="row event-booking-card align-items-center">
                <div class="col-xl-8 col-lg-6 col-md-10 col-12 order-md-2 order-1 mb-lg-0 mb-md-3 mb-0 p-0">
                    <div class="event-name-venue text-left">
                        <div class="event-venue">
                            <span class="venue-name">No Data Found</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        );
    }
}

searchForm.addEventListener('submit', searchSubmit)
