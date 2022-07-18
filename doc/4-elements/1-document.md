

# Unique Document Elements

These elements are unique to each document. Some of the selectors are not pure element selectors.
But due to their uniqueness it makes sense to address them without any added class specificity.

## Document root

- [`html`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) /
  [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

## Sectioning root

- [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)

## The document’s main content

- [`main:not([hidden])`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
  ([There can be only one!](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element:attr-hidden))

## The document’s main header

- `:where(body, body > div) > header:first-of-type`

## The document’s main footer

- `:where(body, body > div) > footer:last-of-type`
- Useful technique: [Clever sticky footer](https://css-tricks.com/a-clever-sticky-footer-technique/)

## The current target element

- [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)
- Useful property: [`scroll-margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top)
