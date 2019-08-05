# Tabbed component
> This tabbed component allows you to show and hide content based on what the user selects.

<img src="https://res.cloudinary.com/dtqevfsxh/image/upload/v1565016790/portfolio/connect-four.png" width="899px">

## View project
 :mag: Live version available at [nickhericks.github.io/tabs/](https://nickhericks.github.io/tabs/)

## What I learned
- DOM traversals
- The `:not()` pseudo-class selector. For example, using it to give styling to elements that do not have the .is-selected class applied to them.

```JavaScript
.tab:not(.is-selected) .tab__icon {
  color: rgba(255, 255, 255, 0.25);
}
```

## Acknowledgements
This project is part of a great JS course called [Learn JavaScript](https://learnjavascript.today/). Thank you to the course creator [@zellwk](https://github.com/zellwk) :raised_hands:

## Demo
<img src="https://github.com/zellwk/jsf/raw/master/images/components/tabbed-component/basic/completed.gif" width="500">
