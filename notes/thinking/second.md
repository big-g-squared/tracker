## What do I have to do now

I had a pretty good morning today. I kind of wanna keep it rolling. I guess the next thing would be to produce the properties. It would be pretty cool to 
create the properties in a neato way.

So I need to access all of the properties of the Event class. I'm trying to access both properties and abilities. For example

- Name of event
- Date range of event
- Create a new event
- Reschedule an event

Ok so what next. I think I'll work on the name of the event. There is some pattern where I either have the instance
ready or I don't (I mean the Google calendar API instance).

So I think I will just assume that I begin with an instantiated object. I mean, I could just include a static function that instantiates the item. But then I'm assuming that I know how it should instantiated every time. I feel like if I don't assume how the object is instantiated is a bit of a premature optimization. Yeah, I'll just assume its instantiated correctly so the only thing that I don't assume is whether or not its instantiated or not. It might be a good idea to do that in the constructor but still include the static function.

### 12:06am

I think I should also create a class that handles the google service instance by giving the Event class something to interact with using an interface, but maybe that might be assuming too much about the direction of the project (and thus adding uneeded overhead) so let me go ahead and just assume that the Event class has knowledge about the Google service

### 12:50am

So I figured out why the event times are called in the particular way that they're called: it's because the object in which the start and end time is stored is actually a nested object that acts like a google object depending on whether or not the event is recurring. What gets returned is something you can call "get" by, and you kind of have to despite it being pretty redundant. Given that the event could have multiple start times, *despite the fact that we are assuming that the event is being returned as a normal single event* \(check out (the docs)[https://developers.google.com/calendar/api/v3/reference/events] for more detail\), we still need to treat the returned object as if it could be an object returned by a recurring event. Maybe it returns multiple start times?