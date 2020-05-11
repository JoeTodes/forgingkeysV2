---
title: How To Use Forging Keys Custom Components
date: 2020-02-22T05:20:04.345Z
author: jobin
coverimg: >-
  https://res.cloudinary.com/forgingkeys/image/upload/v1582756265/Cover%20Images/001_lq9fcp.png
---
Congrats! You found my super-secret testing page for verifying all our fancy custom components work.
These html tags can be directly inserted into the Markdown editor in the CMS for all your custom components. Note that the preview pane in the CMS will not render these elements, if I can find a way to make that work too, I will!

For the most part, partial card and deck names should work, for example using just "skippy" should work for <Card name="skippy timehog"/> but if it's too generic you might end up with the wrong content. For example "library" might return <Card name="library of babel"/> or <Card name="library of the damned"/>. Always check your posts after publishing it to make sure everything worked properly.

Ok let's start out with a decklist:
```html
<DeckList name="the captain of terahill"/>
````

<DeckList name="the captain of terahill"/>


<br/>
<br/>
I've had to build in a delay between requests for deck data as the database gets mad if you make too many requests too quickly, so the more decklists included in a post, the longer it will take for their data to be fetched. The rest of the page will load right away, but the decklists may appear blank for a number of seconds. Don't panic, but also be conservative with the number of decklists.
<br/>
<br/>
Now for cards, if I just want a hoverable card name:



```html
<Card name="shooler"/>
````

and I get a hover image: <Card name="shooler"/> which is inline with the rest of the text!
<br/>
<br/>


What if I want one big card in as a paragraph break with a caption? Just use BigCard:
```html
<BigCard name="bulwark" caption="very crisp"/>
````

<BigCard name="bulwark" caption="very crisp"/>

But what about multiple cards in a row?? Gotcha covered with XCards:
```html
<XCards names="anger,routine job,miasma" caption="wow those are some cards for sure"/>
````
<XCards names="anger,routine job,miasma" caption="wow those are some cards for sure"/>

If you're using VueJS to power your blog, drop us a line and I'll hook you up with the components!

