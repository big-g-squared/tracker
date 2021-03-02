# The tracker project

The tracker project is meant to be a solution to the problem of forgetful learning.

## Problem Statement

As a Berkeley student, I'm constantly having to choose what work merits priority and when I should study it. Usually my process involves creating a mental relational map of the concepts that I still don't know, don't understand, or haven't reviewed in quite some time (and the former doesn't happen until usually close to midterm season). This method is awful because usually I'll forget the connections that I've made given that my attention span is rather limited. Why not write this all down in a notebook, then? This is tedious and it does not play to the habit forming framework mentioned in James Clear's _Atomic Habits_: 
 
1. Make it Obvious
2. Make it Attractive
3. Make it Easy
4. Make it Satisfying

Studying itself is affected by this, since having to make a choice as to what you're going to study next based on the rough idea of what you do/don't understand violates the first principle (it should be obvious what you need to study next) and the third principle (rummaging around that old noggin of yours trying to gauge your EXTREMELY relative level of understanding is daunting and quite often inaccurate). This adds to the stress of studying which violates the second principle (because what's more attractive than more stress???!?!?!) and leaves you wondering after every study session whether you are studying enough/if you're studying the right things, which violates the fourth principle.

This project is meant to address these issues.

## Method

The method I plan on using plays on the following principles of effective learning: 

1. Knowing the difference between _focused_ studying and _diffuse_ mode of the brain.
2. Focusing on the _recall_ of information from some particular class.
3. _Spacing recall_ sessions using increasing time intervals between sessions.
4. Employing the _pomodoro technique_ to make engagement frictionless.
5. _Collaborative learning_ by emphasizing office hours and peer-to-peer collaboration

### Organization method

The software assumes a particular organizational method: 

* The student organizes their work into _units_. For example, one unit is reading a set of pages in a textbook or completing a homework assignment.
* A _module_ organizes the units into related sets. For example, if you need to do a reading before attempting a homework, these two units would belong in the same module.
* A unit usually has a method of tracking information attached to it. For example, you might have notes relating to unit 1 of module 3, which was a reading unit. You also might have flashcards for unit 3 of module 3, which is the homework that you're trying to memorize the solutions to.
* A unit will have a difficuly rating. The student will rate the unit according to the difficulty they had understanding it the last time they tried studying it.

### Program Goals

The goals for this software are as follows:

1. Prioritize units based on perceived difficulty/understanding level
2. Schedule sessions of recall to establish good context.
3. Leverage diffuse-mode thinking by making students memorize fine details.
4. Leverage office hours by scheduling study sessions appropriately to give students the proper context to jump into office hours with the right conceptual tools.
5. Schedule spaced sessions of recall to establish knowledge of problem-solving methods _before_ exam season begins.
6. Leverage matchmaking capabilities to pair students with the optimal study partner to increase _engagement_ rather than just understanding.

## Tech

The tech I plan to use includes, but is not limited to: 

1. React: Good for web development, should also be easier to transition into mobile development if the need arises.
2. GraphQL: Excellent for rapid prototyping and for connecting disparate services under a single API.
3. Apollo & Prisma: I fell in love with Prisma when I did the [howtographql](https://www.howtographql.com) tutorial which has me build a hackernews clone frontend and backend.
4. CvxPy: Good for optimization models and convex programming.
5. Flutter: Good for rapid prototying on mobile. Maybe might use for initial deployments if I get lazy enough.

# Thank you for reading!
