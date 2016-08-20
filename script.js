//https://en.wikipedia.org/wiki/Part_of_speech

var i = 0;

// create custom elements
document.registerElement('v-erb');
document.registerElement('n-oun');
document.registerElement('a-djective');
document.registerElement('a-dverb');
document.registerElement('c-onjunction');
document.registerElement('p-ronoun');
document.registerElement('p-reposition');
document.registerElement('i-nterjection');
document.registerElement('a-rticle');

// create custom element selector + Status
var verb = document.querySelectorAll("v-erb");
var verbStatus = 0;
var verbCount = verb.length;
document.querySelector('.verb-count').innerHTML=verbCount-1;

var noun = document.querySelectorAll("n-oun");
var nounStatus = 0;
var nounCount = noun.length;
document.querySelector('.noun-count').innerHTML=nounCount-1;

var adjective = document.querySelectorAll("a-djective");
var adjectiveStatus = 0;
var adjectiveCount = adjective.length;
document.querySelector('.adjective-count').innerHTML=adjectiveCount-1;

var adverb = document.querySelectorAll("a-dverb");
var adverbStatus = 0;
var adverbCount = adverb.length;
document.querySelector('.adverb-count').innerHTML=adverbCount-1;

var conjunction = document.querySelectorAll("c-onjunction");
var conjunctionStatus = 0;
var conjunctionCount = conjunction.length;
document.querySelector('.conjunction-count').innerHTML=conjunctionCount-1;

var pronoun = document.querySelectorAll("p-ronoun");
var pronounStatus = 0;
var pronounCount = pronoun.length;
document.querySelector('.pronoun-count').innerHTML=pronounCount-1;

var preposition = document.querySelectorAll("p-reposition");
var prepositionStatus = 0;
var prepositionCount = preposition.length;
document.querySelector('.preposition-count').innerHTML=prepositionCount-1;

var interjection = document.querySelectorAll("i-nterjection");
var interjectionStatus = 0;
var interjectionCount = interjection.length;
document.querySelector('.interjection-count').innerHTML=interjectionCount-1;

var article = document.querySelectorAll("a-rticle");
var articleStatus = 0;
var articleCount = article.length;
document.querySelector('.article-count').innerHTML=articleCount-1;


// Creating on/off functions
function verbOn() {
  for (i = 0; i < verbCount; i++) {
      verb[i].className = "verb-color";
  }
}

function verbOff() {
  for (i = 0; i < verbCount; i++) {
      verb[i].className = "";
  }
}

function nounOn() {
  for (i = 0; i < nounCount; i++) {
      noun[i].className = "noun-color";
  } 
}

function nounOff() {
  for (i = 0; i < nounCount; i++) {
      noun[i].className = "";
  } 
}

function adjectiveOn() {
  for (i = 0; i < adjectiveCount; i++) {
      adjective[i].className = "adjective-color";
  } 
}

function adjectiveOff() {
  for (i = 0; i < adjectiveCount; i++) {
      adjective[i].className = "";
  } 
}

function adverbOn() {
  for (i = 0; i < adverbCount; i++) {
      adverb[i].className = "adverb-color";
  } 
}

function adverbOff() {
  for (i = 0; i < adverbCount; i++) {
      adverb[i].className = "";
  } 
}

function conjunctionOn() {
  for (i = 0; i < conjunctionCount; i++) {
      conjunction[i].className = "conjunction-color";
  } 
}

function conjunctionOff() {
  for (i = 0; i < conjunctionCount; i++) {
      conjunction[i].className = "";
  } 
}

function pronounOn() {
  for (i = 0; i < pronounCount; i++) {
      pronoun[i].className = "pronoun-color";
  } 
}

function pronounOff() {
  for (i = 0; i < pronounCount; i++) {
      pronoun[i].className = "";
  } 
}

function prepositionOn() {
  for (i = 0; i < prepositionCount; i++) {
      preposition[i].className = "preposition-color";
  } 
}

function prepositionOff() {
  for (i = 0; i < prepositionCount; i++) {
      preposition[i].className = "";
  } 
}

function interjectionOn() {
  for (i = 0; i < interjectionCount; i++) {
      interjection[i].className = "interjection-color";
  } 
}

function interjectionOff() {
  for (i = 0; i < interjectionCount; i++) {
      interjection[i].className = "";
  } 
}

function articleOn() {
  for (i = 0; i < articleCount; i++) {
      article[i].className = "article-color";
  } 
}

function articleOff() {
  for (i = 0; i < articleCount; i++) {
      article[i].className = "";
  } 
}

// combining off functions
function allOff() {
  verbOff();
  nounOff();
  adjectiveOff();
  adverbOff();
  conjunctionOff();
  pronounOff();
  prepositionOff();
  interjectionOff();
  articleOff();

  verbStatus = 0;
  nounStatus = 0;
  adjectiveStatus = 0;
  adverbStatus = 0;
  conjunctionStatus = 0;
  pronounStatus = 0;
  prepositionStatus = 0;
  interjectionStatus = 0;
  articleStatus = 0;
}

// loop for interaction on each custom element
for (i = 0; i < verbCount; i++) {
  verb[i].onmouseover=function(){
    if (verbStatus == 0)
    {
      verbOn();
    }
  };
  verb[i].onmouseout=function(){
    if (verbStatus == 0)
    {
      verbOff();
    }
  };
  verb[i].onclick=function(){
    if (verbStatus == 0)
    {
      allOff();
      verbOn();
      verbStatus++;
    }
    else if (verbStatus == 1)
    {
      verbOff();
      verbStatus--;
    }
  };
}

for (i = 0; i < nounCount; i++) {
  noun[i].onmouseover=function(){
    if (nounStatus == 0)
    {
      nounOn();
    }
  };
  noun[i].onmouseout=function(){
    if (nounStatus == 0)
    {
      nounOff();
    }
  };
  noun[i].onclick=function(){
    if (nounStatus == 0)
    {
      allOff();
      nounOn();
      nounStatus++;
    }
    else if (nounStatus == 1)
    {
      nounOff();
      nounStatus--;
    }
  };
}

for (i = 0; i < adjectiveCount; i++) {
  adjective[i].onmouseover=function(){
    if (adjectiveStatus == 0)
    {
      adjectiveOn();
    }
  };
  adjective[i].onmouseout=function(){
    if (adjectiveStatus == 0)
    {
      adjectiveOff();
    }
  };
  adjective[i].onclick=function(){
    if (adjectiveStatus == 0)
    {
      allOff();
      adjectiveOn();
      adjectiveStatus++;
    }
    else if (adjectiveStatus == 1)
    {
      adjectiveOff();
      adjectiveStatus--;
    }
  };
}

for (i = 0; i < adverbCount; i++) {
  adverb[i].onmouseover=function(){
    if (adverbStatus == 0)
    {
      adverbOn();
    }
  };
  adverb[i].onmouseout=function(){
    if (adverbStatus == 0)
    {
      adverbOff();
    }
  };
  adverb[i].onclick=function(){
    if (adverbStatus == 0)
    {
      allOff();
      adverbOn();
      adverbStatus++;
    }
    else if (adverbStatus == 1)
    {
      adverbOff();
      adverbStatus--;
    }
  };
}

for (i = 0; i < conjunctionCount; i++) {
  conjunction[i].onmouseover=function(){
    if (conjunctionStatus == 0)
    {
      conjunctionOn();
    }
  };
  conjunction[i].onmouseout=function(){
    if (conjunctionStatus == 0)
    {
      conjunctionOff();
    }
  };
  conjunction[i].onclick=function(){
    if (conjunctionStatus == 0)
    {
      allOff();
      conjunctionOn();
      conjunctionStatus++;
    }
    else if (conjunctionStatus == 1)
    {
      conjunctionOff();
      conjunctionStatus--;
    }
  };
}

for (i = 0; i < pronounCount; i++) {
  pronoun[i].onmouseover=function(){
    if (pronounStatus == 0)
    {
      pronounOn();
    }
  };
  pronoun[i].onmouseout=function(){
    if (pronounStatus == 0)
    {
      pronounOff();
    }
  };
  pronoun[i].onclick=function(){
    if (pronounStatus == 0)
    {
      allOff();
      pronounOn();
      pronounStatus++;
    }
    else if (pronounStatus == 1)
    {
      pronounOff();
      pronounStatus--;
    }
  };
}

for (i = 0; i < prepositionCount; i++) {
  preposition[i].onmouseover=function(){
    if (prepositionStatus == 0)
    {
      prepositionOn();
    }
  };
  preposition[i].onmouseout=function(){
    if (prepositionStatus == 0)
    {
      prepositionOff();
    }
  };
  preposition[i].onclick=function(){
    if (prepositionStatus == 0)
    {
      allOff();
      prepositionOn();
      prepositionStatus++;
    }
    else if (prepositionStatus == 1)
    {
      prepositionOff();
      prepositionStatus--;
    }
  };
}

for (i = 0; i < interjectionCount; i++) {
  interjection[i].onmouseover=function(){
    if (interjectionStatus == 0)
    {
      interjectionOn();
    }
  };
  interjection[i].onmouseout=function(){
    if (interjectionStatus == 0)
    {
      interjectionOff();
    }
  };
  interjection[i].onclick=function(){
    if (interjectionStatus == 0)
    {
      allOff();
      interjectionOn();
      interjectionStatus++;
    }
    else if (interjectionStatus == 1)
    {
      interjectionOff();
      interjectionStatus--;
    }
  };
}

for (i = 0; i < articleCount; i++) {
  article[i].onmouseover=function(){
    if (articleStatus == 0)
    {
      articleOn();
    }
  };
  article[i].onmouseout=function(){
    if (articleStatus == 0)
    {
      articleOff();
    }
  };
  article[i].onclick=function(){
    if (articleStatus == 0)
    {
      allOff();
      articleOn();
      articleStatus++;
    }
    else if (articleStatus == 1)
    {
      articleOff();
      articleStatus--;
    }
  };
}