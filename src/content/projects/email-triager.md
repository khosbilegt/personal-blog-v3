---
title: "Email Triager"
type: "PERSONAL"
heroImage: "https://img.freepik.com/free-vector/envelope-mail-open-communication-icon_24877-83666.jpg?semt=ais_incoming&w=740&q=80"
pubDate: "March 30 2026"
description: "Python script to run a triage on new emails and mark them read if unimportant. Started as Openclaw experimentation with local models but failed."
---

Personal script to run a triage on new emails and a Powershell script to add to Windows Task Scheduler to make it automatic.

Uses a local Ollama model to determine whether the email is important, and if it's not important, marks it as read in your stead.

## Context

Experimented with Openclaw with local Ollama models and it was horrible for my device's specs. Had already made up a task to use it for so just ended up making it a python script.
