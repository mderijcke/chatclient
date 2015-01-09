# chat client
A chat client for interacting with contacts on all of your networks. Targeting
every JS enabled browser. (even IE7!)

## What
A multi-protocol chat bouncer with REST API + a web interface that doesn't look
like it was ripped from an IRC webclient from 2003.

Think of universal (web) access, offline messages, proper history (or none at
all), multi-protocol bots, etc.

## Why
libpurple is bad, but the idea of plug-and-play IM protocols isn't.

## Ok..? Why not improve it?
It started as a pidgin plugin to export all functions over a REST API written in
max 3 hours because I got fed up with all the bugs with X forwarding (yes, X
forwarding, I know it's a pain, but it was a quick and dirty solution that kind
of stayed around).

But it used quite some resources and to fully utilize libpurple's functions more
complicated REST request handlers had to be written in C. Node.js made me lazy
over the years: I didn't feel like compiling every time, and to implement async
more or less by hand.

Searching around for node.js libpurple bindings, info and feedback the same
thing was repeated over and over again: don't bother with libpurple, it's a huge
security trainwreck that nobody really knows how to fix (as in it's so big and
messy).

## Version
0.0.0 aka not even working yet.

## Task list
- interface (**Vorlot** is working on the basis already, will be up soon)
- full database design / structure (in lib/tables.js)
- protocol framework
- server side plugin framework
- standard protocols being implemented
 - IRC
 - XMPP

### Those things are too complicated to me!
Just look through the code; it's full of comments of (usually minor) things that
have to be done but where I was too lazy for at that point.

## License
CC0
