---
title: "Agents as a Solution"
pubDate: "June 20 2026"
---

Agents have been out for more than a year now. Initially, I had been pessimistic and dismissive about them. They were sold as this almighty tool that could change the landscape of work forever, and many took those marketing slides at face value. Everything that people said about them seemed to be exaggerated and it simply didn't click for me. Whether that was because most people grifting about it didn't actually understand them, or whether they simply couldn't articulate what they had realized, or whether they took something that actually worked and dialed it up to 11 is a mystery.

It wasn't until a couple days ago that I had an epiphany. For context, my current day job involves building a dating app with a built-in AI matchmaker. Since we had an agent that helped people date, we figured we'd add some bots to chat with in the early stages of the app when there weren't many users on the app. While we were polishing how they act, we came across a very common problem: geographic context.

Essentially, our thought process was that if someone lived in a city that's hours away from a beach, they shouldn't be casually talking about visiting it everyday. To actually feed that knowledge into our roleplay agents, the old school way would involve defining some flags and doing some web scraping, preparing some data that would dictate how it would act. Overall, it would be a bunch of busywork which an early-stage, boostrapped startup shouldn't be wasting too much time on.

In my eternal pursuit of finding easier ways to do stuff because I'm lazy, my mind immediately came to a very surprising conclusion: a research agent. A user registers, an event fires off and a research agent is fired off. The agent then researches the area and prepares some detailed location/area prompt, common restaurants/cafes and some landmarks, what the area is all about and how people go on about their life. Then we cache that so every town gets this detailed, AI-generated prompt for them which is then given to the agent. Previously, this would be a task that's more complicates than doing it manually, but now, it's something that's as easy as installing Langchain and writing a 100 lines of code.

Now, for someone who loves using AI to code, but doesn't trust it enough so starts a new session for each feature and has it make small, incrementive changes, this came as a surprise. Point is, I thought about it as I would a <u>solution</u>. The same way I'd think about using Amazon Rekognition for face detection. It's now something that's simply in our toolset, and something that we can actually apply to solve problems when you need to, because they have their use cases and even if they aren't what they're sold to be, they're undoubtedly useful.

As a result, I think I understand this hype, even if a little, and I think having agents as a solution to busywork as one of the many tools in our utility belt is awesome.
