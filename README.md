# codeid

A dead simple, random 8-character, universal \"New Unique ID\" string generator, using uppercase letters and numbers that don't look alike. A.K.A., UUIDs FOR HUMANS.

## From the console ([Nodejs >= 8.3.0 required](https://nodejs.org/))

```
morpheus:codeid carlos8f$ codeid
KGAFJVWR
morpheus:codeid carlos8f$ codeid
YHT3DTAW
```

ETC.

## Node.js interface

First install it as a dep in your project:

```
$ npm install --save codeid
```

Then call it as a function to get a new ID:

```
var newid = require('codeid')()
console.log('newid', newid)
```

Output:

```
CVY6VWWG
```

Happy hashing ;)

Cheers,
Carlos

- - -

### License: MIT

- Copyright (C) 2018 Carlos Rodriguez <carlos@s8f.org> (https://s8f.org/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
