let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo');
content.append(header);

let dogContent = document.createElement("div");
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.src = "./assets/rizzo/jpg"
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.append('Description:')
dogDetails.append(description)

let story = document.createElement('p')
story.append("This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.")
dogDetails.append(story)

let feedTimes = document.createElement('h3')
feedTimes.append('Feeding Times:')
dogDetails.append(feedTimes)

let timeList = document.createElement('ul')
dogDetails.append(timeList)

let time1 = document.createElement('li')
time1.append('9:00 am')
timeList.append(time1)
let time2 = document.createElement('li')
time2.append('12:00 pm')
timeList.append(time2)
let time3 = document.createElement('li')
time3.append('5:00 pm')
timeList.append(time3)