CmdUtils.CreateCommand({
  name: "gumtree",
  synonyms: [ "gt" ],
  preview: "Searches for adverts at gumtree.com",
  takes: {"search for": noun_arb_text},

  execute: function(input) {
    var query = input.text;
    var url   = "http://www.gumtree.com/cgi-bin/list_postings.pl?posting_cat=2477&search_terms=" + query;

    Utils.openUrlInBrowser(url);
    CmdUtils.setLastResult(url);
  },
  
  homepage: "http://dave.org.uk/ubiquity/gumtree.html",
  author: { name: "Dave Cross", email: "dave@dave.org.uk"},
  license: "MPL",
});

