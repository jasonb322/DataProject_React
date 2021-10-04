# DataProject_React
(For folder structure overview, scroll to bottom)

About a year ago I had a conversation with a man named Lonnie who gave me a project to work on to see if I would possibly work with his team on
real world applications that he was building in his company. As a "try out" he gave me a .txt file that I was to sort and do something creative with
and, for bonus points, create a little something extra on top of that primary mission.

At this time last year, it became apparent that I wouldn't be joining the team as my skills were not a fit for their needs at the time.
But, I enjoyed the conversation and I remembered Lonnie asking me if I knew any React. At that time I didn't, but this past spring and early fall
I spent a considerable amount of time learning React. I thought this project would be a perfect place to jump out of the tutorials and try to build
something real. I took my time with this project, as it was opening doors and showing my relative ignorace. It forced me to learn more about
async processes in JS, useState and useEffect in react, passing props in react, git and gitHub syncronization, css styling, react-router-dom, styled-components,
gernal folder structure, etc . . .

So here is the fruit of that labor. This is a react project that takes a file (dataFile.txt) and sorts the information by color class. In the case of each entry
on the data sheet, they had names, dates, color classification, and company name. My job was to sort the entries by color class - red, orange, yellow, green, blue, 
indigo, violet.

The main project window does just that and as you can see, the results are color themed.

The "little bit extra" is an older project that I created that I called TideWatch. This was originally a Swift/iOS project that I made for my watch so that
I wouldn't have to fumble through my phone to get ocean temperature and tide readings. Since it accesses an API and would force me to learn a little bit 
about react-router-dom, I figured it would be a good addition to the project. To access this, click the "I'd rather be surfing" link in the main window.
To return, click "Back to Work".

I hope you enjoy this project. It was a great way for me to sort and learn new skills in React.js.


Where are the code files?
1. Click data-project > src > components.
2. This will lead you to the components and logic used to create the main window (XYZ Co. Client Database - name sorting).
3. Clicking the Tide-Watch-Components folder will open to reveal the components and logic used to create the tide information for AC.

I used the styled components package to individually style each page. The css can be viewed nested in the tideStyle.js and homeStyle.js files.

There are other things I would maybe add to this. I would like to see the names colored by grouping in the main window when no color grouping is selected. 
I also would like to change the background of the main window to reflect the currently selected color grouping, but it is functional as it is now.

Also, the for the tide portion, I would like to add the ability to select multiple tide stations. The choices are relatively limited though
through the free NOAA API, so for me, the AC station was the most significant as it represented my water temp and tides. 
I would also like to add more color or change the appearance in general, it just feels a little light to me, but again, it is simple and functional.

I think that summarizes my design philosophy, simple yet functional.

Thanks for checking it out!!

Jason Bahr
educator turned photographer, turned educator, turned code noob
