---
title: Road Domination v0.2.0
subtitle: January(ish) release
summary: >-
  Enhanced shaders,
  game engine optimisation,
  Steam Overlay handling,
  visual improvements.
thumbnail: 2023-02-04-Road-Domination-v0.2.0.png
header: 2023-02-04-Road-Domination-v0.2.0.png
layout: post
---

In this month's update, we've focused mainly on improvements of shaders and game engine optimisation. However, there are a few other changes that you will notice in the game.

## Garage Makeover

![Garage changes 1](/assets/images/Road-Domination-v0.2.0-garage1.png)

![Garage changes 2](/assets/images/Road-Domination-v0.2.0-garage2.png)

## New Objects In The World

![New tree model](/assets/images/Road-Domination-v0.2.0-tree.png)

![Petrol station](/assets/images/Road-Domination-v0.2.0-petrol-station.png)

## Release Notes

### Added

- Pause game level (neighbourhood) when the window loses focus
- Pause game level (neighbourhood) when Steam overlay is shown
- Traffic lights at selected junctions
- Petrol station building
- Display the garage

### Changed

- Replace low-poly trees with more sophisticated models
- Improve bends on the world map
- Improve algorithm for environmental lighting
- Improve some materials
- Exclude version from names of game packages to optimise update downloads
- Group models and textures in several packages to minimise download size
- Change game icon to more readable at small size

### Fixed

- Restore keyboard, mouse and/or game controller input after Steam overlay is hidden
- Fix algorithm for selecting lights used in rendering of given object
