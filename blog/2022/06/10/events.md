---
title: JavaScript Events
tags: [javascript, dom, events]
slug: js-events
authors:
  name: Anupam Chakraborty
  title: Frontend Developer
  url: https://github.com/anupam-crownstack
  image_url: https://github.com/anupam-crownstack.png
  email: anupam.chakraborty@crownstack.com
---

# Events

Events allow us to add interactive functionality to HTML elements by “listening” to different events that take place on the page, such as when the user clicks a button, presses a key, or when an element loads.

<!--truncate-->

## What is an Event?

Event is a signal that is generated on a webpage by a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window.

Signal means that an action has happened like a click somewhere, mouse hovering or anything of importance.

:::note
All DOM nodes generate such signals (but events are not limited to DOM).
:::

We can then listen for these events and handle them in our code using the event handler.

## Event Handler

Event handler provides a mechanism by which a block of code (usually a JavaScript function that you as a programmer create) runs when the event occurs.

When a function is defined to run in response to an event, we say we are registering an event handler.

:::note
Event handlers are used interchangeably with event listeners — strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.
:::

## Event Type

An event type is an event object with a particular name and which defines particular trigger conditions, properties, and other characteristics which distinguish it from other event types. For example, the click event type has different characteristics than the mouseover or load event types.

Here is the list of event types: https://www.w3schools.com/jsref/dom_obj_event.asp

## Event dispatch and DOM event flow

A brief overview of the event dispatch mechanism and describes how events propagate through the DOM tree.

![Event flow](https://www.w3.org/TR/uievents/images/eventflow.svg)

Event objects are dispatched to an event target. But before dispatch can begin, the event object’s propagation path must first be determined.

The propagation path is an ordered list of current event targets through which the event passes. This propagation path reflects the hierarchical tree structure of the document. The last item in the list is the event target, and the preceding items in the list are referred to as the target’s ancestors, with the immediately preceding item as the target’s parent.

Once the propagation path has been determined, the event object passes through one or more event phases.

There are three event phases: **capture phase**, **target phase** and **bubble phase**. Event objects complete these phases as described below. A phase will be skipped if it is not supported, or if the event object’s propagation has been stopped.

For example, if the bubbles attribute is set to false, the bubble phase will be skipped, and if stopPropagation() has been called prior to the dispatch, all phases will be skipped.

### The capture phase

The event object propagates through the target’s ancestors from the Window to the target’s parent. This phase is also known as the capturing phase.

### The target phase

The event object arrives at the event object’s event target. This phase is also known as the at-target phase. If the event type indicates that the event doesn’t bubble, then the event object will halt after completion of this phase.

### The bubble phase

The event object propagates through the target’s ancestors in reverse order, starting with the target’s parent and ending with the Window. This phase is also known as the bubbling phase.

## References:

- https://www.w3.org/TR/uievents/#ui-events-intro
- https://www.w3.org/TR/uievents/#dom-event-architecture
- https://www.w3schools.com/jsref/dom_obj_event.asp
