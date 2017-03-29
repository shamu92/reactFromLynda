import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render(
	<SkiDayList days={
		[
			{
				resort:"Squaw Valley",
				date: new Date("1/2/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort:"Mammoth",
				date: new Date("2/24/2016"),
				powder: true,
				backcountry: false
			},
			{
				resort:"Whistler",
				date: new Date("3/22/2016"),
				powder: true,
				backcountry: true
			}
		]
	}/>,
	document.getElementById('react-container')
)