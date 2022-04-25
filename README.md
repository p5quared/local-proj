# Blue Moon Cafe, Saranac Lake

Hey there, this is a project that I made for "Blue Moon Cafe", a small, local business in Saranac Lake, NY. 
Some of the problems I've found on the original site include slow load times, unnecessary images, and also a poor navigation strategy.
My main goals are to simplify navigation and make it more intuitive, and also to minimize distractions from important information.

I've opted for a minimal design, loosely based off of some other modern restaurant's sites I have seen.
I've taken some of the resources like colors and images from the original Blue Moon Cafe website.


The project was created using React, a javacript library for building interfaces.
2022 Peter V.
**********************************************************

## Tools Used

### React JS

This is one of my first projects created using react.

#### useState()

I used useState() on MenuSelector.js so users can click and choose the correct menu to display without reloading the page. 
I am not certain whether this was the correct way to implement this.

### Github Pages

Yea yea, this might not count as a tool but I'm counting it since I've never used it before.
-added dependency packages to package.json
-added deploy scripts to package.json
-git remote add yadda yadda ... npm run deploy ... add . commit ... push origin master

## But Peter, what about 'X'???

Of course it's not perfect, but here are some of the reasons I have drastically altered things.

#### Less Images?? Where's the SOUL???

Images are slow. I know everybody has fast internet these days, but most people stumbling upon a cafe site are probably on mobile phones (yes I am aware that it now sounds hypocritical that I only designed for desktop). Without a better understanding of software wizardy like asynchronous loading, it makes more sense to use a image-light design.

Also, does a cafe really need images?
I know that some cafes love to photograph their lattes as though their baristas' _hearts, ferns, and tulips_ are the works of a reincarnated michaelangelo, but I really don't care personally when I browse, and I highly doubt that images of lattes are going to increase site conversions at a cafe.
Same thing with the food, is your cafe's _avocado toast_ really that original that customers aren't going to understand it without photos? Unlikely.

I think photos can be relevant, especially at restaurants that are serving unique entrees that people might not recognize by name or by ingredient. Also, at high-end restaurants, customers may need more information to push them to reserve, so may be more relevant then. Anytime I've been somewhere and wanted to go to a cafe, I look up "cafe near me" on Apple Maps and basically go to the first option. For those whom photos are a serious matter, they should go on the business profile on Google or Apple and Yelp, or individuals might visit social media.

As for "soul", I think that a (decent) line vector illustration on the homepage and warm colors are more than enough. I may just be cold and heartless, but seeing pictures of smiling and laughing faces doesn't particularly attract me to a business in most cases.

#### Where's the Contact Page/Form????

Under hours and location, there is a phone number. You can call them there.
I seriously am curious how many times Blue Moon Cafe has had their contact form filled out, and for what reason people wanted to contact a cafe via email... I thought some reasons through, but each time I came back to it making more sense to have people call the cafe. The same thing with the "sign up for email updates" form... I mean I am not a subscriber so it might not be my place to judge, but WHO is signing up for that and WHAT are they getting sent from their local cafe?? 

At first, I added a contact page link in the footer, but as I thought about it I decided these forms are totally unnecessary for a small cafe to have and just create more opportunities to provide poor service (not responding quick enough/missing notifications).

## Ways to Improve

If this were a contracted project there are definitely some things that could be improved, including:

#### Page Transitions

Tasteful use of fade-in and fade-out on a lot of the content when moving between pages.
I would also probably take more care to developing a better gradient background on the homepage animation, or perhaps scrap it entirely if I didn't find myself having the right design-chops. As it is now, it is a little cheesy visually. 

#### Reformatting

The menus simply have to go. The font is terribly unreadable; the titles of menu items should be boldened at least, also increasing the indentation or using something like bullets might help discern titles from descriptions.

Ultimately, the menu should also be converted to plain text and displayed as html on the site. This would defintily result in some large speed increases, and make it easier to implement a responsive design (not to mention, easier to edit single menu items than to reupload new images for tiny menu changes).

I want to add that the fact that menus are only accesible from the homepage and not any of the other pages is a little bit of a waste. Does "Our Story" and "Contact" really present more importance than your cafe's menu?? You also must scroll down on the homepage to find the menu links on my browser... Again, important information sould be immediately in view for users.

#### Online Ordering

One of the most important features to implement in my opinion would be online ordering. It is incredibly easy to integrate online ordering into restaurant websites these days, and it saves a lot of time and stress from workers who must answer phone calls about orders while running service. 

#### "Use the buttons below for weekly hours, menus and specials."

This phrase is an "h1" on the real site.... 
If you have to explain on your website how to use your website there is something drastically wrong with your design.

Underneath it also states that "Pick-up, curbside delivery and dine in will be available.  Daily updates are posted on our Facebook page".
The first part of that statement is a bit vage... like will be available when? Someday? Today?

Also don't lie on your site... delete "daily".
In fact, if you really wanted to improve on the idea of schedule changes, you should update things on your business profile on Google. Additionally, I think using alerts on the webpage is a better, albeit more time consuming, practice.

##### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
