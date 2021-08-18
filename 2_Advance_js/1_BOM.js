/*
The Browser Object Model (BOM) is used to interact with the browser.
The default object of browser is window means you can call all the functions of window by specifying window or directly.

window.alert("hello javatpoint");  
    is same as:
alert("hello javatpoint");  

Note: The document object represents an html document. It forms DOM (Document Object Model)

WINDOW : document + history + screen + navigator + location

*/

/*
-------------------window object -----------------------------
The window object represents a window in browser. An object of window is created automatically by the browser.

Window is the object of browser, it is not the object of javascript. The javascript objects are string, array, date etc.

Note: if html document contains frame or iframe, browser creates additional window objects for each frame.

Methods of window object
The important methods of window object are as follows:

  Method              	Description
alert()	            displays the alert box containing message with ok button.
confirm()	          displays the confirm dialog box containing message with ok and cancel button.
prompt()	          displays a dialog box to get input from the user.
open()	            opens the new window.
close()	            closes the current window.
setTimeout()	      performs action after specified time like calling function, evaluating expressions etc.


*/

/*
--------------------------JavaScript History Object---------------------
The JavaScript history object represents an array of URLs visited by the user. By using this object, you can load previous, forward or any particular page.
The history object is the window property, so it can be accessed by:
  window.history  or history

---Property of JavaScript history object
There are only 1 property of history object.

No.	  Property	         Description
1	    length	    returns the length of the history URLs.

---Methods of JavaScript history object
There are only 3 methods of history object.

No.	      Method	         Description
1	      forward()	    loads the next page.
2       back()	      loads the previous page.
3	      go()	        loads the given page number.

Examples:
history.back();//for previous page  
history.forward();//for next page  
history.go(2);//for next 2nd page  
history.go(-2);//for previous 2nd page  

*/

/*
------------------------------JavaScript Navigator Object-----------------
The JavaScript navigator object is used for browser detection. 
It can be used to get browser information such as appName, appCodeName, userAgent etc.

he navigator object is the window property, so it can be accessed by: window.navigator or navigator

----Property of JavaScript navigator object
There are many properties of navigator object that returns information of the browser.

No.	    Property	                Description
1	      appName	              returns the name
2	      appVersion	          returns the version
3	      appCodeName	          returns the code name
4	      cookieEnabled	        returns true if cookie is enabled otherwise false
5	      userAgent	            returns the user agent
6	      language	            returns the language. It is supported in Netscape and Firefox only.
7	      userLanguage	        returns the user language. It is supported in IE only.
8	      plugins	              returns the plugins. It is supported in Netscape and Firefox only.
9	      systemLanguage	      returns the system language. It is supported in IE only.
10	    mimeTypes[]	          returns the array of mime type. It is supported in Netscape and Firefox only.
11	    platform	            returns the platform e.g. Win32.
12	    online	              returns true if browser is online otherwise false.

*/

/*
----------------------------------------------JavaScript Screen Object

The JavaScript screen object holds information of browser screen. It can be used to display screen width, height, colorDepth, pixelDepth etc.

The navigator object is the window property, so it can be accessed by:window.screen or screen

---Property of JavaScript Screen Object
There are many properties of screen object that returns information of the browser.

No.	 Property      	Description
1	    width	      returns the width of the screen
2	    height	    returns the height of the screen
3	    availWidth	returns the available width
4	    availHeight	returns the available height
5	    colorDepth	returns the color depth
6	     pixelDepth	returns the pixel depth.


*/
