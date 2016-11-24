---
title: Creating own reader
slug: creating-own-reader
---

# Setup
### <header>
```html
<link rel="stylesheet" type="text/css" href="path/to/vizabi.css">
```

### <body>
```html
<div id="placeholder" style="width: 600px; height: 400px;"></div>

<script src="path/to/d3.js"></script>
<script src="path/to/vizabi.js"></script>
<script>
  Vizabi.Reader.extend("your-reader", {

    /**
     * Initializes the reader.
     * @param {Object} info Information about the reader
     */
    init: function (info) {
      this._name = 'your-reader';
      this._path = info.path;
    },

    /**
     * Reads from source
     * @param {Object} query to be performed
     * @param {Object=} parsers for fields
     * @returns {Promise} a promise that will be resolved when data is read
     */
    read: function (query, parsers) {
      // Load data somehow
      // For example via jQuery ajax
      return $.get(this._path)
        .done(function (data) {
          // apply query + parsers
          return data;
        });
    }

  });

  var viz = Vizabi('BubbleChart', document.getElementById('placeholder'), {
    state: {},
    data: {
      reader: 'your-reader',
      path: '/address/that/goes/to/reader/as/info.path'
    }
  });
</script>
```

[#](#read) .**read**(_query_ [, _parsers_])

Method should return a `Promise` that will return `array` of `object`s when resovled.
Objects can be [concepts](), [datapoints]() or [entities]().
#### query fields
```
select: { key: [], value: [] } // contain fields that you must include to result rows
``` 

```
from: '' // one of `entities`, `datapoints` or `concepts`.
```

```
where: { $and: { geo: '$geo' } }, // contains join key
join: { $geo: { key: 'geo', where: { category: 'country' } } }
```

```
where: { $and: { category: 'country' } } // contains field and value to filter
```

#### parsers
```
  {
    // key is row field
    time: function(value) {
      return new Date(value);
    }
  } 
```