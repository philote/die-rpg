# DieRpg System

![Cover](./assets/cover.webp)

![Foundry v11](https://img.shields.io/badge/foundry-v11-green)
![Foundry v12](https://img.shields.io/badge/Foundry-v12-informational)

This system is a DIE RPG system.

![Screenshot](./assets/screenshot.webp)

## Features

- Basic Character Sheet
- Basic roll functionality

## How to Install

You can install the latest released version of the system by using this manifest link in Foundry VTT. [Instructions](https://foundryvtt.com/article/tutorial/): 
https://github.com/philote/die-rpg/releases/latest/download/system.json

## Sheet Layout

This system includes a handful of helper CSS classes to help you lay out your sheets if you're not comfortable diving into CSS fully. Those are:

- `flexcol`: Included by Foundry itself, this lays out the child elements of whatever element you place this on vertically.
- `flexrow`: Included by Foundry itself, this lays out the child elements of whatever element you place this on horizontally.
- `flex-center`: When used on something that's using flexrow or flexcol, this will center the items and text.
- `flex-between`: When used on something that's using flexrow or flexcol, this will attempt to place space between the items. Similar to "justify" in word processors.
- `flex-group-center`: Add a border, padding, and center all items.
- `flex-group-left`: Add a border, padding, and left align all items.
- `flex-group-right`: Add a border, padding, and right align all items.
- `grid`: When combined with the `grid-Ncol` classes, this will lay out child elements in a grid.
- `grid-Ncol`: Replace `N` with any number from 1-12, such as `grid-3col`. When combined with `grid`, this will layout child elements in a grid with a number of columns equal to the number specified.
