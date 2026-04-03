---
title: "Domain-Driven Design"
heroImage: "https://m.media-amazon.com/images/I/81ykBjVaUjL.jpg"
pubDate: "Jan 12 2025"
type: "PROGRAMMING"
---

## Reflection

My Senior at work recommended me to read Domain-Driven Design to better understand Software Engineering principles. I had been working for some time then, around a year, when he recommended it to me. It took me 6 months and scheduling a flight during my annual leave for me to actually read it.

After starting it, I could immediately see why it's such a highly recommended book. It adds the eponymous terminology of "domain" to programming, encompassing a real-world concept and paradigm. It essentially means that for a software to be actually useful, it should be speaking the same "language" as the user.

For a developer, building a dev tool is fairly simple since we already speak the language. On the other hand, making software for a real estate agency is different. There are terminologies that mean different things, sometimes their meanigns conflicting, sometimes with approximate meanings but their exact nature causing various issues.

A "schema" in most development contexts would be referring to a database, but when it comes to architecture (the real building kind), "schema" could mean a schematic design similar to a blueprint. This means that when talking to the stakeholders, whether it be a Project Manager or a Client, a single, clear definition should be outlined and used henceforth.

It also encourages drawing a clear line between the different domains. For example, in the codebase, comments on a migration script could refer to "schema" in the context of a database instead of in the architectural context, because everyone decided to draw a line between the codebase and the meetings, where in the scripts relating to databases, the programming definition should be used instead.

While most of its contents have been taken out, broken into parts and has been embedded into software conventions already, reading the actual source material made me appreciate "domain experts" a lot more --people whom I previously assumed didn't need to be in the room when talking about technical decisions. After I'd finished reading the book and returned from my trip, I saw the domain experts in our Sprint team in a different light, and hopefully my attitude and performance in meetings reflected that.

After all, if you can't explain how your software works in simple terms to someone who understands the domain more than you, who should be able to infer from their knowledge and context knowledge what most of it should do, then that means you just aren't that good at explaining. Not being able to explain your code also means that you don't truly understand the purpose of the software, in business terms, even if the codebase is impeccable and has no faults. It should always be doing something for someone, and that "client" should be able to see the value in your proposition.
