To be precise, NextJS will pass a params prop

into every page component.

So whenever you register something as a page component

by making it the default export in a page JS file,

it will receive this params prop.

And this params prop here will be an object which holds

one key for every dynamic path segment.

So here we have that ID dynamic path segment,

and therefore this params object will have an ID key

and that will then be our news id.