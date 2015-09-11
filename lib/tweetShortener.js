'use strict';

var longWords = ["hello",
"to", "two", "too",
"for", "four",'be','you',
"at","and"]

var shortWords = ['hi',
'2', '2', '2',
'4','4',
'b','u',"@","&"]

var tweetShortener = {
  wordSubstituter: function(tweet){
    var tweetArray = tweet.split(" ")
    var answer = []
    tweetArray.forEach(function(word){
      var i;
      for(i=0;i<shortWords.length;i++){
        if(word.toLowerCase() == longWords[i]){
          word = shortWords[i];
        }
      }
      answer.push(word);
    });
    // debugger;
    return answer.join(" ")
  },
  bulkShortener: function(arrayOfTweets){
    var that = this;
    var shortenedArray = [];
    arrayOfTweets.forEach(function(tweet){
      shortenedArray.push(that.wordSubstituter(tweet));
    });
    return shortenedArray;
  },
  selectiveShortener: function(tweet){
    var that = this;
    var shortenedTweet;
      if(tweet.length>140){
      return that.wordSubstituter(tweet);
      }
      else{
        return tweet;
      }
  },
  shortenedTruncator: function(tweet){
    tweet = this.selectiveShortener(tweet)
    if(tweet.length>140){
    return tweet.slice(0,136) + " ...";
    }
    else{
      return tweet;
    }

  },
};
