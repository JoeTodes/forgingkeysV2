---
title: Testing Out The Card Viewer
date: 2018-10-10T00:00:00.000Z
---
Ok let's start out with a decklist:

```html
<DeckList name="the captain of terahill"/>
```

<DeckList name="the captain of terahill"/>

Now for cards, if I just want a hoverable card name:

```html
<Card name="shooler"/>
```

and I get a hover image: <Card name="shooler"/> which is inline with the rest of the text!
<br/>
<br/>
What if I want one big card in as a paragraph break with a caption? Just use BigCard:

```html
<BigCard name="bulwark" caption="very crisp"/>
```

<BigCard name="bulwark" caption="very crisp"/>
<br/>
<br/>
But what about multiple cards in a row?? Gotcha covered with XCards:

```html
<XCards :names="['anger','routine job','miasma','bauble', 'axiom']" caption="wow those are some cards for sure"/>
```

<XCards :names="['anger','routine job','miasma','bauble', 'axiom']" caption="wow those are some cards for sure"/>

![winner winner, chicken dinner](/uploads/boardstate.png "Gotcha!")
