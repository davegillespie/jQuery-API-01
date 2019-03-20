/* API EXERCISE 1
Skills: API’s, jQuery’s get method
Task: Create a webpage that displays the posts from the AWW Subreddit.
Build Specifications
Use jQuery to request data from the https://www.reddit.com/r/aww/.json API.
Display the results on the page.
At a minimum, include a title and thumbnail image.
Extended Challenges
Only show the first ten results.
Include a link to the original post (use permalink) */



/* THE COMMON MAN’S REDDIT
Task: Create a webpage that displays the posts from the AWW Subreddit.
Build Specifications
1. Use jQuery to request data from the https://www.reddit.com/r/aww/.json API.
2. Display the results on the page.
3. At a minimum, include a title, image and working link for each post. (Easiest is to use the
thumbnail for the image, but there are other images in the JSON response.)
4. Make it look good with some CSS.
Bonus
Only show the first ten results. */



$(() => {
  $.get('https://www.reddit.com/r/aww/.json', (data) => {
    for (i = 0; i < 11; i++) {

    let title = data.data.children[i].data.author;
    let image=  data.data.children[i].data.thumbnail;

    $('<div><p>'+title+'<p>').appendTo('.data');
    $('<img src="'+image+'"/></div>').appendTo('.data');
    }
    console.log(data);
  });
});
