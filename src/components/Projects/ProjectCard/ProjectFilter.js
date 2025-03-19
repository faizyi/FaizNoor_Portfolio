import React from 'react'
import { FilterButtons } from './ProjectCardElements'
export const ProjectFilter = ({setFilter}) => {
  return (
    <FilterButtons>
    <button className="FilterBtn" onClick={() => setFilter("all")}>All</button>
    <button className="FilterBtn" onClick={() => setFilter("web")}>Web</button>
    <button className="FilterBtn" onClick={() => setFilter("app")}>App</button>
    </FilterButtons>
  )
}
