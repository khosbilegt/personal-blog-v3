---
title: "MQ Timetable Exporter"
pubDate: "Jan 2026"
type: "PERSONAL"
heroImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Macquarie_University.png"
description: "A Chrome Extension that allows Macquarie University students to export their timetable from the Class Registration window in the student portal to iCalendar (.ics) format."
---

## Context

I started attending Macquarie University in 2025 and had gotten into the habit of using my phone's Calendar app to handle my time management. It gave me a single source of truth to make sure that I did have time before agreeing to something, and the fact that it sent notifications was a great bonus.

Back in my undergrad, there was a mad lad that built a mobile app for the school website by reverse-engineering it. That means he could login with his student credentials, see his classes, register for them and the entire thing. Surprisingly enough, the app's UI was actually cleaner than the actual website's. How he actually built that, I have no idea, but obviously that taught me that if something sucks, you can always just built a neat trinket to get around the minor inconvenience. That resulted in me coding up this project on a weekend.

Last semester, I added them all into my calendar app manually but in typical tech nerd fashion, I went "why waste 5 minutes on doing it manually when I can waste 50 minutes automating it?"

## Implementation

As a Software Engineer, I'm always glued to a computer, whether it be my home desktop or my laptop. Since Chromium is prevalent and I hate ads, I use Brave. Since I was using Brave for most of my internet browsing, including visiting my university website, I opted to just build a Chrome Extension. The plan was simple: add a button somewhere, click on it and you download your schedule in .ics format, which is accepted by most calendar apps.

How I actually ended up doing it was grabbing the HTML snippet of the class registration window at https://mq-edu.t1cloud.com/T1Default/CiAnywhere/Web/MQ-EDU/StudentTimetabling/StudentClassRegistrationMyMaintenance.

![https://github.com/khosbilegt/mq-timetable-exporter/raw/main/example.png](https://github.com/khosbilegt/mq-timetable-exporter/raw/main/example.png)

The fact that the university website conveniently used the proper HTML table tags made my search easier, so I simply iterated through them, got the day of the week, the name of the class and their start and end times. Then having it be saved in .ics format was trivial.

Then I started looking for a neat place to put the button for exporting it, so I ended up adding an extra button (the blue one in the image) which brings up a dropdown that lets you select the start and end dates. Since there wasn't actually anywhere that explained when the semester started and ended, and since I deemed it not worth it to do research into how some sessions worked (like Session 3, which is during summer break) so opted to simply accept it from the user.

## Conclusion

It's easy to see how people think that the age of SaaS is done, but there are some nuances to it, like maintenance. If the university re-designed their website, I'd have to come back and fix this up. That's maintenance overhead, and it's something that most consumers wouldn't want to deal with. However, I do think that any SaaS that can be trivialized by vibe coding are the millions of low-effort, unpolished products that followed the 2023 SaaS hype wave, where every grifter went from forex, crypto and NFT grifting to saying "just build a SaaS, bro".

Regardless, I'm in a pretty nice spot where I have technical competence and can get stuff that I would otherwise be too lazy or too busy to do, and let others use it as well.

## Disclaimer

This is not endorsed, encouraged or in any way affiliated with the Macquarie University. It's just something I made for my own convenience.
