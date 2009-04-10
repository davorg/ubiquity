CmdUtils.CreateCommand({
  name: "lovefilm",
  synonyms: [ "lf" ],
  preview: "Searches for film titles, directors or actors at LOVEFiLM.com", 
  takes: {"search for": noun_arb_text},

  execute: function(input) {
    var query = input.text;
    var url   = "http://www.lovefilm.com/search/overview.html?search_keywords=" + query;

    Utils.openUrlInBrowser(url);
    CmdUtils.setLastResult(url);
  },
  
  homepage: "http://dave.org.uk/ubiquity/lovefilm.html",
  author: { name: "Dave Cross", email: "dave@dave.org.uk"},
  license: "MPL",
});

