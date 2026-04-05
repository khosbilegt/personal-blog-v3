---
title: "Data Compass"
type: "HACKATHON"
heroImage: "https://camo.githubusercontent.com/2c29dee02228eabbe08ca5b27cdcd2a2d6df597945fd2821a347c99d70c1137a/68747470733a2f2f692e696d6775722e636f6d2f64536d77324e732e706e67"
pubDate: "Aug 31 2025"
description: "Government data is powerful, but often scattered and difficult to use. DataCompass is an AI powered search engine that helps anyone discover, connect, and understand datasets from the ABS, data.gov.au, and other agencies."
isFeatured: true
---

## Context

Shortly after landing in Australia, I decided to give some hackathons a try to line my pockets. The second of which was Govhack, the largest open data hackathon in the southern hemisphere. There were a lot of people, took a trip to one of Salesforce's offices. It was neat, got free food and drinks, and hacked away for the first out of three days there. Then me and my teammate spent the next day in the university library's co-working section with plans of talking to each other, but we didn't actually do much talking and just ended up coding in solitude while sharing a large circular table.

We later found out that we ended up getting the Runner-Up prize in one of the 14 or so challenges: Navigating Australia's Data Landscape. Later at the Red Carpet Award Ceremony, I would come to find out that our concept wasn't really unique, and got us shortlisted was likely our professional-looking UI, built by my teammate whom you can reach on [LinkedIn](https://www.linkedin.com/in/zaya/). While he was polishing that part, I was building the MCP Server that powered it.

So we got around A$1500 and split it both ways. Awesome. Let's move on to the implementation details.

## Implementation

I'd experimented around with RAG before, but I hadn't actually shipped anything with it. I knew what it did, I knew how to build it but I had no use case for it. Data Compass was the perfect place to use it, but time constraints said no so we just ended up using the ABS' (Australian Bureau of Statistics) API, added a cool layer of abstraction that made results look clean, aggregated the sources so that individual figures were treated as the same level as an entire page to streamline the process.

What really gave our chatbot (dime-a-dozen) a unique spin was the 'Summarize' button, which analyzed the data, compared any sources that there were and then showed a cool dashboard-style chart of its findings, which only supports line charts, also due to time constraints.

You can see our demo video here: [https://www.youtube.com/watch?v=g9RGMCFELU4](https://www.youtube.com/watch?v=g9RGMCFELU4)

My involvement was on the backend side, where I strapped the OpenAI API into a streaming endpoint, paid 5 bucks out of pocket to open the account for testing and demo purposes, then building the MCP server and fiddling with SSH tunnels with my VPS server for debugging purposes. I ended up handling the deployment stuff as well, being a Backend Engineer by trade.

It used to be at https://govhack.koso.dev, but it has been taken down to make room for other projects because the NextJS and Python processes were eating up 30% of my RAM.

## Conclusion

It was a neat 3 days, helped me get back in the groove after being displaced from my comfort zone, and reminded me that if I'm a decent developer, I was competent regardless of where I was, not just a frog in a well.

Also, big thanks to [Sarah Kono](https://www.linkedin.com/in/sarahkono/) from the Govhack team for letting me know that all my LinkedIn posts had comments disabled for people who hadn't connected with me, which was limiting my reach and interaction with people who found me through their home feeds.
