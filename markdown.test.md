# Basic markdown
[Read about basic md](https://help.github.com/articles/markdown-basics/)

[Read markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "md cheat sheet")

```###### The 6th largest heading (an h6 tag)
###### The 6th largest heading (an h6 tag)

### Blockquote
In the words of Abraham Lincoln:

> Pardon my french. 
> Lorem ipsum dolor sit amet. <br>
> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, dolorum.

*This text will be italic* 
**This text will be bold**

**Everyone _must_ attend the meeting at 5 o'clock today.**

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, obcaecati? Placeat ducimus dolor, nostrum consequatur, soluta, possimus dignissimos sint cumque quas amet fugiat perspiciatis, debitis cum non. Maxime, dolorem, et.

## Lists

### Unordered list
* Item
* Item
* Item

### Ordered list
1. Item 1
2. Item 2
3. Item 3

## Code
### Inline

```Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.```
Here's an idea: why don't we take `SuperiorProject` and turn it into `**Reasonable**Project`.

### Block
Check out this neat program I wrote:

```
x = 0
x = 2 + 2
what is x
```

## Links

###Link straight
without markdown <br>
`https://help.github.com/articles/markdown-basics/`
https://help.github.com/articles/markdown-basics/


###Link markdown
Combined square and round <br>
`[this is within round brackets](https://help.github.com/articles/markdown-basics/)`

[this is within round brackets](https://help.github.com/articles/markdown-basics/)

# Github specific

##Task lists - github
From [writing on github](https://help.github.com/articles/writing-on-github/)

Lists can be turned into task lists by prefacing list items with [ ] or [x] (incomplete or complete, respectively).

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> are supported
- [x] list syntax is required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

Task lists can be nested to better structure your tasks:

- [ ] a bigger project
  - [ ] first subtask #1234
  - [ ] follow up subtask #4321
  - [ ] final subtask cc @mention
- [ ] a separate task

## Underscores
Where Markdown transforms underscores (_) into italics, GFM ignores underscores in words, like this:

```
wow_great_stuff
do_this_and_do_that_and_another_thing.
```
wow_great_stuff <br>
do_this_and_do_that_and_another_thing.

## Code blocks
using \```
```js
function test() {
  console.log("notice the blank line before this function?");
}
```
using 4 spaces

    function test() {
      console.log("notice the blank line before this function?");
    }

## Tables
```markdown
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```
Becomes:

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |

## Images

Here's our logo (hover to see the title text):

### Inline-style: 

full path - note the trailing ?raw=true
```markdown
![alt txt 1]
(https://github.com/GeoForum/geoforumtutorials/blob/master/www/img/leaflet/marker-icon-2x.png?raw=true 
"full path icon")
```
![alt txt 1](https://github.com/GeoForum/geoforumtutorials/blob/master/www/img/leaflet/marker-icon-2x.png?raw=true "full path icon")

relative path
`![alt txt 2](www/img/leaflet/marker-icon-2x.png "Relative path Leaflet icon 2x")`
![alt txt 2](www/img/leaflet/marker-icon-2x.png "Relative path Leaflet icon 2x")

### Reference-style: 
```
Lorem ipsum dolor sit amet.
![ref style alt txt][img1]
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ipsa!
[img1]: www/img/leaflet/marker-icon-2x.png "ref style"
```

Lorem ipsum dolor sit amet.
![ref style alt txt][img1]
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, atque?
[img1]: www/img/leaflet/marker-icon-2x.png "ref style"