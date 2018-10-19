function loadBikeTemplate() {
    var source = document.querySelector('#template').innerHTML;
    var template = Handlebars.compile(source);
    var newHTML = '';
    for (var i in PAGE_DATA.motorbikes) {
        let obj = PAGE_DATA.motorbikes[i]
        let name = obj.name;
        let price = obj.price;
        let imageURL = obj.imageURL;
        newHTML += template(
            {
                name: name,
                price: price,
                imageURL: imageURL,
                // note! you can pass the index into your HTML template if you would like
                // we would discourage using an onclick in the template for this exercise,
                // but it would be an easy way to set up a function call with the index
                // as a parameter in other cases
                index: i
            }
        )
    }
    document.querySelector('#bikes').insertAdjacentHTML("beforeend", newHTML);
    console.log('%c%s', 'color: white; background: green; font-size: 18px;', 'Template loaded!')
}

function buyBike(index) {
    console.warn('index being purchased: ', index)
    // load the price and name data from PAGE_DATA
    // using the index passed into the function
    var bikeInfo = PAGE_DATA.motorbikes[index];

    // get the desired pieces of information from the object
    // and insert them into the DOM
    var name = bikeInfo.name;
    var nameSpan = document.querySelector('#name');
    nameSpan.innerHTML = name;
    var price = bikeInfo.price;
    var priceSpan = document.querySelector('#price');
    priceSpan.innerHTML = price;

    // hide and show the appropriate rows
    document.querySelector('#pre-purchase').hidden = true;
    document.querySelector('#after-purchase').hidden = false;

    // fun console message
    console.log('%c%s', 'color: blue; font-size: 12px;', 'bike successfully purchased.')
}

function addButtonListeners() {
    // select all the buttons
    var buttons = document.querySelectorAll('.buy-button');
    // i'm going to loop through by index
    for (var i = 0; i < buttons.length; i++) {
        // this index 'i' corresponds to the index in the PAGE_DATA.motorbikes array
        var button = buttons[i];
        // create an index variable to represent the index being referenced
        // use 'let' to define the variable or else referencing errors can occur
        let index = i;
        button.addEventListener('click', function () {
            // the buyBike function is nested in a lambda function in order to pass
            // the parameter into the next function call
            console.error('i = ' + i); // see what i logs in the console as
            console.log('%c%s', 'color: orange; font-size: 9px;', 'event listender added buyBike(' + index + ')');
            // take note when this ^ console.log occurs
            buyBike(index);
        })
    }
}



function onPageLoad() {
    console.warn('Running all the start up functions!')
    loadBikeTemplate();
    addButtonListeners();
    console.log('%c%s', 'color: white; background: blue; font-size: 14px;', 'onPageLoad finished running.')
}


window.addEventListener('load', onPageLoad);