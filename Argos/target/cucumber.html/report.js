$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search",
  "description": "As a end user\r\nI want to search for a product\r\nSo that i can view respective products",
  "id": "search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "# @smoke @live"
    }
  ],
  "line": 9,
  "name": "valid search",
  "description": "",
  "id": "search;valid-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for a product \"\u003csearchTerm\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see all products of \"\u003csearchTerm\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search;valid-search;",
  "rows": [
    {
      "cells": [
        "searchTerm"
      ],
      "line": 15,
      "id": "search;valid-search;;1"
    },
    {
      "cells": [
        "Nike"
      ],
      "line": 16,
      "id": "search;valid-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11547385173,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "valid search",
  "description": "",
  "id": "search;valid-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for a product \"Nike\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see all products of \"Nike\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDef.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 184878933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 24
    }
  ],
  "location": "SearchStepDef.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 6124436907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nike",
      "offset": 30
    }
  ],
  "location": "SearchStepDef.i_should_see_all_products_of(String)"
});
formatter.result({
  "duration": 3061388373,
  "status": "passed"
});
formatter.after({
  "duration": 911182507,
  "status": "passed"
});
});