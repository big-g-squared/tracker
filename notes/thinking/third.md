
##### wait so how do i toggle the header again?

Nevermind i got it

Neato. 

So today I'm working on slowing things down, being a better meditator, and working consistently on the app. Didn't have a great day, but I did have a productive day so far.

[Link to second](second.md)

Ok. So getting started, I want to start by getting the start date using the new class.

Maybe I should list what that code looks like in order to properly reference it.

```python

start = event['start'].get('dateTime', event['start'].get('date'))

```

I would assume that the the end dateTime would be pretty much the same thing.

I think I'm going to learn a little more about the get function.

Alright, so now we're pretty much done with the class (at least I hope we are). So the next thing is instantiating a bunch of classes and then doing something cool with the dates? Right? Then we can practice on an actual example.

Ok how do we do this thing again? Let me write this up in a code block.

```python
events_result = service.events().list(calendarId='primary', timeMin=now, maxResults=10, singleevents=True, orderBy='startTime').execute()
events = events_result.get('items', [])

```

(I also learned how to make the python stuff on a markdown file look nice so thats a plus)