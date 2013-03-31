// Generated by CoffeeScript 1.3.3
(function() {
  var BookmarkCompleter, DomainCompleter, HistoryCache, HistoryCompleter, MultiCompleter, RankingUtils, RegexpCache, Suggestion, TabCompleter, root;

  Suggestion = (function() {

    Suggestion.prototype.showRelevancy = false;

    function Suggestion(queryTerms, type, url, title, computeRelevancyFunction, extraRelevancyData) {
      this.queryTerms = queryTerms;
      this.type = type;
      this.url = url;
      this.title = title;
      this.computeRelevancyFunction = computeRelevancyFunction;
      this.extraRelevancyData = extraRelevancyData;
      this.title || (this.title = "");
    }

    Suggestion.prototype.computeRelevancy = function() {
      return this.relevancy = this.computeRelevancyFunction(this);
    };

    Suggestion.prototype.generateHtml = function() {
      var relevancyHtml;
      if (this.html) {
        return this.html;
      }
      relevancyHtml = this.showRelevancy ? "<span class='relevancy'>" + (this.computeRelevancy()) + "</span>" : "";
      return this.html = "<div class=\"vimiumReset vomnibarTopHalf\">\n   <span class=\"vimiumReset vomnibarSource\">" + this.type + "</span>\n   <span class=\"vimiumReset vomnibarTitle\">" + (this.highlightTerms(Utils.escapeHtml(this.title))) + "</span>\n </div>\n <div class=\"vimiumReset vomnibarBottomHalf\">\n  <span class=\"vimiumReset vomnibarUrl\">" + (this.shortenUrl(this.highlightTerms(this.url))) + "</span>\n  " + relevancyHtml + "\n</div>";
    };

    Suggestion.prototype.shortenUrl = function(url) {
      return this.stripTrailingSlash(url).replace(/^http:\/\//, "");
    };

    Suggestion.prototype.stripTrailingSlash = function(url) {
      if (url[url.length - 1] === "/") {
        url = url.substring(url, url.length - 1);
      }
      return url;
    };

    Suggestion.prototype.highlightTerms = function(string) {
      var end, i, ranges, start, term, _i, _j, _len, _len1, _ref, _ref1;
      ranges = [];
      _ref = this.queryTerms;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        term = _ref[_i];
        i = string.search(RegexpCache.get(term));
        if (i >= 0) {
          ranges.push([i, i + term.length]);
        }
      }
      if (ranges.length === 0) {
        return string;
      }
      ranges = this.mergeRanges(ranges.sort(function(a, b) {
        return a[0] - b[0];
      }));
      ranges = ranges.sort(function(a, b) {
        return b[0] - a[0];
      });
      for (_j = 0, _len1 = ranges.length; _j < _len1; _j++) {
        _ref1 = ranges[_j], start = _ref1[0], end = _ref1[1];
        string = string.substring(0, start) + ("<span class='vomnibarMatch'>" + (string.substring(start, end)) + "</span>") + string.substring(end);
      }
      return string;
    };

    Suggestion.prototype.mergeRanges = function(ranges) {
      var mergedRanges, previous;
      previous = ranges.shift();
      mergedRanges = [previous];
      ranges.forEach(function(range) {
        if (previous[1] >= range[0]) {
          return previous[1] = Math.max(range[1], previous[1]);
        } else {
          mergedRanges.push(range);
          return previous = range;
        }
      });
      return mergedRanges;
    };

    return Suggestion;

  })();

  BookmarkCompleter = (function() {

    function BookmarkCompleter() {}

    BookmarkCompleter.prototype.currentSearch = null;

    BookmarkCompleter.prototype.bookmarks = null;

    BookmarkCompleter.prototype.filter = function(queryTerms, onComplete) {
      this.queryTerms = queryTerms;
      this.onComplete = onComplete;
      this.currentSearch = {
        queryTerms: this.queryTerms,
        onComplete: this.onComplete
      };
      if (this.bookmarks) {
        return this.performSearch();
      }
    };

    BookmarkCompleter.prototype.onBookmarksLoaded = function() {
      if (this.currentSearch) {
        return this.performSearch();
      }
    };

    BookmarkCompleter.prototype.performSearch = function() {
      var onComplete, results, suggestions,
        _this = this;
      results = this.bookmarks.filter(function(bookmark) {
        return RankingUtils.matches(_this.currentSearch.queryTerms, bookmark.url, bookmark.title);
      });
      suggestions = results.map(function(bookmark) {
        return new Suggestion(_this.currentSearch.queryTerms, "bookmark", bookmark.url, bookmark.title, _this.computeRelevancy);
      });
      onComplete = this.currentSearch.onComplete;
      this.currentSearch = null;
      return onComplete(suggestions);
    };

    BookmarkCompleter.prototype.refresh = function() {
      var _this = this;
      this.bookmarks = null;
      return chrome.bookmarks.getTree(function(bookmarks) {
        _this.bookmarks = _this.traverseBookmarks(bookmarks).filter(function(bookmark) {
          return bookmark.url != null;
        });
        return _this.onBookmarksLoaded();
      });
    };

    BookmarkCompleter.prototype.traverseBookmarks = function(bookmarks) {
      var bookmark, results, toVisit;
      results = [];
      toVisit = bookmarks;
      while (toVisit.length > 0) {
        bookmark = toVisit.shift();
        results.push(bookmark);
        if (bookmark.children) {
          toVisit.push.apply(toVisit, bookmark.children);
        }
      }
      return results;
    };

    BookmarkCompleter.prototype.computeRelevancy = function(suggestion) {
      return RankingUtils.wordRelevancy(suggestion.queryTerms, suggestion.url, suggestion.title);
    };

    return BookmarkCompleter;

  })();

  HistoryCompleter = (function() {

    function HistoryCompleter() {}

    HistoryCompleter.prototype.filter = function(queryTerms, onComplete) {
      var results,
        _this = this;
      this.currentSearch = {
        queryTerms: this.queryTerms,
        onComplete: this.onComplete
      };
      results = [];
      return HistoryCache.use(function(history) {
        var suggestions;
        results = history.filter(function(entry) {
          return RankingUtils.matches(queryTerms, entry.url, entry.title);
        });
        suggestions = results.map(function(entry) {
          return new Suggestion(queryTerms, "history", entry.url, entry.title, _this.computeRelevancy, entry);
        });
        return onComplete(suggestions);
      });
    };

    HistoryCompleter.prototype.computeRelevancy = function(suggestion) {
      var historyEntry, recencyScore, score, wordRelevancy;
      historyEntry = suggestion.extraRelevancyData;
      recencyScore = RankingUtils.recencyScore(historyEntry.lastVisitTime);
      wordRelevancy = RankingUtils.wordRelevancy(suggestion.queryTerms, suggestion.url, suggestion.title);
      return score = (wordRelevancy + Math.max(recencyScore, wordRelevancy)) / 2;
    };

    HistoryCompleter.prototype.refresh = function() {};

    return HistoryCompleter;

  })();

  DomainCompleter = (function() {

    function DomainCompleter() {}

    DomainCompleter.prototype.domains = null;

    DomainCompleter.prototype.filter = function(queryTerms, onComplete) {
      var _this = this;
      if (queryTerms.length > 1) {
        return onComplete([]);
      }
      if (this.domains) {
        return this.performSearch(queryTerms, onComplete);
      } else {
        return this.populateDomains(function() {
          return _this.performSearch(queryTerms, onComplete);
        });
      }
    };

    DomainCompleter.prototype.performSearch = function(queryTerms, onComplete) {
      var domain, domainCandidates, domains, query, topDomain;
      query = queryTerms[0];
      domainCandidates = (function() {
        var _results;
        _results = [];
        for (domain in this.domains) {
          if (domain.indexOf(query) >= 0) {
            _results.push(domain);
          }
        }
        return _results;
      }).call(this);
      domains = this.sortDomainsByRelevancy(queryTerms, domainCandidates);
      if (domains.length === 0) {
        return onComplete([]);
      }
      topDomain = domains[0][0];
      return onComplete([new Suggestion(queryTerms, "domain", topDomain, null, this.computeRelevancy)]);
    };

    DomainCompleter.prototype.sortDomainsByRelevancy = function(queryTerms, domainCandidates) {
      var domain, recencyScore, results, score, wordRelevancy, _i, _len;
      results = [];
      for (_i = 0, _len = domainCandidates.length; _i < _len; _i++) {
        domain = domainCandidates[_i];
        recencyScore = RankingUtils.recencyScore(this.domains[domain].lastVisitTime || 0);
        wordRelevancy = RankingUtils.wordRelevancy(queryTerms, domain, null);
        score = wordRelevancy + Math.max(recencyScore, wordRelevancy) / 2;
        results.push([domain, score]);
      }
      results.sort(function(a, b) {
        return b[1] - a[1];
      });
      return results;
    };

    DomainCompleter.prototype.populateDomains = function(onComplete) {
      var _this = this;
      return HistoryCache.use(function(history) {
        _this.domains = {};
        history.forEach(function(entry) {
          var domain, previousEntry;
          domain = _this.parseDomain(entry.url);
          if (domain) {
            previousEntry = _this.domains[domain];
            if (!previousEntry || (previousEntry.lastVisitTime < entry.lastVisitTime)) {
              return _this.domains[domain] = entry;
            }
          }
        });
        chrome.history.onVisited.addListener(_this.onPageVisited.bind(_this));
        return onComplete();
      });
    };

    DomainCompleter.prototype.onPageVisited = function(newPage) {
      var domain;
      domain = this.parseDomain(newPage.url);
      if (domain) {
        return this.domains[domain] = newPage;
      }
    };

    DomainCompleter.prototype.parseDomain = function(url) {
      return url.split("/")[2] || "";
    };

    DomainCompleter.prototype.computeRelevancy = function() {
      return 1;
    };

    return DomainCompleter;

  })();

  TabCompleter = (function() {

    function TabCompleter() {}

    TabCompleter.prototype.filter = function(queryTerms, onComplete) {
      var _this = this;
      return chrome.tabs.query({}, function(tabs) {
        var results, suggestions;
        results = tabs.filter(function(tab) {
          return RankingUtils.matches(queryTerms, tab.url, tab.title);
        });
        suggestions = results.map(function(tab) {
          var suggestion;
          suggestion = new Suggestion(queryTerms, "tab", tab.url, tab.title, _this.computeRelevancy);
          suggestion.tabId = tab.id;
          return suggestion;
        });
        return onComplete(suggestions);
      });
    };

    TabCompleter.prototype.computeRelevancy = function(suggestion) {
      return RankingUtils.wordRelevancy(suggestion.queryTerms, suggestion.url, suggestion.title);
    };

    return TabCompleter;

  })();

  MultiCompleter = (function() {

    function MultiCompleter(completers) {
      this.completers = completers;
      this.maxResults = 10;
    }

    MultiCompleter.prototype.refresh = function() {
      var completer, _i, _len, _ref, _results;
      _ref = this.completers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        completer = _ref[_i];
        if (completer.refresh) {
          _results.push(completer.refresh());
        }
      }
      return _results;
    };

    MultiCompleter.prototype.filter = function(queryTerms, onComplete) {
      var completer, completersFinished, suggestions, _i, _len, _ref, _results,
        _this = this;
      if (this.filterInProgress) {
        this.mostRecentQuery = {
          queryTerms: queryTerms,
          onComplete: onComplete
        };
        return;
      }
      RegexpCache.clear();
      this.mostRecentQuery = null;
      this.filterInProgress = true;
      suggestions = [];
      completersFinished = 0;
      _ref = this.completers;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        completer = _ref[_i];
        _results.push(completer.filter(queryTerms, function(newSuggestions) {
          var result, results, _j, _len1;
          suggestions = suggestions.concat(newSuggestions);
          completersFinished += 1;
          if (completersFinished >= _this.completers.length) {
            results = _this.sortSuggestions(suggestions).slice(0, _this.maxResults);
            for (_j = 0, _len1 = results.length; _j < _len1; _j++) {
              result = results[_j];
              result.generateHtml();
            }
            onComplete(results);
            _this.filterInProgress = false;
            if (_this.mostRecentQuery) {
              return _this.filter(_this.mostRecentQuery.queryTerms, _this.mostRecentQuery.onComplete);
            }
          }
        }));
      }
      return _results;
    };

    MultiCompleter.prototype.sortSuggestions = function(suggestions) {
      var suggestion, _i, _len;
      for (_i = 0, _len = suggestions.length; _i < _len; _i++) {
        suggestion = suggestions[_i];
        suggestion.computeRelevancy(this.queryTerms);
      }
      suggestions.sort(function(a, b) {
        return b.relevancy - a.relevancy;
      });
      return suggestions;
    };

    return MultiCompleter;

  })();

  RankingUtils = {
    matches: function(queryTerms, url, title) {
      var regexp, term, _i, _len;
      if (queryTerms.length === 0) {
        return false;
      }
      for (_i = 0, _len = queryTerms.length; _i < _len; _i++) {
        term = queryTerms[_i];
        regexp = RegexpCache.get(term);
        if (!(title.match(regexp) || url.match(regexp))) {
          return false;
        }
      }
      return true;
    },
    wordRelevancy: function(queryTerms, url, title) {
      var queryLength, term, titleScore, urlScore, _i, _len;
      queryLength = 0;
      urlScore = 0.0;
      titleScore = 0.0;
      for (_i = 0, _len = queryTerms.length; _i < _len; _i++) {
        term = queryTerms[_i];
        queryLength += term.length;
        if (url.indexOf(term) >= 0) {
          urlScore += 1;
        }
        if (title && title.indexOf(term) >= 0) {
          titleScore += 1;
        }
      }
      urlScore = urlScore / queryTerms.length;
      urlScore = urlScore * RankingUtils.normalizeDifference(queryLength, url.length);
      if (title) {
        titleScore = titleScore / queryTerms.length;
        titleScore = titleScore * RankingUtils.normalizeDifference(queryLength, title.length);
      } else {
        titleScore = urlScore;
      }
      return (urlScore + titleScore) / 2;
    },
    recencyScore: function(lastAccessedTime) {
      var recency, recencyDifference, recencyScore;
      this.oneMonthAgo || (this.oneMonthAgo = 1000 * 60 * 60 * 24 * 30);
      recency = Date.now() - lastAccessedTime;
      recencyDifference = Math.max(0, this.oneMonthAgo - recency) / this.oneMonthAgo;
      return recencyScore = recencyDifference * recencyDifference * recencyDifference;
    },
    normalizeDifference: function(a, b) {
      var max;
      max = Math.max(a, b);
      return (max - Math.abs(a - b)) / max;
    }
  };

  RegexpCache = {
    init: function() {
      this.initialized = true;
      this.clear();
      return this.escapeRegExp || (this.escapeRegExp = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g);
    },
    clear: function() {
      return this.cache = {};
    },
    get: function(string) {
      var _base;
      if (!this.initialized) {
        this.init();
      }
      return (_base = this.cache)[string] || (_base[string] = this.escapeRegexp(string));
    },
    escapeRegexp: function(string) {
      return new RegExp(string.replace(this.escapeRegExp, "\\$&"), "i");
    }
  };

  HistoryCache = {
    size: 20000,
    history: null,
    reset: function() {
      this.history = null;
      return this.callbacks = null;
    },
    use: function(callback) {
      if (this.history == null) {
        return this.fetchHistory(callback);
      }
      return callback(this.history);
    },
    fetchHistory: function(callback) {
      var _this = this;
      if (this.callbacks) {
        return this.callbacks.push(callback);
      }
      this.callbacks = [callback];
      return chrome.history.search({
        text: "",
        maxResults: this.size,
        startTime: 0
      }, function(history) {
        var _i, _len, _ref;
        history.sort(_this.compareHistoryByUrl);
        _this.history = history;
        chrome.history.onVisited.addListener(_this.onPageVisited.bind(_this));
        _ref = _this.callbacks;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          callback = _ref[_i];
          callback(_this.history);
        }
        return _this.callbacks = null;
      });
    },
    compareHistoryByUrl: function(a, b) {
      if (a.url === b.url) {
        return 0;
      }
      if (a.url > b.url) {
        return 1;
      }
      return -1;
    },
    onPageVisited: function(newPage) {
      var i, pageWasFound;
      i = HistoryCache.binarySearch(newPage, this.history, this.compareHistoryByUrl);
      pageWasFound = this.history[i].url === newPage.url;
      if (pageWasFound) {
        return this.history[i] = newPage;
      } else {
        return this.history.splice(i, 0, newPage);
      }
    }
  };

  HistoryCache.binarySearch = function(targetElement, array, compareFunction) {
    var compareResult, element, high, low, middle;
    high = array.length - 1;
    low = 0;
    while (low <= high) {
      middle = Math.floor((low + high) / 2);
      element = array[middle];
      compareResult = compareFunction(element, targetElement);
      if (compareResult > 0) {
        high = middle - 1;
      } else if (compareResult < 0) {
        low = middle + 1;
      } else {
        return middle;
      }
    }
    if (compareFunction(element, targetElement) < 0) {
      return middle + 1;
    } else {
      return middle;
    }
  };

  root = typeof exports !== "undefined" && exports !== null ? exports : window;

  root.Suggestion = Suggestion;

  root.BookmarkCompleter = BookmarkCompleter;

  root.MultiCompleter = MultiCompleter;

  root.HistoryCompleter = HistoryCompleter;

  root.DomainCompleter = DomainCompleter;

  root.TabCompleter = TabCompleter;

  root.HistoryCache = HistoryCache;

  root.RankingUtils = RankingUtils;

}).call(this);
