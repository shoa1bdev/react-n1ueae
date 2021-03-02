import React, { useState } from "react";
import "./style.css";
import Slider from './Slider'
import SidebarItem from './SidebarItem.js'

const DEFAULT_OPTIONS =
 [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

export default function App() {

const handleSliderChange = ({ target }) => {
  setOptions(prevOption => {
   return prevOption.map((option, index) => {
     if (index !== selectedOptionIndex) { return option
   } else { 
     return { ...option, value: target.value}
   }
   })
  })
}

const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
const [options, setOptions ] = useState(DEFAULT_OPTIONS)
const selectedOption = options[selectedOptionIndex]

const handleStyleChange = () => {
 const filters = options.map(option => {
 return `${option.property}(${option.value}${option.unit})`
 })

 return { filter: filters.join(' ') }
}

console.log(handleStyleChange)
  return (
    <div className="container">
      <div className="img-container" style={handleStyleChange()} />
      <div className="sidebar">
      {options.map((option, index) => {
        return (<SidebarItem 
        key={index}
        name={option.name}
        active={index === selectedOption}
        handleChange={() => setSelectedOptionIndex(index) }
         />)
      })}
      </div>
      <Slider
      min={selectedOption.range.min}
      max={selectedOption.range.max}
      handleChange={handleSliderChange}
       />
    </div>
  );
}
